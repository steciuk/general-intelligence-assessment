import type { PerceptualQuestionData } from "@components/TestApp/types";
import React from "react";

const PerceptualQuestion = (props: { question: PerceptualQuestionData }) => {
  const { question } = props;

  const columnsStr = question.columns
    .map(([lower, upper]) => `${lower}/${upper}`)
    .join(", ");

  return (
    <div className="space-y-2">
      <div className="text-sm font-semibold">Columns: [{columnsStr}]</div>
      <div className="flex justify-center gap-4 text-2xl md:gap-6">
        {question.columns.map(([lowercase, uppercase], i) => (
          <div className="space-y-4 md:space-y-6" key={i}>
            <div className="text-center">{lowercase}</div>
            <div className="text-center">{uppercase}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerceptualQuestion;

