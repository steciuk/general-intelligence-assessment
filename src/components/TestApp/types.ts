export type TestProps = {
  testState: "intro" | "in-progress";
  onStartTest: () => void;
  onCorrectAnswer: () => void;
  onIncorrectAnswer: () => void;
};

export type TestResult = {
  testName: TestName;
  numCorrect: number;
  numIncorrect: number;
};

export enum TestName {
  REASONING = "Reasoning",
  PERCEPTUAL_SPEED = "Perceptual Speed",
  NUMBERS_SPEED_AND_ACCURACY = "Numbers Speed and Accuracy",
  WORDS_MEANING = "Words Meaning",
  SPATIAL_VISUALIZATION = "Spatial Visualization",
}
