import Reasoning from "@components/Reasoning/Reasoning";
import type { TestProps } from "@components/types";
import { Button } from "@components/ui/button";
import { Progress } from "@components/ui/progress";
import React from "react";

const MAX_TIME = 8 * 60; // 5 minutes

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

  const onCorrectAnswer = () => {
    setNumCorrect((prev) => prev + 1);
  };

  const onIncorrectAnswer = () => {
    setNumIncorrect((prev) => prev + 1);
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
    <div>
      {testState === "in-progress" && (
        <>
          <Progress value={(time / MAX_TIME) * 100} reverse />
          <p>Correct answers: {numCorrect}</p>
          <p>Incorrect answers: {numIncorrect}</p>
        </>
      )}
      {props.children({
        onCorrectAnswer,
        onIncorrectAnswer,
        testState,
        onStartTest,
      })}
    </div>
  );
};

export default Test;
