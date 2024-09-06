import {
  TestName,
  type TestProps,
  type TestResult,
} from "@components/TestApp/types";
import React from "react";

import Numbers from "@components/TestApp/Numbers";
import Perceptual from "@components/TestApp/Perceptual";
import Reasoning from "@components/TestApp/Reasoning/Reasoning";
import Spatial from "@components/TestApp/Spatial";
import Test from "@components/TestApp/Test";
import Words from "@components/TestApp/Words/Words";
import TestsResults from "@components/TestApp/TestsResults";

const TEST_MAP = {
  [TestName.REASONING]: Reasoning,
  [TestName.PERCEPTUAL_SPEED]: Perceptual,
  [TestName.NUMBERS_SPEED_AND_ACCURACY]: Numbers,
  [TestName.WORDS_MEANING]: Words,
  [TestName.SPATIAL_VISUALIZATION]: Spatial,
} as const satisfies Record<TestName, (props: TestProps) => JSX.Element>;

const TestPerformer = (props: {
  tests: TestName[];
  onCompleted: (testResults: TestResult[]) => void;
}) => {
  const { tests, onCompleted } = props;
  const [currentTestIndex, setCurrentTestIndex] = React.useState(0);
  const [testResults, setTestResults] = React.useState<TestResult[]>([]);

  const currentTestName = tests[currentTestIndex];
  const CurrentTest = TEST_MAP[currentTestName];

  const onTestCompleted = (numCorrect: number, numIncorrect: number) => {
    setTestResults((results) => [
      ...results,
      { testName: currentTestName, numCorrect, numIncorrect },
    ]);

    if (currentTestIndex === tests.length - 1) {
      onCompleted(testResults);
    }

    setCurrentTestIndex((index) => index + 1);
  };

  return (
    <Test onCompleted={onTestCompleted} key={currentTestName}>
      {(props) => <CurrentTest {...props} />}
    </Test>
  );
};

export default TestPerformer;
