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
import { Button } from "@components/ui/button";
import SpatialQuestion from "./QuestionRenderers/SpatialQuestion";
import PerceptualQuestion from "./QuestionRenderers/PerceptualQuestion";
import NumbersQuestion from "./QuestionRenderers/NumbersQuestion";
import WordsQuestion from "./QuestionRenderers/WordsQuestion";
import ReasoningQuestion from "./QuestionRenderers/ReasoningQuestion";

type FilterType = "all" | "correct" | "incorrect";

const MistakesTable = (props: {
  answerHistory: AnswerRecord[];
  testName: TestName;
}) => {
  const { answerHistory, testName } = props;
  const t = useTranslations("results-history");
  const [filter, setFilter] = React.useState<FilterType>("all");

  if (answerHistory.length === 0) {
    return null;
  }

  const filteredHistory = React.useMemo(() => {
    if (filter === "all") {
      return answerHistory;
    }
    return answerHistory.filter((record) =>
      filter === "correct" ? record.isCorrect : !record.isCorrect,
    );
  }, [answerHistory, filter]);

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

  const correctCount = answerHistory.filter((r) => r.isCorrect).length;
  const incorrectCount = answerHistory.filter((r) => !r.isCorrect).length;

  return (
    <div className="w-full space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium">{t("table-filter")}</span>
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          {t("table-filter-all")} ({answerHistory.length})
        </Button>
        <Button
          variant={filter === "correct" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("correct")}
        >
          {t("table-filter-correct")} ({correctCount})
        </Button>
        <Button
          variant={filter === "incorrect" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("incorrect")}
        >
          {t("table-filter-incorrect")} ({incorrectCount})
        </Button>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left font-semibold">
                {t("table-question")}
              </th>
              <th className="p-2 text-left font-semibold">
                {t("table-your-answer")}
              </th>
              <th className="p-2 text-left font-semibold">
                {t("table-correct-answer")}
              </th>
              <th className="p-2 text-left font-semibold">
                {t("table-result")}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.map((record, index) => (
              <tr
                key={`${record.questionType}-${index}-${record.userAnswer}`}
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
                      ? t("table-correct")
                      : t("table-incorrect")}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredHistory.length === 0 && (
        <p className="text-center text-sm text-muted-foreground py-4">
          {t("table-no-results")}
        </p>
      )}
    </div>
  );
};

export default MistakesTable;

