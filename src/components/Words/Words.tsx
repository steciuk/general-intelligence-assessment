import { chooseRandom, pickRandom } from "@/random";
import TestButton from "@components/TestButton";
import TestIntro from "@components/TestIntro";
import { TestName, type TestProps } from "@components/types";
import { Button } from "@components/ui/button";
import { Card, CardHeader, CardTitle, CardFooter } from "@components/ui/card";
import { categories } from "@components/Words/data";
import React from "react";

const Words = (props: TestProps) => {
  const { onCorrectAnswer, onIncorrectAnswer, testState } = props;
  const [question, setQuestion] = React.useState(generateQuestion);

  const onAnswer = (answer: string) => {
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
        testName={TestName.WORDS_MEANING}
        onStartTest={props.onStartTest}
      >
        <p>
          In this test, you will be presented with three words. Your task is to
          identify which word doesn't belong.
        </p>
      </TestIntro>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Which word doesn't belong?</CardTitle>
      </CardHeader>
      <CardFooter className="flex flex-wrap justify-center gap-4">
        {question.words.map((word) => (
          <TestButton key={word} onClick={() => onAnswer(word)}>
            {word}
          </TestButton>
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
