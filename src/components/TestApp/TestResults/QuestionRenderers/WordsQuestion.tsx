import type { WordsQuestionData } from "@components/TestApp/types";
import React from "react";

const WordsQuestion = (props: { question: WordsQuestionData }) => {
  const { question } = props;

  return (
    <div className="space-y-2">
      <div className="text-sm font-semibold">
        Words: [{question.words.join(", ")}]
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {question.words.map((word) => (
          <div key={word} className="text-center">
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordsQuestion;

