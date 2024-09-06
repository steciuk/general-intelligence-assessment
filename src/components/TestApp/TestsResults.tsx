import React from "react";
import { TestName, type TestResult } from "@components/TestApp/types";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";

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

const TestsResults = (props: { results: TestResult[] }) => {
  return (
    <>
      <ol className="space-y-4">
        {props.results.map((result) => (
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
          </Card>
        ))}
      </ol>
    </>
  );
};

export default TestsResults;
