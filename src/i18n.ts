export const LOCALES = ["en", "pl"] as const;
export const DEFAULT_LOCALE = "en" as const;
export type Locale = (typeof LOCALES)[number];

export const SWITCH_LOCALE_LABELS = {
  en: "Switch to English",
  pl: "Zmień na polski",
} as const satisfies {
  [locale in Locale]: string;
};

export function getLocale(url: URL): Locale {
  const path = url.pathname;
  const [_, locale] = path.split("/");

  return LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : DEFAULT_LOCALE;
}

export function delocalizePath(url: URL): string {
  const locale = getLocale(url);
  if (locale === DEFAULT_LOCALE) {
    return url.pathname;
  }

  return url.pathname.replace(`/${locale}`, "");
}

type TranslationFunction = <N extends keyof typeof ui>(
  namespace: N,
  key: keyof (typeof ui)[N],
) => string;
type TranslationFunctionWithBakedInNamespace = <N extends keyof typeof ui>(
  key: keyof (typeof ui)[N],
) => string;

export function i18n(url: URL): TranslationFunction;
export function i18n<N extends keyof typeof ui>(
  url: URL,
  namespace: N,
): TranslationFunctionWithBakedInNamespace;
export function i18n<N extends keyof typeof ui>(
  url: URL,
  namespace?: N,
): TranslationFunction | TranslationFunctionWithBakedInNamespace {
  const locale = getLocale(url);

  if (namespace === undefined) {
    return <N extends keyof typeof ui>(
      namespace: N,
      key: keyof (typeof ui)[N],
      // TODO: Why is this type assertion needed?
    ) => (ui[namespace][key] as { [locale in Locale]: string })[locale];
  }

  return (key: keyof (typeof ui)[N]) =>
    // TODO: Why is this type assertion needed?
    (ui[namespace][key] as { [locale in Locale]: string })[locale];
}

const ui = {
  home: {
    title: {
      en: "General Intelligence Assessment",
      pl: "Ocena Inteligencji Ogólnej",
    },
    "intro-1": {
      en: "As a part of a job application process, I was asked to complete a ",
      pl: "W ramach procesu rekrutacyjnego, zostałem poproszony o wykonanie ",
    },
    "intro-2": {
      en: "Thomas GIA test",
      pl: "testu Thomas GIA",
    },
    "intro-3": {
      en: ". As I haven't found any proper practice materials, I decided to create a simple web app to test myself before the real thing.",
      pl: ". Ponieważ nie znalazłem żadnych odpowiednich materiałów do ćwiczeń, postanowiłem stworzyć prostą aplikację webową, aby przetestować się przed prawdziwym testem.",
    },
    "disclaimer-1": {
      en: "I am not affiliated with Thomas International in any way. This is a personal project. I do not have access to the real test questions. I do not provide any guarantees that the questions in this app are similar to the real test.",
      pl: "Nie mam żadnych powiązań z Thomas International. To jest projekt osobisty. Nie mam dostępu do prawdziwych pytań testu. Nie gwarantuję, że pytania w tej aplikacji są podobne do prawdziwego testu.",
    },
    "disclaimer-2": {
      en: "The app is still in development. Any parts of the app may change at any time. You may loose your results history.",
      pl: "Aplikacja jest wciąż w fazie rozwoju. Dowolna część aplikacji może ulec zmianie w dowolnym momencie. Możesz stracić historię swoich wyników.",
    },
    cta: {
      en: "Let's go",
      pl: "Zaczynamy",
    },
  },
} as const satisfies {
  [namespace: string]: { [key: string]: { [locale in Locale]: string } };
};
