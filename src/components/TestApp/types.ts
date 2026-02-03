export type SpatialQuestionData = {
  letter: string;
  columns: Array<Array<{ isMirrored: boolean; rotation: number }>>;
  answer: number;
};

export type PerceptualQuestionData = {
  columns: Array<[string, string]>;
  answer: number;
};

export type NumbersQuestionData = {
  numbers: number[];
  answer: number;
};

export type WordsQuestionData = {
  words: string[];
  answer: string;
};

export type ReasoningQuestionData = {
  statement: string;
  question: string;
  namesToCompare: string[];
  answer: string;
};

export type QuestionData =
  | SpatialQuestionData
  | PerceptualQuestionData
  | NumbersQuestionData
  | WordsQuestionData
  | ReasoningQuestionData;

export type AnswerRecord = {
  question: QuestionData;
  questionType: TestName;
  userAnswer: string | number;
  correctAnswer: string | number;
  isCorrect: boolean;
};

export type TestProps = {
  testState: "intro" | "in-progress";
  onStartTest: () => void;
  onCorrectAnswer: () => void;
  onIncorrectAnswer: () => void;
  onAnswerRecorded: (record: AnswerRecord) => void;
};

export type TestResults = Partial<{
  [key in TestName]: {
    numCorrect: number;
    numIncorrect: number;
    answerHistory?: AnswerRecord[];
  };
}>;

export enum TestName {
  REASONING = "Reasoning",
  PERCEPTUAL_SPEED = "Perceptual Speed",
  NUMBERS_SPEED_AND_ACCURACY = "Numbers Speed and Accuracy",
  WORDS_MEANING = "Words Meaning",
  SPATIAL_VISUALIZATION = "Spatial Visualization",
}

export type WordsMeaningData = string[][];
export type ReasoningData = {
  names: string[];
  comparisons: Array<{
    s: [[string, string], [string, string]];
    q: [[string, string], [string, string]];
  }>;
  question: string;
};
