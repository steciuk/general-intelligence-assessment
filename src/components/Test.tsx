import Reasoning from "@components/Reasoning/Reasoning";
import type { TestProps } from "@components/types";
import { Button } from "@components/ui/button";
import { Progress } from "@components/ui/progress";
import React from "react";

const MAX_TIME = 5 * 60; // 5 minutes

const Test = (props: { render: (props: TestProps) => React.ReactElement }) => {
  const [testState, setTestState] = React.useState<
    "not-started" | "in-progress" | "completed"
  >("not-started");
  const [time, setTime] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = React.useState(0);

  const resetTest = () => {
    setTime(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
  };

  const onCorrectAnswer = () => {
    setCorrectAnswers((prev) => prev + 1);
  };

  const onIncorrectAnswer = () => {
    setIncorrectAnswers((prev) => prev + 1);
  };

  React.useEffect(() => {
    if (testState === "in-progress") {
      const interval = setInterval(() => {
        if (time >= MAX_TIME) {
          clearInterval(interval);
          setTestState("completed");
          return;
        }
        setTime((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [testState, time]);

  return (
    <div>
      <h1>Reasoning</h1>
      {testState === "not-started" ? (
        <Button onClick={() => setTestState("in-progress")}>Start Test</Button>
      ) : testState === "in-progress" ? (
        <>
          <Progress value={(time / MAX_TIME) * 100} reverse />
          <p>Correct answers: {correctAnswers}</p>
          <p>Incorrect answers: {incorrectAnswers}</p>
          <Button onClick={resetTest}>Reset Test</Button>
          {props.render({ onCorrectAnswer, onIncorrectAnswer })}
        </>
      ) : (
        <div>Completed</div>
      )}
    </div>
  );
};

export default Test;
