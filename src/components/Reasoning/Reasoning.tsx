import { chooseRandom, pickRandom, randomBool } from "@/utils";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { comparisons, names } from "@components/Reasoning/data";
import React from "react";
import type { TestProps } from "@components/types";

const Reasoning = (props: TestProps) => {
  const { onCorrectAnswer, onIncorrectAnswer } = props;
  const [question, setQuestion] = React.useState(generateQuestion());
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isStatementPhase ? question.statement : question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isStatementPhase ? (
          <Button onClick={() => setIsStatementPhase(false)}>
            Show question
          </Button>
        ) : (
          <div>
            {question.namesToCompare.map((name) => (
              <Button key={name} onClick={() => onAnswer(name)}>
                {name}
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Reasoning;

function generateQuestion() {
  const comparison = pickRandom(comparisons);
  const [name1, name2] = chooseRandom(names, 2);
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
