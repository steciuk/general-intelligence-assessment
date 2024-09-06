import type { TestProps } from "@components/TestApp/types";
import { Progress } from "@components/ui/progress";
import React from "react";
import "@components/TestApp/TestContainer/TestContainer.css";

// const MAX_TIME = 2 * 60;
const MAX_TIME = 2;

const Test = (props: {
  onCompleted: (numCorrect: number, numIncorrect: number) => void;
  children: (props: TestProps) => React.ReactElement;
}) => {
  const [testState, setTestState] = React.useState<"intro" | "in-progress">(
    "intro",
  );
  const [time, setTime] = React.useState(0);
  const [numCorrect, setNumCorrect] = React.useState(0);
  const [numIncorrect, setNumIncorrect] = React.useState(0);
  const testContainerRef = React.useRef<HTMLDivElement>(null);

  const onCorrectAnswer = () => {
    setNumCorrect((prev) => prev + 1);

    testContainerRef.current &&
      testContainerRef.current.setAttribute("data-answer", "correct");
    setTimeout(() => {
      testContainerRef.current &&
        testContainerRef.current.removeAttribute("data-answer");
    }, 300);
  };

  const onIncorrectAnswer = () => {
    setNumIncorrect((prev) => prev + 1);

    testContainerRef.current &&
      testContainerRef.current.setAttribute("data-answer", "incorrect");
    setTimeout(() => {
      testContainerRef.current &&
        testContainerRef.current.removeAttribute("data-answer");
    }, 300);
  };

  const onStartTest = () => {
    setTestState("in-progress");
  };

  React.useEffect(() => {
    if (testState === "in-progress") {
      const interval = setInterval(() => {
        if (time >= MAX_TIME) {
          clearInterval(interval);
          props.onCompleted(numCorrect, numIncorrect);
          return;
        }
        setTime((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [testState, time]);

  return (
    <div className="space-y-4">
      {testState === "in-progress" && (
        <Progress value={(time / MAX_TIME) * 100} reverse />
      )}
      <div className="test-container transition-shadow" ref={testContainerRef}>
        {props.children({
          onCorrectAnswer,
          onIncorrectAnswer,
          testState,
          onStartTest,
        })}
      </div>
    </div>
  );
};

export default Test;
