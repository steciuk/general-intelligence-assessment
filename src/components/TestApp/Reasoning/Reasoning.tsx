import { chooseRandom, pickRandom, randomBool } from "@/random";
import { Card, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import React from "react";
import {
  TestName,
  type ReasoningData,
  type TestProps,
} from "@components/TestApp/types";
import TestIntro from "@components/TestApp/TestIntro";
import TestButton from "@components/TestApp/TestButton";
import { logOnIncorrect } from "@components/TestApp/logOnIncorrect";
import { useTranslations } from "@/contexts/TranslationsContext";
import { useTestData } from "@/contexts/TestDataContext";

const Reasoning = (props: TestProps) => {
  const t = useTranslations("reasoning");
  const { onCorrectAnswer, onIncorrectAnswer, onAnswerRecorded, testState } =
    props;
  const { question, newQuestion } = useQuestion();
  const [isStatementPhase, setIsStatementPhase] = React.useState(true);

  const onAnswer = (answer: string) => {
    const isCorrect = answer === question.answer;
    onAnswerRecorded({
      question: {
        statement: question.statement,
        question: question.question,
        namesToCompare: question.namesToCompare,
        answer: question.answer,
      },
      questionType: TestName.REASONING,
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

    setIsStatementPhase(true);
    newQuestion();
  };

  if (testState === "intro")
    return (
      <TestIntro testName={TestName.REASONING} onStartTest={props.onStartTest}>
        <p className="text-justify">{t("intro")}</p>
      </TestIntro>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isStatementPhase ? question.statement : question.question}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-center">
        {isStatementPhase ? (
          <TestButton onClick={() => setIsStatementPhase(false)}>
            {t("cta")}
          </TestButton>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {question.namesToCompare.map((name) => (
              <TestButton key={name} onClick={() => onAnswer(name)}>
                {name}
              </TestButton>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default Reasoning;

function useQuestion() {
  const data = useTestData(TestName.REASONING);

  const [question, setQuestion] = React.useState(() => generateQuestion(data));

  const newQuestion = React.useCallback(() => {
    setQuestion(generateQuestion(data));
  }, [data]);

  return {
    question,
    newQuestion,
  };
}

function generateQuestion(data: ReasoningData) {
  const { names, comparisons, question: questionStart } = data;

  const comparison = pickRandom(comparisons);
  const [name1, name2] = chooseRandom(names, 2, true);
  const isStatementPositive = randomBool();
  const isQuestionPositive = randomBool();
  const swapNames = randomBool();

  const statement = `${name1} ${
    isStatementPositive
      ? pickRandom(comparison.s[0])
      : pickRandom(comparison.s[1])
  } ${name2}.`;

  const question = `${questionStart} ${isQuestionPositive ? pickRandom(comparison.q[0]) : pickRandom(comparison.q[1])}?`;

  const answer = isStatementPositive === isQuestionPositive ? name1 : name2;
  const namesToCompare = swapNames ? [name2, name1] : [name1, name2];

  return {
    statement,
    question,
    answer,
    namesToCompare,
  };
}
