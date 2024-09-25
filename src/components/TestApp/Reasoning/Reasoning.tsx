import { chooseRandom, pickRandom, randomBool } from "@/random";
import { Card, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import React, { useContext } from "react";
import { TestName, type TestProps } from "@components/TestApp/types";
import TestIntro from "@components/TestApp/TestIntro";
import TestButton from "@components/TestApp/TestButton";
import { LocaleContext } from "@/contexts/LocaleContext";
import { i18n, type Locale } from "@/i18n";
import dataEn from "./data-en";
import dataPl from "./data-pl";
import { logOnIncorrect } from "@components/TestApp/logOnIncorrect";

const Reasoning = (props: TestProps) => {
  const locale = useContext(LocaleContext);
  const t = i18n(locale, "reasoning");
  const { onCorrectAnswer, onIncorrectAnswer, testState } = props;
  const [question, setQuestion] = React.useState(() =>
    generateQuestion(locale),
  );
  const [isStatementPhase, setIsStatementPhase] = React.useState(true);

  const onAnswer = (answer: string) => {
    if (answer === question.answer) {
      onCorrectAnswer();
    } else {
      logOnIncorrect(question, answer);
      onIncorrectAnswer();
    }

    setIsStatementPhase(true);
    setQuestion(generateQuestion(locale));
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

function generateQuestion(locale: Locale) {
  const data = locale === "pl" ? dataPl : dataEn;
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
