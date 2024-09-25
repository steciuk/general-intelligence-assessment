declare const window: Window & { giaLogOnIncorrect?: boolean };

export function logOnIncorrect(question: unknown, answer: unknown) {
  if (window.giaLogOnIncorrect) {
    console.group("Incorrect answer");
    console.log(question);
    console.log(answer);
    console.groupEnd();
  }
}
