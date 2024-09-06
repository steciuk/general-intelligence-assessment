import TestPerformer from "@components/TestApp/TestPerformer";
import TestSelector, {
  type TestOption,
} from "@components/TestApp/TestSelector/TestSelector";
import TestsResults from "@components/TestApp/TestsResults";
import { TestName, type TestResult } from "@components/TestApp/types";
import { Button } from "@components/ui/button";
import { ArrowLeft } from "lucide-react";
import React, { StrictMode } from "react";

const TestApp = () => {
  const [phase, setPhase] = React.useState<
    | { name: "select" }
    | { name: "test" }
    | { name: "results"; data: TestResult[] }
  >({ name: "select" });
  const [testOptions, setTestOptions] = React.useState<TestOption[]>([
    { name: TestName.REASONING, selected: true },
    { name: TestName.PERCEPTUAL_SPEED, selected: true },
    { name: TestName.NUMBERS_SPEED_AND_ACCURACY, selected: true },
    { name: TestName.WORDS_MEANING, selected: true },
    { name: TestName.SPATIAL_VISUALIZATION, selected: true },
  ]);

  const onCompleted = (testResults: TestResult[]) => {
    setPhase({ name: "results", data: testResults });
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
            <TestsResults results={phase.data} />
            <Button
              className="m-auto flex"
              onClick={() => setPhase({ name: "test" })}
            >
              Retake the tests
            </Button>
          </div>
        ) : null}
      </section>
    </StrictMode>
  );
};

export default TestApp;
