import type { ReasoningQuestionData } from "@components/TestApp/types";
import React from "react";

const ReasoningQuestion = (props: { question: ReasoningQuestionData }) => {
  const { question } = props;

  return (
    <div className="space-y-2">
      <div className="text-sm space-y-1">
        <div className="font-semibold">Statement:</div>
        <div>{question.statement}</div>
        <div className="font-semibold mt-2">Question:</div>
        <div>{question.question}</div>
        <div className="font-semibold mt-2">Options:</div>
        <div>[{question.namesToCompare.join(", ")}]</div>
      </div>
    </div>
  );
};

export default ReasoningQuestion;

