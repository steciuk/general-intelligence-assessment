import { chooseRandom, pickRandom } from "@/random";
import type { TestProps } from "@components/types";
import { Button } from "@components/ui/button";
import { Card, CardHeader, CardTitle, CardFooter } from "@components/ui/card";
import { categories } from "@components/Words/data";
import React from "react";

const Words = (props: TestProps) => {
  const { onCorrectAnswer, onIncorrectAnswer } = props;
  const [question, setQuestion] = React.useState(generateQuestion());

  const onAnswer = (answer: string) => {
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
        <CardTitle>Which word doesn't belong?</CardTitle>
      </CardHeader>
      <CardFooter className="flex">
        {question.words.map((word) => (
          <Button key={word} onClick={() => onAnswer(word)}>
            {word}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};

export default Words;

function generateQuestion() {
  const [matching, odd] = chooseRandom(categories, 2, true);
  const matchingWords = chooseRandom(matching, 2, true);
  const oddWord = pickRandom(odd);

  const words = [...matchingWords, oddWord];
  return {
    words: chooseRandom(words, words.length, true),
    answer: oddWord,
  };
}
