import { LocaleContext } from "@/contexts/LocaleContext";
import { i18n } from "@/i18n";
import { chooseRandom, pickRandom, randomBool, randomInt } from "@/random";
import TestButton from "@components/TestApp/TestButton";
import TestIntro from "@components/TestApp/TestIntro";
import { TestName, type TestProps } from "@components/TestApp/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@components/ui/card";
import React, { useContext } from "react";

const Spatial = (props: TestProps) => {
  const { onCorrectAnswer, onIncorrectAnswer, testState } = props;
  const locale = useContext(LocaleContext);
  const t = i18n(locale, "spatial-visualization");
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
        <p className="text-justify">{t("intro")}</p>
      </TestIntro>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("question")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center gap-6 text-2xl">
        {question.columns.map((letters, i) => (
          <div key={i}>
            <Card className="rounded-sm p-0">
              <CardContent className="px-6 py-4">
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
      <CardFooter className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: question.columns.length + 1 }, (_, i) => (
          <TestButton key={i} onClick={() => onAnswer(i)}>
            {i}
          </TestButton>
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
