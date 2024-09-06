import TestPerformer from "@components/TestApp/TestPerformer";
import TestSelector, {
  type TestOption,
} from "@components/TestApp/TestSelector/TestSelector";
import TestsResults from "@components/TestApp/TestResults/TestsResults";
import { TestName, type TestResult } from "@components/TestApp/types";
import { Button } from "@components/ui/button";
import { ArrowLeft } from "lucide-react";
import React, { StrictMode } from "react";

const TestApp = () => {
  const [phase, setPhase] = React.useState<
    | { name: "select" }
    | { name: "test" }
    | {
        name: "results";
        currentResults: TestResult[];
        previousResults: TestResult[][];
      }
  >({ name: "select" });
  const [testOptions, setTestOptions] = React.useState<TestOption[]>([
    { name: TestName.REASONING, selected: true },
    { name: TestName.PERCEPTUAL_SPEED, selected: true },
    { name: TestName.NUMBERS_SPEED_AND_ACCURACY, selected: true },
    { name: TestName.WORDS_MEANING, selected: true },
    { name: TestName.SPATIAL_VISUALIZATION, selected: true },
  ]);

  const onCompleted = (testResults: TestResult[]) => {
    const previousResultsWithTimestamps = getPreviousResults();

    const timeStamp = new Date().toISOString();
    const newResults = {
      timeStamp,
      results: testResults,
    };

    localStorage.setItem(
      "testResults",
      JSON.stringify([...previousResultsWithTimestamps, newResults]),
    );

    const previousResults = previousResultsWithTimestamps.map(
      ({ results }) => results,
    );

    setPhase({ name: "results", currentResults: testResults, previousResults });
  };

  return (
    <StrictMode>
      <section className="space-y-2">
        {phase.name !== "select" && (
          <Button
            onClick={() => setPhase({ name: "select" })}
            size="icon"
            variant="outline"
          >
            <ArrowLeft />
          </Button>
        )}
        {phase.name === "select" ? (
          <TestSelector
            testOptions={testOptions}
            setTestOptions={setTestOptions}
            onStartTest={() => setPhase({ name: "test" })}
          />
        ) : phase.name === "test" ? (
          <TestPerformer
            tests={testOptions
              .filter((option) => option.selected)
              .map((option) => option.name)}
            onCompleted={onCompleted}
          />
        ) : phase.name === "results" ? (
          <div className="space-y-6">
            <TestsResults
              currentResults={phase.currentResults}
              previousResults={phase.previousResults}
            />
            <div className="flex justify-center gap-4">
              {/* TODO: add some confirmation */}
              <Button
                variant="destructive"
                onClick={() => {
                  localStorage.removeItem("testResults");
                  setPhase({ name: "select" });
                }}
              >
                Clear results history
              </Button>
              <Button onClick={() => setPhase({ name: "test" })}>
                Retake the tests
              </Button>
            </div>
          </div>
        ) : null}
      </section>
    </StrictMode>
  );
};

export default TestApp;

type ResultsWithTimestamp = { timestamp: string; results: TestResult[] };

function getPreviousResults(): ResultsWithTimestamp[] {
  let previousResultsWithTimestamps: ResultsWithTimestamp[] | null = null;

  try {
    previousResultsWithTimestamps = JSON.parse(
      localStorage.getItem("testResults") ?? "null",
    );
  } catch (error) {
    console.error("Error parsing previous results", error);
  }

  return previousResultsWithTimestamps ?? [];
}
