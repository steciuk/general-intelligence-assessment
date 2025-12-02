import { useTranslations } from "@/contexts/TranslationsContext";
import {
  TestName,
  type AnswerRecord,
  type SpatialQuestionData,
  type PerceptualQuestionData,
  type NumbersQuestionData,
  type WordsQuestionData,
  type ReasoningQuestionData,
} from "@components/TestApp/types";
import React from "react";
import SpatialQuestion from "./QuestionRenderers/SpatialQuestion";
import PerceptualQuestion from "./QuestionRenderers/PerceptualQuestion";
import NumbersQuestion from "./QuestionRenderers/NumbersQuestion";
import WordsQuestion from "./QuestionRenderers/WordsQuestion";
import ReasoningQuestion from "./QuestionRenderers/ReasoningQuestion";

const MistakesTable = (props: {
  answerHistory: AnswerRecord[];
  testName: TestName;
}) => {
  const { answerHistory, testName } = props;
  const t = useTranslations("results-history");

  if (answerHistory.length === 0) {
    return null;
  }

  const renderQuestion = (record: AnswerRecord) => {
    switch (record.questionType) {
      case TestName.SPATIAL_VISUALIZATION:
        return (
          <SpatialQuestion question={record.question as SpatialQuestionData} />
        );
      case TestName.PERCEPTUAL_SPEED:
        return (
          <PerceptualQuestion question={record.question as PerceptualQuestionData} />
        );
      case TestName.NUMBERS_SPEED_AND_ACCURACY:
        return (
          <NumbersQuestion question={record.question as NumbersQuestionData} />
        );
      case TestName.WORDS_MEANING:
        return (
          <WordsQuestion question={record.question as WordsQuestionData} />
        );
      case TestName.REASONING:
        return (
          <ReasoningQuestion question={record.question as ReasoningQuestionData} />
        );
      default:
        return <div>Unknown question type</div>;
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left font-semibold">
              {t("table-question") || "Question"}
            </th>
            <th className="p-2 text-left font-semibold">
              {t("table-your-answer") || "Your Answer"}
            </th>
            <th className="p-2 text-left font-semibold">
              {t("table-correct-answer") || "Correct Answer"}
            </th>
            <th className="p-2 text-left font-semibold">
              {t("table-result") || "Result"}
            </th>
          </tr>
        </thead>
        <tbody>
          {answerHistory.map((record, index) => (
            <tr
              key={index}
              className={`border-b ${
                record.isCorrect
                  ? "bg-green-50 dark:bg-green-950"
                  : "bg-red-50 dark:bg-red-950"
              }`}
            >
              <td className="p-2 break-words">{renderQuestion(record)}</td>
              <td className="p-2">{String(record.userAnswer)}</td>
              <td className="p-2">{String(record.correctAnswer)}</td>
              <td className="p-2">
                <span
                  className={`font-semibold ${
                    record.isCorrect
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {record.isCorrect
                    ? t("table-correct") || "Correct"
                    : t("table-incorrect") || "Incorrect"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MistakesTable;

