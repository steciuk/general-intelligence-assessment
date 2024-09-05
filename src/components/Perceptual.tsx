import { chooseRandom, randomInt } from "@/random";
import TestIntro from "@components/TestIntro";
import { TestName, type TestProps } from "@components/types";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import React from "react";

const Perceptual = (props: TestProps) => {
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
        testName={TestName.PERCEPTUAL_SPEED}
        onStartTest={props.onStartTest}
      >
        <p>
          In this test, you will be presented with four columns of letters. Your
          task is to identify how many columns have the same letter.
        </p>
      </TestIntro>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>How many columns have the same letter?</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-6 text-2xl">
        {question.columns.map(([lowercase, uppercase], i) => (
          <div className="space-y-6" key={i}>
            <div className="text-center">{lowercase}</div>
            <div className="text-center">{uppercase}</div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        {Array.from({ length: question.columns.length + 1 }, (_, i) => (
          <Button key={i} onClick={() => onAnswer(i)}>
            {i}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};

export default Perceptual;

const LETTERS = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i),
);
const NUM_COLUMNS = 4;

function generateQuestion() {
  const numSame = randomInt(0, NUM_COLUMNS);
  const sameLetters = chooseRandom(LETTERS, numSame, true);

  let columns: [string, string][] = sameLetters.map((letter) => [
    letter.toLowerCase(),
    letter,
  ]);

  for (let i = numSame; i < NUM_COLUMNS; i++) {
    const [letter1, letter2] = chooseRandom(LETTERS, 2, true);
    columns.push([letter1.toLowerCase(), letter2]);
  }

  columns = chooseRandom(columns, columns.length, true);
  return {
    columns,
    answer: numSame,
  };
}
