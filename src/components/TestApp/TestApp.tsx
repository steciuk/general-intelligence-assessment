import TestPerformer from "@components/TestApp/TestPerformer";
import TestSelector, {
  type TestOption,
} from "@components/TestApp/TestSelector/TestSelector";
import TestsResults from "@components/TestApp/TestResults/TestsResults";
import { TestName, type TestResults } from "@components/TestApp/types";
import { Button } from "@components/ui/button";
import { ArrowLeft } from "lucide-react";
import React, { StrictMode } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const TestApp = () => {
  const [phase, setPhase] = React.useState<
    | { name: "select" }
    | { name: "test" }
    | {
        name: "results";
        currentResults: TestResults;
      }
  >({ name: "select" });
  const [testOptions, setTestOptions] = React.useState<TestOption[]>([
    { name: TestName.REASONING, selected: true },
    { name: TestName.PERCEPTUAL_SPEED, selected: true },
    { name: TestName.NUMBERS_SPEED_AND_ACCURACY, selected: true },
    { name: TestName.WORDS_MEANING, selected: true },
    { name: TestName.SPATIAL_VISUALIZATION, selected: true },
  ]);
  const [previousResults, setPreviousResults] = useLocalStorage<TestResults[]>(
    "testResults",
    [],
  );

  const onCompleted = (testResults: TestResults) => {
    const newResults = [...previousResults, testResults];

    setPreviousResults(newResults);
    setPhase({
      name: "results",
      currentResults: testResults,
    });
  };

  return (
    <StrictMode>
      <section className="space-y-6">
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
          <div className="space-y-6">
            <TestSelector
              testOptions={testOptions}
              setTestOptions={setTestOptions}
              onStartTest={() => setPhase({ name: "test" })}
            />
            <Button
              onClick={() =>
                setPhase({
                  name: "results",
                  currentResults: {},
                })
              }
              variant="outline"
              className="mx-auto flex"
            >
              See results history
            </Button>
          </div>
        ) : phase.name === "test" ? (
          <TestPerformer
            tests={testOptions
              .filter((option) => option.selected)
              .map((option) => option.name)}
            onCompleted={onCompleted}
          />
        ) : phase.name === "results" ? (
          <TestsResults
            currentResults={phase.currentResults}
            restartTests={() => setPhase({ name: "test" })}
            goToTestSelection={() => setPhase({ name: "select" })}
          />
        ) : null}
      </section>
    </StrictMode>
  );
};

export default TestApp;
