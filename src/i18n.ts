import { TestName } from "@components/TestApp/types";

export const LOCALES = ["en", "pl", "es", "it", "fr"] as const;
export const DEFAULT_LOCALE = "en" as const;
export type Locale = (typeof LOCALES)[number];

type LocaleValues = {
  [locale in Locale]: string;
};

export const SWITCH_LOCALE_LABELS = {
  en: "Switch to English",
  pl: "Zmień na polski",
  es: "Cambiar a español",
  it: "Passa all'italiano",
  fr: "Passer en français",
} as const satisfies LocaleValues;

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

export function i18n<N extends keyof typeof ui>(locale: Locale, namespace: N) {
  return (key: keyof (typeof ui)[N]) =>
    // TODO: Why is this type assertion needed?
    (ui[namespace][key] as LocaleValues)[locale];
}

const ui = {
  home: {
    title: {
      en: "General Intelligence Assessment",
      pl: "Ocena Inteligencji Ogólnej",
      es: "Prueba General de Inteligencia",
      it: "Valutazione dell'intelligenza generale",
      fr: "Évaluation de l'intelligence générale",
    },
    "intro-1": {
      en: "As a part of a job application process, I was asked to complete a ",
      pl: "W ramach procesu rekrutacyjnego, zostałem poproszony o wykonanie ",
      es: "Como parte de un proceso de selección, se me pedía completar el ",
      it: "Come parte di un processo di selezione, mi è stato chiesto di completare un ",
      fr: "Dans le cadre d'un processus de recrutement, on m'a demandé de passer un ",
    },
    "intro-2": {
      en: "Thomas GIA test",
      pl: "testu Thomas GIA",
      es: "test de Thomas GIA",
      it: "test Thomas GIA",
      fr: "test Thomas GIA",
    },
    "intro-3": {
      en: ". As I haven't found any proper practice materials, I decided to create a simple web app to test myself before the real thing.",
      pl: ". Ponieważ nie znalazłem żadnych odpowiednich materiałów do ćwiczeń, postanowiłem stworzyć prostą aplikację webową, aby przetestować się przed prawdziwym testem.",
      es: ". Dado que no encontré materiales adequados para practicar, decidí crear una aplicación web simple para entrenarme antes del test real.",
      it: ". Poiché non ho trovato materiali adatti per esercitarmi, ho deciso di creare una semplice applicazione web per allenarmi prima del test vero e proprio.",
      fr: ". Comme je n'ai pas trouvé de matériel d'entraînement adapté, j'ai décidé de créer une application web simple pour m'entraîner avant le vrai test.",
    },
    "disclaimer-1": {
      en: "I am not affiliated with Thomas International in any way. This is a personal project. I do not have access to the real test questions. I do not provide any guarantees that the questions in this app are similar to the real test.",
      pl: "Nie mam żadnych powiązań z Thomas International. To jest projekt osobisty. Nie mam dostępu do prawdziwych pytań testu. Nie gwarantuję, że pytania w tej aplikacji są podobne do prawdziwego testu.",
      es: "No estoy relacionado de ninguna manera con Thomas International. Éste es un proyecto personal. No tengo acceso a las preguntas del test real. No puedo dar ninguna garantía de que las preguntas en este test se parezcan a las del test real.",
      it: "Non sono in alcun modo affiliato con Thomas International. Questo è un progetto personale. Non ho accesso alle domande reali del test. Non garantisco che le domande presenti in questa app siano simili a quelle del test ufficiale.",
      fr: "Je ne suis en aucun cas affilié à Thomas International. Il s'agit d'un projet personnel. Je n'ai pas accès aux questions du test réel. Je ne garantis pas que les questions de cette application ressemblent à celles du test officiel.",
    },
    "disclaimer-2": {
      en: "The app is still in development. Any parts of the app may change at any time. You may loose your results history.",
      pl: "Aplikacja jest wciąż w fazie rozwoju. Dowolna część aplikacji może ulec zmianie w dowolnym momencie. Możesz stracić historię swoich wyników.",
      es: "Esta aplicación está en desarrollo. Cualquier parte puede cambiar en cualquier momento. Se puede perder el histórico de resultados.",
      it: "L'app è ancora in fase di sviluppo. Qualsiasi parte può cambiare in qualsiasi momento. Potresti perdere la cronologia dei risultati.",
      fr: "L'application est encore en développement. N'importe quelle partie peut changer à tout moment. Vous pouvez perdre l'historique de vos résultats.",
    },
    cta: {
      en: "Let's go",
      pl: "Zaczynamy",
      es: "Vamos allá",
      it: "Iniziamo",
      fr: "C'est parti",
    },
  },
  "main-test-screen": {
    "see-results-history": {
      en: "See results history",
      pl: "Zobacz historię wyników",
      es: "Ver histórico de resultados",
      it: "Vedi cronologia dei risultati",
      fr: "Voir l'historique des résultats",
    },
  },
  "test-selector": {
    title: {
      en: "Select the tests you want to take",
      pl: "Wybierz testy, które chcesz wykonać",
      es: "Selecciona que pruebas quieres hacer",
      it: "Seleziona i test che vuoi eseguire",
      fr: "Sélectionnez les tests que vous souhaitez passer",
    },
    "select-all": {
      en: "Select all",
      pl: "Zaznacz wszystkie",
      es: "Seleccionar todas",
      it: "Seleziona tutti",
      fr: "Tout sélectionner",
    },
    start: {
      en: "Start the tests",
      pl: "Rozpocznij testy",
      es: "Empezar la prueba",
      it: "Inizia i test",
      fr: "Commencer les tests",
    },
  },
  "test-names": {
    [TestName.REASONING]: {
      en: "Reasoning",
      pl: "Wywodzenie logiczne",
      es: "Razonamiento",
      it: "Ragionamento",
      fr: "Raisonnement",
    },
    [TestName.PERCEPTUAL_SPEED]: {
      en: "Perceptual speed",
      pl: "Szybkość percepcyjna",
      es: "Velocidad perceptiva",
      it: "Velocità percettiva",
      fr: "Vitesse perceptuelle",
    },
    [TestName.NUMBERS_SPEED_AND_ACCURACY]: {
      en: "Numbers speed and accuracy",
      pl: "Szybkość i dokładność liczbowa",
      es: "Velocidad y precisión numérica",
      it: "Velocità e accuratezza numerica",
      fr: "Vitesse et précision numérique",
    },
    [TestName.WORDS_MEANING]: {
      en: "Words meaning",
      pl: "Znaczenie słów",
      es: "Significado de palabras",
      it: "Significato delle parole",
      fr: "Signification des mots",
    },
    [TestName.SPATIAL_VISUALIZATION]: {
      en: "Spatial visualization",
      pl: "Wizualizacja przestrzenna",
      es: "Visualización espacial",
      it: "Visualizzazione spaziale",
      fr: "Visualisation spatiale",
    },
  } satisfies { [key in TestName]: { [locale in Locale]: string } },
  "test-intro": {
    cta: {
      en: "I'm ready",
      pl: "Jestem gotowy",
      es: "Estoy a punto",
      it: "Sono pronto",
      fr: "Je suis prêt",
    },
  },
  reasoning: {
    intro: {
      en: "In this test, you will be presented with a statement and a question. The statement will compare two names, and the question will ask you to identify which name fits the comparison.",
      pl: "W tym teście zobaczysz stwierdzenie opisujące relację między cechą dwóch osób. Następnie zobaczysz pytanie dotyczące tej relacji. Twoim zadaniem jest zidentyfikowanie pasującej osoby.",
      es: "En esta prueba, se va a presentar una sentencia y una pregunta. La sentencia compara dos nombres, y la pregunta pide identificar que nombre cumple la comparación.",
      it: "In questo test ti verrà presentata un'affermazione e una domanda. L'affermazione confronterà due nomi, e la domanda ti chiederà di identificare quale nome corrisponde al confronto.",
      fr: "Dans ce test, une affirmation et une question vous seront présentées. L'affirmation compare deux noms, et la question vous demande d'identifier lequel correspond à la comparaison.",
    },
    cta: {
      en: "Show the question",
      pl: "Pokaż pytanie",
      es: "Muestra la pregunta",
      it: "Mostra la domanda",
      fr: "Afficher la question",
    },
  },
  perceptual: {
    intro: {
      en: "In this test, you will be presented with four columns of letters. Your task is to identify how many columns have the same letter.",
      pl: "W tym teście zobaczysz cztery kolumny liter. Twoim zadaniem jest zidentyfikowanie, w ilu kolumnach znajduje się ta sama litera.",
      es: "En esta prueba, se presentan cuatro columnas de letras. Debes identificar cuántas columnas tienen la misma letra.",
      it: "In questo test ti verranno presentate quattro colonne di lettere. Il tuo compito è identificare quante colonne hanno la stessa lettera.",
      fr: "Dans ce test, vous verrez quatre colonnes de lettres. Votre tâche est d'identifier combien de colonnes contiennent la même lettre.",
    },
    question: {
      en: "How many columns have the same letter?",
      pl: "W ilu kolumnach znajduje się ta sama litera?",
      es: "Cuántas columnas tienen la misma letra?",
      it: "Quante colonne hanno la stessa lettera?",
      fr: "Combien de colonnes ont la même lettre ?",
    },
  },
  numbers: {
    intro: {
      en: "In this test, you will be presented with three numbers. Your task is to identify which number is furthest from the median.",
      pl: "W tym teście zobaczysz trzy liczby. Twoim zadaniem jest zidentyfikowanie, która liczba jest najbardziej oddalona od ich mediany.",
      es: "En esta prueba se presentan tres números. Debes identificar que número está más alejado de el numero que define la mediana.",
      it: "In questo test ti verranno presentati tre numeri. Il tuo compito è identificare quale numero è il più lontano dalla mediana.",
      fr: "Dans ce test, trois nombres vous seront présentés. Votre tâche est d'identifier lequel est le plus éloigné de la médiane.",
    },
    question: {
      en: "Which number is furthest from the median?",
      pl: "Która liczba jest najbardziej oddalona od ich mediany?",
      es: "Qué número está más alejado de la mediana?",
      it: "Quale numero è più distante dalla mediana?",
      fr: "Quel nombre est le plus éloigné de la médiane ?",
    },
  },
  "words-meaning": {
    intro: {
      en: "In this test, you will be presented with three words. Your task is to identify which word doesn't belong.",
      pl: "W tym teście zobaczysz trzy słowa. Twoim zadaniem jest zidentyfikowanie, które słowo nie pasuje do reszty.",
      es: "En esta prueba se presentan tres palabras. Debes identificar qué palabra no es la adecuada.",
      it: "In questo test ti verranno presentate tre parole. Il tuo compito è identificare quale parola non appartiene.",
      fr: "Dans ce test, trois mots vous seront présentés. Votre tâche est d'identifier lequel ne correspond pas aux autres.",
    },
    question: {
      en: "Which word doesn't belong?",
      pl: "Które słowo nie pasuje?",
      es: "Qué palabra no es adecuada?",
      it: "Quale parola non appartiene?",
      fr: "Quel mot ne correspond pas ?",
    },
  },
  "spatial-visualization": {
    intro: {
      en: "In this test, you will be presented with a grid of letters. Your task is to identify how many boxes have the same letter. Rotated letters are considered the same, while mirrored letters are not.",
      pl: "W tym teście zobaczysz siatkę liter. Twoim zadaniem jest zidentyfikowanie, w ilu kolumnach znajduje się ta sama litera. Obrócone litery są uważane za takie same, podczas gdy lustrzanie odbite litery nie są.",
      es: "En esta prueba se presentan dos cuadrados con dos letras. Debes identificar cuántos cuadrados tienen la misma letra. Las letras se consideran iguales si sólo difieren en la rotación pero no si una es el reflejo de la otra.",
      it: "In questo test ti verrà presentata una griglia di lettere. Il tuo compito è identificare quante caselle contengono la stessa lettera. Le lettere ruotate sono considerate uguali, mentre quelle specchiate no.",
      fr: "Dans ce test, une grille de lettres vous sera présentée. Votre tâche est d'identifier combien de cases contiennent la même lettre. Les lettres tournées sont considérées comme identiques, mais pas les lettres miroir.",
    },
    question: {
      en: "How many boxes have the same letter?",
      pl: "W ilu polach znajduje się ta sama litera?",
      es: "Cuántos cuadrados tienen la misma letra?",
      it: "Quante caselle contengono la stessa lettera?",
      fr: "Combien de cases ont la même lettre ?",
    },
    description: {
      en: "Rotated letters are considered the same, while mirrored letters are not.",
      pl: "Obrócone litery są uważane za takie same, podczas gdy lustrzanie odbite litery nie są.",
      es: "Las letras rotadas se consideran iguales, pero las reflejadas no.",
      it: "Le lettere ruotate sono considerate uguali, ma quelle specchiate no.",
      fr: "Les lettres tournées sont considérées comme identiques, mais pas les lettres miroir.",
    },
  },
  "results-history": {
    "no-results": {
      en: "No results yet",
      pl: "Brak wyników",
      es: "No hay resultados todavía.",
      it: "Nessun risultato ancora",
      fr: "Aucun résultat pour l'instant",
    },
    retake: {
      en: "Retake the tests",
      pl: "Powtórz testy",
      es: "Repetir la prueba",
      it: "Ripeti i test",
      fr: "Repasser les tests",
    },
    "clear-history": {
      en: "Clear results history",
      pl: "Wyczyść historię wyników",
      es: "Eliminar el histórico",
      it: "Cancella la cronologia dei risultati",
      fr: "Effacer l'historique des résultats",
    },
    "view-answers": {
      en: "View Answer History",
      pl: "Zobacz historię odpowiedzi",
      es: "Ver historial de respuestas",
      it: "Visualizza cronologia risposte",
      fr: "Voir l'historique des réponses",
    },
    "table-filter": {
      en: "Filter:",
      pl: "Filtruj:",
      es: "Filtrar:",
      it: "Filtra:",
      fr: "Filtrer :",
    },
    "table-filter-all": {
      en: "All",
      pl: "Wszystkie",
      es: "Todas",
      it: "Tutte",
      fr: "Toutes",
    },
    "table-filter-correct": {
      en: "Correct",
      pl: "Poprawne",
      es: "Correcto",
      it: "Corretto",
      fr: "Correct",
    },
    "table-filter-incorrect": {
      en: "Incorrect",
      pl: "Niepoprawne",
      es: "Incorrecto",
      it: "Errato",
      fr: "Incorrect",
    },
    "table-question": {
      en: "Question",
      pl: "Pytanie",
      es: "Pregunta",
      it: "Domanda",
      fr: "Question",
    },
    "table-your-answer": {
      en: "Your Answer",
      pl: "Twoja odpowiedź",
      es: "Tu respuesta",
      it: "La tua risposta",
      fr: "Votre réponse",
    },
    "table-correct-answer": {
      en: "Correct Answer",
      pl: "Poprawna odpowiedź",
      es: "Respuesta correcta",
      it: "Risposta corretta",
      fr: "Bonne réponse",
    },
    "table-result": {
      en: "Result",
      pl: "Wynik",
      es: "Resultado",
      it: "Risultato",
      fr: "Résultat",
    },
    "table-correct": {
      en: "Correct",
      pl: "Poprawne",
      es: "Correcto",
      it: "Corretto",
      fr: "Correct",
    },
    "table-incorrect": {
      en: "Incorrect",
      pl: "Niepoprawne",
      es: "Incorrecto",
      it: "Errato",
      fr: "Incorrect",
    },
    "table-no-results": {
      en: "No results match the selected filter.",
      pl: "Brak wyników pasujących do wybranego filtra.",
      es: "No hay resultados que coincidan con el filtro seleccionado.",
      it: "Nessun risultato corrisponde al filtro selezionato.",
      fr: "Aucun résultat ne correspond au filtre sélectionné.",
    },
  },
  charts: {
    correct: {
      en: "Correct",
      pl: "Poprawne",
      es: "Correcto",
      it: "Corretto",
      fr: "Correct",
    },
    incorrect: {
      en: "Incorrect",
      pl: "Niepoprawne",
      es: "Erróneo",
      it: "Errato",
      fr: "Incorrect",
    },
    score: {
      en: "Score",
      pl: "Wynik",
      es: "Puntuación",
      it: "Punteggio",
      fr: "Score",
    },
  },
  layout: {
    "made-by": {
      en: "Made by",
      pl: "Wykonane przez",
      es: "Hecho por",
      it: "Creato da",
      fr: "Réalisé par",
    },
  },
} as const satisfies {
  [namespace: string]: { [key: string]: LocaleValues };
};

export type LocaleBakedTranslations = {
  [namespace in keyof typeof ui]: {
    [key in keyof (typeof ui)[namespace]]: string;
  };
};

export function bakeLocaleTranslations(locale: Locale) {
  return Object.fromEntries(
    Object.entries(ui).map(([namespace, translations]) => [
      namespace,
      Object.fromEntries(
        Object.entries(translations).map(([key, value]) => [
          key,
          value[locale],
        ]),
      ),
    ]),
  ) as LocaleBakedTranslations;
}
