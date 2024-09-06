import React from "react";
import { TestName, type TestResult } from "@components/TestApp/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import ResultsChart, {
  type ScoredResult,
} from "@components/TestApp/TestResults/ResultsChart";

function createScoringFunction(numPossibleAnswers: number) {
  return (numCorrect: number, numIncorrect: number) => {
    const score = numCorrect - numIncorrect * (1 / (numPossibleAnswers - 1));
    return Math.max(score, 0);
  };
}

const SCORING_FUNCTIONS = {
  [TestName.REASONING]: createScoringFunction(2),
  [TestName.PERCEPTUAL_SPEED]: createScoringFunction(5),
  [TestName.NUMBERS_SPEED_AND_ACCURACY]: createScoringFunction(3),
  [TestName.WORDS_MEANING]: createScoringFunction(3),
  [TestName.SPATIAL_VISUALIZATION]: createScoringFunction(3),
} as const satisfies {
  [key in TestName]: (numCorrect: number, numIncorrect: number) => number;
};

// const THRESHOLDS = {
//   [TestName.REASONING]: { average: 28, high: 35 },
//   [TestName.PERCEPTUAL_SPEED]: { average: 47, high: 52 },
//   [TestName.NUMBERS_SPEED_AND_ACCURACY]: { average: 17, high: 24 },
//   [TestName.WORDS_MEANING]: { average: 28, high: 37 },
//   [TestName.SPATIAL_VISUALIZATION]: { average: 12, high: 20 },
// } as const satisfies { [key in TestName]: { average: number; high: number } };

// const Thresholds = () => {
//   return (
//     <ol>
//       {Object.entries(THRESHOLDS).map(([testName, { average, high }]) => (
//         <li key={testName}>
//           <h2>{testName}</h2>
//           <p>Average: {average}</p>
//           <p>High: {high}</p>
//         </li>
//       ))}
//     </ol>
//   );
// };

const MAX_TEST_HISTORY = 20;

const TestsResults = (props: {
  currentResults: TestResult[];
  previousResults: TestResult[][];
}) => {
  const { currentResults, previousResults } = props;

  const results = React.useMemo(() => {
    const lastMaxTests = previousResults.slice(-MAX_TEST_HISTORY);

    const resultsMap = new Map<TestName, ScoredResult[]>();

    currentResults.forEach(({ testName, ...rest }) => {
      const results: ScoredResult[] = [];

      for (const testResults of lastMaxTests) {
        const testResult = testResults.find(
          (result) => result.testName === testName,
        );
        if (testResult) {
          results.push({
            numCorrect: testResult.numCorrect,
            numIncorrect: testResult.numIncorrect,
            score: SCORING_FUNCTIONS[testName](
              testResult.numCorrect,
              testResult.numIncorrect,
            ),
          });
        }
      }

      results.push({
        numCorrect: rest.numCorrect,
        numIncorrect: rest.numIncorrect,
        score: SCORING_FUNCTIONS[testName](rest.numCorrect, rest.numIncorrect),
      });

      resultsMap.set(testName, results);
    });

    return resultsMap;
  }, [currentResults, previousResults]);

  return (
    <ol className="space-y-4">
      {currentResults.map((result) => {
        const testResults = results.get(result.testName);

        return (
          <Card key={result.testName}>
            <CardHeader>
              <CardTitle>{result.testName}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-xl">
              <div className="flex flex-wrap overflow-hidden rounded-sm text-center">
                <div className="min-w-12 bg-chart-2 p-2 text-destructive-foreground">
                  {result.numCorrect}
                </div>
                <div className="min-w-12 bg-destructive p-2 text-destructive-foreground">
                  {result.numIncorrect}
                </div>
              </div>
              <div className="font-bold">
                {SCORING_FUNCTIONS[result.testName](
                  result.numCorrect,
                  result.numIncorrect,
                )}
              </div>
            </CardContent>
            <CardFooter>
              {testResults && <ResultsChart results={testResults} />}
            </CardFooter>
          </Card>
        );
      })}
    </ol>
  );
};

export default TestsResults;
