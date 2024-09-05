import { chooseRandom, pickRandom, randomBool, randomInt } from "@/random";
import TestIntro from "@components/TestIntro";
import { TestName, type TestProps } from "@components/types";
import { Button } from "@components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@components/ui/card";
import React from "react";

const Spatial = (props: TestProps) => {
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
        testName={TestName.SPATIAL_VISUALIZATION}
        onStartTest={props.onStartTest}
      >
        <p>
          In this test, you will be presented with two columns of letters. Your
          task is to identify how many boxes have the same letter. Rotated
          letters are considered the same, while mirrored letters are not.
        </p>
      </TestIntro>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>How many boxes have the same letter?</CardTitle>
        <CardDescription>
          Rotated letters are considered the same, while mirrored letters are
          not.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-6 text-2xl">
        {question.columns.map((letters, i) => (
          <div className="space-y-6" key={i}>
            <Card>
              <CardContent className="p-4">
                {letters.map(({ isMirrored, rotation }, j) => (
                  <div
                    key={j}
                    className="text-center"
                    style={{
                      transform: `rotate(${rotation * 90}deg) scaleX(${isMirrored ? -1 : 1})`,
                    }}
                  >
                    {question.letter}
                  </div>
                ))}
              </CardContent>
            </Card>
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

export default Spatial;

const LETTERS = ["F", "G", "J", "L", "N", "P", "Q", "R", "S", "Z"];
const NUM_COLUMNS = 2;

function generateQuestion() {
  const letter = pickRandom(LETTERS);
  const numOneMirrored = randomInt(0, NUM_COLUMNS);

  const columns = Array.from({ length: NUM_COLUMNS }, (_, i) => {
    const isOneMirrored = i < numOneMirrored;
    const isMirrored = randomBool();

    const upper = { isMirrored, rotation: randomInt(0, 3) };
    const lower = { isMirrored, rotation: randomInt(0, 3) };

    if (isOneMirrored) {
      lower.isMirrored = !upper.isMirrored;
    }

    return [upper, lower];
  });

  return {
    letter,
    columns: chooseRandom(columns, columns.length, true),
    answer: NUM_COLUMNS - numOneMirrored,
  };
}
