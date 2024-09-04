import { chooseRandom, randomInt } from "@/random";
import type { TestProps } from "@components/types";
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
  const { onCorrectAnswer, onIncorrectAnswer } = props;
  const [question, setQuestion] = React.useState(generateQuestion());

  const onAnswer = (answer: number) => {
    if (answer === question.answer) {
      onCorrectAnswer();
    } else {
      onIncorrectAnswer();
    }

    setQuestion(generateQuestion());
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>How many columns have the same letter?</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-6 text-2xl">
        {question.columns.map(([lowercase, uppercase]) => (
          <div className="space-y-6">
            <div className="text-center">{lowercase}</div>
            <div className="text-center">{uppercase}</div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        {Array.from({ length: 5 }, (_, i) => (
          <Button key={i} onClick={() => onAnswer(i)}>
            {i}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};

export default Perceptual;

const letters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i),
);

function generateQuestion() {
  const numSame = randomInt(0, 4);
  const sameLetters = chooseRandom(letters, numSame, true);

  let columns: [string, string][] = sameLetters.map((letter) => [
    letter.toLowerCase(),
    letter,
  ]);

  for (let i = numSame; i < 4; i++) {
    const [letter1, letter2] = chooseRandom(letters, 2, true);
    columns.push([letter1.toLowerCase(), letter2]);
  }

  columns = chooseRandom(columns, columns.length, true);
  return {
    columns,
    answer: numSame,
  };
}
