import { chooseRandom, pickRandom } from "@/random";
import TestButton from "@components/TestApp/TestButton";
import TestIntro from "@components/TestApp/TestIntro";
import {
  TestName,
  type TestProps,
  type WordsMeaningData,
} from "@components/TestApp/types";
import { Card, CardHeader, CardTitle, CardFooter } from "@components/ui/card";
import React, { useCallback } from "react";
import { logOnIncorrect } from "@components/TestApp/logOnIncorrect";
import { useTranslations } from "@/contexts/TranslationsContext";
import { useTestData } from "@/contexts/TestDataContext";

const Words = (props: TestProps) => {
  const { onCorrectAnswer, onIncorrectAnswer, onAnswerRecorded, testState } =
    props;
  const t = useTranslations("words-meaning");
  const { question, newQuestion } = useQuestion();

  const onAnswer = (answer: string) => {
    const isCorrect = answer === question.answer;
    onAnswerRecorded({
      question: {
        words: question.words,
        answer: question.answer,
      },
      questionType: TestName.WORDS_MEANING,
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

    newQuestion();
  };

  if (testState === "intro")
    return (
      <TestIntro
        testName={TestName.WORDS_MEANING}
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

function useQuestion() {
  const data = useTestData(TestName.WORDS_MEANING);

  const [question, setQuestion] = React.useState(() => generateQuestion(data));

  const newQuestion = useCallback(() => {
    setQuestion(generateQuestion(data));
  }, [data]);

  return {
    question,
    newQuestion,
  };
}

function generateQuestion(data: WordsMeaningData) {
  const [matching, odd] = chooseRandom(data, 2, true);
  const matchingWords = chooseRandom(matching, 2, true);
  const oddWord = pickRandom(odd);

  const words = [...matchingWords, oddWord];
  return {
    words: chooseRandom(words, words.length, true),
    answer: oddWord,
  };
}
