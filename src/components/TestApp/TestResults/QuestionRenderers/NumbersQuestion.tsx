import type { NumbersQuestionData } from "@components/TestApp/types";
import React from "react";

const NumbersQuestion = (props: { question: NumbersQuestionData }) => {
  const { question } = props;

  return (
    <div className="space-y-2">
      <div className="text-sm font-semibold">
        Numbers: [{question.numbers.join(", ")}]
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-2xl">
        {question.numbers.map((number) => (
          <div key={number} className="text-center">
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumbersQuestion;

