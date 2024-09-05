import { TestName, type TestProps } from "@components/types";
import React from "react";

import Numbers from "@components/Numbers";
import Perceptual from "@components/Perceptual";
import Reasoning from "@components/Reasoning/Reasoning";
import Spatial from "@components/Spatial";
import Test from "@components/Test";
import Words from "@components/Words/Words";

const TEST_MAP = {
  [TestName.REASONING]: Reasoning,
  [TestName.PERCEPTUAL_SPEED]: Perceptual,
  [TestName.NUMBERS_SPEED_AND_ACCURACY]: Numbers,
  [TestName.WORDS_MEANING]: Words,
  [TestName.SPATIAL_VISUALIZATION]: Spatial,
} as const satisfies { [key in TestName]: (props: TestProps) => JSX.Element };

const TestPerformer = (props: { tests: TestName[] }) => {
  const { tests } = props;
  const [currentTestIndex, setCurrentTestIndex] = React.useState(0);
  const CurrentTest = TEST_MAP[tests[currentTestIndex]];

  const onCompleted = (numCorrect: number, numIncorrect: number) => {
    if (currentTestIndex === tests.length - 1) {
      // TODO: Show results
      console.log("All tests completed");
      return;
    }

    setCurrentTestIndex((index) => index + 1);
  };

  return (
    <Test onCompleted={onCompleted}>
      {(props) => <CurrentTest {...props} />}
    </Test>
  );
};

export default TestPerformer;
