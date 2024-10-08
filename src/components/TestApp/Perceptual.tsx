import { LocaleContext } from "@/contexts/LocaleContext";
import { i18n } from "@/i18n";
import { chooseRandom, randomInt } from "@/random";
import { logOnIncorrect } from "@components/TestApp/logOnIncorrect";
import TestButton from "@components/TestApp/TestButton";
import TestIntro from "@components/TestApp/TestIntro";
import { TestName, type TestProps } from "@components/TestApp/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import React, { useContext } from "react";

const Perceptual = (props: TestProps) => {
  const { onCorrectAnswer, onIncorrectAnswer, testState } = props;
  const locale = useContext(LocaleContext);
  const t = i18n(locale, "perceptual");
  const [question, setQuestion] = React.useState(generateQuestion);

  const onAnswer = (answer: number) => {
    if (answer === question.answer) {
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
        testName={TestName.PERCEPTUAL_SPEED}
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
      <CardContent className="flex justify-center gap-4 text-2xl md:gap-6">
        {question.columns.map(([lowercase, uppercase], i) => (
          <div className="space-y-4 md:space-y-6" key={i}>
            <div className="text-center">{lowercase}</div>
            <div className="text-center">{uppercase}</div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex flex-wrap justify-center gap-2">
        {Array.from({ length: question.columns.length + 1 }, (_, i) => (
          <TestButton key={i} onClick={() => onAnswer(i)}>
            {i}
          </TestButton>
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
