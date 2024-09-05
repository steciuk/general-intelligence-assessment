import { chooseRandom, randomBool, randomInt } from "@/random";
import TestButton from "@components/TestButton";
import TestIntro from "@components/TestIntro";
import { TestName, type TestProps } from "@components/types";
import { Button } from "@components/ui/button";
import { Card, CardHeader, CardTitle, CardFooter } from "@components/ui/card";
import React from "react";

const Numbers = (props: TestProps) => {
  const { onCorrectAnswer, onIncorrectAnswer, testState } = props;
  const [question, setQuestion] = React.useState(generateQuestion);

  const onAnswer = (answer: number) => {
    if (answer === question.answer) {
      onCorrectAnswer();
    } else {
      onIncorrectAnswer();
    }

    setQuestion(generateQuestion());
  };

  if (testState === "intro")
    return (
      <TestIntro
        testName={TestName.NUMBERS_SPEED_AND_ACCURACY}
        onStartTest={props.onStartTest}
      >
        <p>
          In this test, you will be presented with three numbers. Your task is
          to identify which number is furthest from the median.
        </p>
      </TestIntro>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Which number is furthest from the median?</CardTitle>
      </CardHeader>
      <CardFooter className="flex flex-wrap justify-center gap-4">
        {question.numbers.map((number) => (
          <TestButton key={number} onClick={() => onAnswer(number)}>
            {number}
          </TestButton>
        ))}
      </CardFooter>
    </Card>
  );
};

export default Numbers;

function generateQuestion() {
  const middle = randomInt(10, 30);
  const lower = randomInt(1, middle - 2);
  const diff = middle - lower;

  const shake = randomInt(1, diff - 1);
  const isHigherFurther = randomBool();

  const higher = isHigherFurther
    ? middle + diff + shake
    : middle + diff - shake;

  const numbers = chooseRandom([lower, middle, higher], 3, true);

  return {
    numbers,
    answer: isHigherFurther ? higher : lower,
  };
}
