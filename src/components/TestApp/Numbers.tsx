import { useTranslations } from "@/contexts/TranslationsContext";
import { chooseRandom, randomBool, randomInt } from "@/random";
import { logOnIncorrect } from "@components/TestApp/logOnIncorrect";
import TestButton from "@components/TestApp/TestButton";
import TestIntro from "@components/TestApp/TestIntro";
import { TestName, type TestProps } from "@components/TestApp/types";
import { Card, CardHeader, CardTitle, CardFooter } from "@components/ui/card";
import React from "react";

const Numbers = (props: TestProps) => {
  const { onCorrectAnswer, onIncorrectAnswer, onAnswerRecorded, testState } =
    props;
  const t = useTranslations("numbers");
  const [question, setQuestion] = React.useState(generateQuestion);

  const onAnswer = (answer: number) => {
    const isCorrect = answer === question.answer;
    onAnswerRecorded({
      question: {
        numbers: question.numbers,
        answer: question.answer,
      },
      questionType: TestName.NUMBERS_SPEED_AND_ACCURACY,
      userAnswer: answer,
      correctAnswer: question.answer,
      isCorrect,
    });

    if (isCorrect) {
      onCorrectAnswer();
    } else {
      logOnIncorrect(question, answer);
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
        <p className="text-justify">{t("intro")}</p>
      </TestIntro>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("question")}</CardTitle>
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
