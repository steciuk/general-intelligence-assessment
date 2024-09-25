import React, { useContext } from "react";
import { TestName, type TestResults } from "@components/TestApp/types";
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
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Button } from "@components/ui/button";
import { LocaleContext } from "@/contexts/LocaleContext";
import { i18n } from "@/i18n";

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

const MAX_TEST_HISTORY = 50;

const TESTS = Object.values(TestName);

const TestsResults = (props: {
  currentResults: TestResults;
  restartTests: () => void;
  goToTestSelection: () => void;
}) => {
  const { currentResults, restartTests, goToTestSelection } = props;
  const locale = useContext(LocaleContext);
  const t = i18n(locale);
  const [previousResults, setPreviousResults] = useLocalStorage<TestResults[]>(
    "testResults",
    [],
  );

  const results = React.useMemo(() => {
    const lastMaxTests = previousResults.slice(-MAX_TEST_HISTORY);
    const resultsMap = new Map<TestName, ScoredResult[]>();

    TESTS.forEach((testName) => {
      const results: ScoredResult[] = [];

      for (const testResults of lastMaxTests) {
        const testResult = testResults[testName];

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

      resultsMap.set(testName, results);
    });

    return resultsMap;
  }, [currentResults, previousResults]);

  return (
    <>
      <ul className="space-y-4">
        {TESTS.map((testName) => {
          const currentResult = currentResults[testName];
          const allResults = results.get(testName);

          return (
            <Card key={testName}>
              <CardHeader>
                <CardTitle>{t("test-names", testName)}</CardTitle>
              </CardHeader>
              {currentResult && (
                <CardContent className="flex items-center justify-between text-xl">
                  <div className="flex flex-wrap overflow-hidden rounded-sm text-center">
                    <div className="min-w-12 bg-chart-2 p-2 text-destructive-foreground">
                      {currentResult.numCorrect}
                    </div>
                    <div className="min-w-12 bg-destructive p-2 text-destructive-foreground">
                      {currentResult.numIncorrect}
                    </div>
                  </div>
                  <div className="font-bold">
                    {SCORING_FUNCTIONS[testName](
                      currentResult.numCorrect,
                      currentResult.numIncorrect,
                    )}
                  </div>
                </CardContent>
              )}
              <CardFooter>
                {allResults && allResults.length > 0 ? (
                  <ResultsChart results={allResults} />
                ) : (
                  <p className="w-full text-center font-thin">
                    {t("results-history", "no-results")}
                  </p>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </ul>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row-reverse">
        {Object.keys(currentResults).length > 0 && (
          <Button onClick={restartTests}>
            {t("results-history", "retake")}
          </Button>
        )}
        {/* TODO: add some confirmation */}
        <Button
          variant="destructive"
          onClick={() => {
            setPreviousResults([]);
            goToTestSelection();
          }}
          disabled={previousResults.length === 0}
        >
          {t("results-history", "clear-history")}
        </Button>
      </div>
    </>
  );
};

export default TestsResults;
