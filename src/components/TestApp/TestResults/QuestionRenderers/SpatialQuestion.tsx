import type { SpatialQuestionData } from "@components/TestApp/types";
import {
  Card,
  CardContent,
} from "@components/ui/card";
import React from "react";

const SpatialQuestion = (props: { question: SpatialQuestionData }) => {
  const { question } = props;

  return (
    <div className="space-y-2">
      <div className="text-sm font-semibold">
        Letter: {question.letter}, Columns: {question.columns.length}
      </div>
      <div className="flex justify-center gap-6 text-2xl">
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
      </div>
    </div>
  );
};

export default SpatialQuestion;

