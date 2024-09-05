import { chooseRandom, pickRandom, randomBool } from "@/random";
import { Card, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { comparisons, names } from "@components/Reasoning/data";
import React from "react";
import { TestName, type TestProps } from "@components/types";
import TestIntro from "@components/TestIntro";
import TestButton from "@components/TestButton";

const Reasoning = (props: TestProps) => {
  const { onCorrectAnswer, onIncorrectAnswer, testState } = props;
  const [question, setQuestion] = React.useState(generateQuestion);
  const [isStatementPhase, setIsStatementPhase] = React.useState(true);

  const onAnswer = (answer: string) => {
    if (answer === question.answer) {
      onCorrectAnswer();
    } else {
      onIncorrectAnswer();
    }

    setIsStatementPhase(true);
    setQuestion(generateQuestion());
  };

  if (testState === "intro")
    return (
      <TestIntro testName={TestName.REASONING} onStartTest={props.onStartTest}>
        <p>
          In this test, you will be presented with a statement and a question.
          The statement will compare two names, and the question will ask you to
          identify which name fits the comparison in question.
        </p>
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
            Show the question
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

function generateQuestion() {
  const comparison = pickRandom(comparisons);
  const [name1, name2] = chooseRandom(names, 2, true);
  const isStatementPositive = randomBool();
  const isQuestionPositive = randomBool();
  const swapNames = randomBool();

  const statement = `${name1} is ${
    isStatementPositive
      ? pickRandom(comparison.s[0])
      : pickRandom(comparison.s[1])
  } ${name2}.`;

  const question = `Who is ${isQuestionPositive ? comparison.q[0] : comparison.q[1]}?`;

  const answer = isStatementPositive === isQuestionPositive ? name1 : name2;
  const namesToCompare = swapNames ? [name2, name1] : [name1, name2];

  return {
    statement,
    question,
    answer,
    namesToCompare,
  };
}
