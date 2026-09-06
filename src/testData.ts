import type { TestData } from "@/contexts/TestDataContext";
import type { Locale } from "@/i18n";
import { TestName } from "@components/TestApp/types";
import wordsEn from "@components/TestApp/Words/data-en";
import wordsPl from "@components/TestApp/Words/data-pl";
import wordsEs from "@components/TestApp/Words/data-es";
import wordsIt from "@components/TestApp/Words/data-it";
import wordsFr from "@components/TestApp/Words/data-fr";
import wordsPt from "@components/TestApp/Words/data-pt";
import reasoningEn from "@components/TestApp/Reasoning/data-en";
import reasoningPl from "@components/TestApp/Reasoning/data-pl";
import reasoningEs from "@components/TestApp/Reasoning/data-es";
import reasoningIt from "@components/TestApp/Reasoning/data-it";
import reasoningFr from "@components/TestApp/Reasoning/data-fr";
import reasoningPt from "@components/TestApp/Reasoning/data-pt";

export function getTestData(locale: Locale): TestData {
  switch (locale) {
    case "en":
      return {
        [TestName.WORDS_MEANING]: wordsEn,
        [TestName.REASONING]: reasoningEn,
      };
    case "pl":
      return {
        [TestName.WORDS_MEANING]: wordsPl,
        [TestName.REASONING]: reasoningPl,
      };
    case "es":
      return {
        [TestName.WORDS_MEANING]: wordsEs,
        [TestName.REASONING]: reasoningEs,
      };
    case "it":
      return {
        [TestName.WORDS_MEANING]: wordsIt,
        [TestName.REASONING]: reasoningIt,
      };
    case "fr":
      return {
        [TestName.WORDS_MEANING]: wordsFr,
        [TestName.REASONING]: reasoningFr,
      };
    case "pt":
      return {
        [TestName.WORDS_MEANING]: wordsPt,
        [TestName.REASONING]: reasoningPt,
      };
    default:
      assertNever(locale);
  }
}
