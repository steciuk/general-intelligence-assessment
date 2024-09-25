const names = [
  "Anna",
  "Katarzyna",
  "Maria",
  "Małgorzata",
  "Agnieszka",
  "Barbara",
  "Ewa",
  "Magdalena",
  "Elżbieta",
  "Joanna",
  "Krystyna",
  "Aleksandra",
  "Monika",
  "Zofia",
  "Teresa",
  "Natalia",
  "Julia",
  "Danuta",
  "Karolina",
  "Marta",
  "Beata",
  "Dorota",
  "Alicja",
  "Halina",
  "Jolanta",
  "Iwona",
  "Jadwiga",
  "Grażyna",
  "Paulina",
  "Zuzanna",
  "Hanna",
  "Janina",
  "Justyna",
  "Irena",
  "Wiktoria",
  "Bożena",
  "Renata",
  "Urszula",
  "Agata",
  "Sylwia",
  "Maja",
  "Patrycja",
  "Helena",
  "Emilia",
  "Oliwia",
  "Izabela",
  "Aneta",
  "Weronika",
  "Ewelina",
  "Martyna",
  "Piotr",
  "Krzysztof",
  "Tomasz",
  "Andrzej",
  "Paweł",
  "Michał",
  "Jan",
  "Marcin",
  "Jakub",
  "Adam",
  "Łukasz",
  "Marek",
  "Mateusz",
  "Grzegorz",
  "Stanisław",
  "Wojciech",
  "Mariusz",
  "Dariusz",
  "Maciej",
  "Rafał",
  "Zbigniew",
  "Robert",
  "Kamil",
  "Szymon",
  "Dawid",
  "Jerzy",
  "Jacek",
  "Kacper",
  "Józef",
  "Bartosz",
  "Ryszard",
  "Tadeusz",
  "Artur",
  "Jarosław",
  "Sebastian",
  "Sławomir",
  "Damian",
  "Janusz",
  "Patryk",
  "Mirosław",
  "Roman",
  "Filip",
  "Daniel",
  "Antoni",
  "Karol",
  "Przemysław",
  "Henryk",
  "Aleksander",
  "Adrian",
  "Kazimierz",
];

const comparisons = [
  {
    s: [
      ["jest silniejszy(-a) niż", "nie jest tak słaby(-a) jak"],
      ["jest słabszy(-a) niż", "nie jest tak silny(-a) jak"],
    ],
    q: [
      ["silniejszy(-a)", "mniej słaby(-a)"],
      ["słabszy(-a)", "mniej silny(-a)"],
    ],
  },
  {
    s: [
      ["jest mądrzejszy(-a) niż", "nie jest tak głupi(-a) jak"],
      ["jest głupszy(-a) niż", "nie jest tak mądry(-a) jak"],
    ],
    q: [
      ["mądrzejszy(-a)", "mniej głupi(-a)"],
      ["głupszy(-a)", "mniej mądry(-a)"],
    ],
  },
  {
    s: [
      ["jest wyższy(-a) niż", "nie jest tak niski(-a) jak"],
      ["jest niższy(-a) niż", "nie jest tak wysoki(-a) jak"],
    ],
    q: [
      ["wyższy(-a)", "mniej niski(-a)"],
      ["niższy(-a)", "mniej wysoki(-a)"],
    ],
  },
  {
    s: [
      ["jest odważniejszy(-a) niż", "nie jest tak tchórzliwy(-a) jak"],
      ["jest bardziej tchórzliwy(-a) niż", "nie jest tak odważny(-a) jak"],
    ],
    q: [
      ["odważniejszy(-a)", "mniej tchórzliwy(-a)"],
      ["bardziej tchórzliwy(-a)", "mniej odważny(-a)"],
    ],
  },
  {
    s: [
      ["jest życzliwszy(-a) niż", "nie jest tak okrutny(-a) jak"],
      ["jest okrutniejszy(-a) niż", "nie jest tak życzliwy(-a) jak"],
    ],
    q: [
      ["życzliwszy(-a)", "mniej okrutny(-a)"],
      ["okrutniejszy(-a)", "mniej życzliwy(-a)"],
    ],
  },
  {
    s: [
      ["jest śmieszniejszy(-a) niż", "nie jest tak poważny(-a) jak"],
      ["jest bardziej poważny(-a) niż", "nie jest tak śmieszny(-a) jak"],
    ],
    q: [
      ["śmieszniejszy(-a)", "mniej poważny(-a)"],
      ["bardziej poważny(-a)", "mniej śmieszny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej przyjazny(-a) niż", "nie jest tak wrogi(-a) jak"],
      ["jest bardziej wrogi(-a) niż", "nie jest tak przyjazny(-a) jak"],
    ],
    q: [
      ["bardziej przyjazny(-a)", "mniej wrogi(-a)"],
      ["bardziej wrogi(-a)", "mniej przyjazny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej hojny(-a) niż", "nie jest tak samolubny(-a) jak"],
      ["jest bardziej samolubny(-a) niż", "nie jest tak hojny(-a) jak"],
    ],
    q: [
      ["bardziej hojny(-a)", "mniej samolubny(-a)"],
      ["bardziej samolubny(-a)", "mniej hojny(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej pewny(-a) siebie niż",
        "nie jest tak niepewny(-a) siebie jak",
      ],
      [
        "jest bardziej niepewny(-a) siebie niż",
        "nie jest tak pewny(-a) siebie jak",
      ],
    ],
    q: [
      ["bardziej pewny(-a) siebie", "mniej niepewny(-a) siebie"],
      ["bardziej niepewny(-a) siebie", "mniej pewny(-a) siebie"],
    ],
  },
  {
    s: [
      ["jest spokojniejszy(-a) niż", "nie jest tak niespokojny(-a) jak"],
      ["jest bardziej niespokojny(-a) niż", "nie jest tak spokojny(-a) jak"],
    ],
    q: [
      ["spokojniejszy(-a)", "mniej niespokojny(-a)"],
      ["bardziej niespokojny(-a)", "mniej spokojny(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej optymistyczny(-a) niż",
        "nie jest tak pesymistyczny(-a) jak",
      ],
      [
        "jest bardziej pesymistyczny(-a) niż",
        "nie jest tak optymistyczny(-a) jak",
      ],
    ],
    q: [
      ["bardziej optymistyczny(-a)", "mniej pesymistyczny(-a)"],
      ["bardziej pesymistyczny(-a)", "mniej optymistyczny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej ambitny(-a) niż", "nie jest tak leniwy(-a) jak"],
      ["jest leniwszy(-a) niż", "nie jest tak ambitny(-a) jak"],
    ],
    q: [
      ["bardziej ambitny(-a)", "mniej leniwy(-a)"],
      ["leniwszy(-a)", "mniej ambitny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej odpowiedzialny(-a) niż", "nie jest tak niedbały(-a) jak"],
      ["jest bardziej niedbały(-a) niż", "nie jest tak odpowiedzialny(-a) jak"],
    ],
    q: [
      ["bardziej odpowiedzialny(-a)", "mniej niedbały(-a)"],
      ["bardziej niedbały(-a)", "mniej odpowiedzialny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej empatyczny(-a) niż", "nie jest tak nieczuły(-a) jak"],
      ["jest bardziej nieczuły(-a) niż", "nie jest tak empatyczny(-a) jak"],
    ],
    q: [
      ["bardziej empatyczny(-a)", "mniej nieczuły(-a)"],
      ["bardziej nieczuły(-a)", "mniej empatyczny(-a)"],
    ],
  },

  {
    s: [
      [
        "jest bardziej kreatywny(-a) niż",
        "nie jest tak mało pomysłowy(-a) jak",
      ],
      [
        "jest bardziej mało pomysłowy(-a) niż",
        "nie jest tak kreatywny(-a) jak",
      ],
    ],
    q: [
      ["bardziej kreatywny(-a)", "mniej mało pomysłowy(-a)"],
      ["bardziej mało pomysłowy(-a)", "mniej kreatywny(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej zdyscyplinowany(-a) niż",
        "nie jest tak lekkomyślny(-a) jak",
      ],
      [
        "jest bardziej lekkomyślny(-a) niż",
        "nie jest tak zdyscyplinowany(-a) jak",
      ],
    ],
    q: [
      ["bardziej zdyscyplinowany(-a)", "mniej lekkomyślny(-a)"],
      ["bardziej lekkomyślny(-a)", "mniej zdyscyplinowany(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej atrakcyjny(-a) niż",
        "nie jest tak nieatrakcyjny(-a) jak",
      ],
      [
        "jest bardziej nieatrakcyjny(-a) niż",
        "nie jest tak atrakcyjny(-a) jak",
      ],
    ],
    q: [
      ["bardziej atrakcyjny(-a)", "mniej nieatrakcyjny(-a)"],
      ["bardziej nieatrakcyjny(-a)", "mniej atrakcyjny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej szczery(-a) niż", "nie jest tak oszukańczy(-a) jak"],
      ["jest bardziej oszukańczy(-a) niż", "nie jest tak szczery(-a) jak"],
    ],
    q: [
      ["bardziej szczery(-a)", "mniej oszukańczy(-a)"],
      ["bardziej oszukańczy(-a)", "mniej szczery(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej cierpliwy(-a) niż", "nie jest tak niecierpliwy(-a) jak"],
      ["jest bardziej niecierpliwy(-a) niż", "nie jest tak cierpliwy(-a) jak"],
    ],
    q: [
      ["bardziej cierpliwy(-a)", "mniej niecierpliwy(-a)"],
      ["bardziej niecierpliwy(-a)", "mniej cierpliwy(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej otwarty(-a) niż", "nie jest tak zamknięty(-a) jak"],
      ["jest bardziej zamknięty(-a) niż", "nie jest tak otwarty(-a) jak"],
    ],
    q: [
      ["bardziej otwarty(-a)", "mniej zamknięty(-a)"],
      ["bardziej zamknięty(-a)", "mniej otwarty(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej uprzejmy(-a) niż", "nie jest tak niegrzeczny(-a) jak"],
      ["jest bardziej niegrzeczny(-a) niż", "nie jest tak uprzejmy(-a) jak"],
    ],
    q: [
      ["bardziej uprzejmy(-a)", "mniej niegrzeczny(-a)"],
      ["bardziej niegrzeczny(-a)", "mniej uprzejmy(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej zorganizowany(-a) niż",
        "nie jest tak chaotyczny(-a) jak",
      ],
      [
        "jest bardziej chaotyczny(-a) niż",
        "nie jest tak zorganizowany(-a) jak",
      ],
    ],
    q: [
      ["bardziej zorganizowany(-a)", "mniej chaotyczny(-a)"],
      ["bardziej chaotyczny(-a)", "mniej zorganizowany(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej dojrzały(-a) niż", "nie jest tak niedojrzały(-a) jak"],
      ["jest bardziej niedojrzały(-a) niż", "nie jest tak dojrzały(-a) jak"],
    ],
    q: [
      ["bardziej dojrzały(-a)", "mniej niedojrzały(-a)"],
      ["bardziej niedojrzały(-a)", "mniej dojrzały(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej elastyczny(-a) niż", "nie jest tak sztywny(-a) jak"],
      ["jest bardziej sztywny(-a) niż", "nie jest tak elastyczny(-a) jak"],
    ],
    q: [
      ["bardziej elastyczny(-a)", "mniej sztywny(-a)"],
      ["bardziej sztywny(-a)", "mniej elastyczny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej odważny(-a) niż", "nie jest tak bojaźliwy(-a) jak"],
      ["jest bardziej bojaźliwy(-a) niż", "nie jest tak odważny(-a) jak"],
    ],
    q: [
      ["bardziej odważny(-a)", "mniej bojaźliwy(-a)"],
      ["bardziej bojaźliwy(-a)", "mniej odważny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej skromny(-a) niż", "nie jest tak arogancki(-a) jak"],
      ["jest bardziej arogancki(-a) niż", "nie jest tak skromny(-a) jak"],
    ],
    q: [
      ["bardziej skromny(-a)", "mniej arogancki(-a)"],
      ["bardziej arogancki(-a)", "mniej skromny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej charyzmatyczny(-a) niż", "nie jest tak nudny(-a) jak"],
      ["jest bardziej nudny(-a) niż", "nie jest tak charyzmatyczny(-a) jak"],
    ],
    q: [
      ["bardziej charyzmatyczny(-a)", "mniej nudny(-a)"],
      ["bardziej nudny(-a)", "mniej charyzmatyczny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej niezawodny(-a) niż", "nie jest tak zawodny(-a) jak"],
      ["jest bardziej zawodny(-a) niż", "nie jest tak niezawodny(-a) jak"],
    ],
    q: [
      ["bardziej niezawodny(-a)", "mniej zawodny(-a)"],
      ["bardziej zawodny(-a)", "mniej niezawodny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej pełen pasji(-a) niż", "nie jest tak obojętny(-a) jak"],
      ["jest bardziej obojętny(-a) niż", "nie jest tak pełen pasji(-a) jak"],
    ],
    q: [
      ["bardziej pełen pasji(-a)", "mniej obojętny(-a)"],
      ["bardziej obojętny(-a)", "mniej pełen pasji(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej wyrozumiały(-a) niż", "nie jest tak osądowy(-a) jak"],
      ["jest bardziej osądowy(-a) niż", "nie jest tak wyrozumiały(-a) jak"],
    ],
    q: [
      ["bardziej wyrozumiały(-a)", "mniej osądowy(-a)"],
      ["bardziej osądowy(-a)", "mniej wyrozumiały(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej tolerancyjny(-a) niż",
        "nie jest tak nietolerancyjny(-a) jak",
      ],
      [
        "jest bardziej nietolerancyjny(-a) niż",
        "nie jest tak tolerancyjny(-a) jak",
      ],
    ],
    q: [
      ["bardziej tolerancyjny(-a)", "mniej nietolerancyjny(-a)"],
      ["bardziej nietolerancyjny(-a)", "mniej tolerancyjny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej wybaczający(-a) niż", "nie jest tak zawistny(-a) jak"],
      ["jest bardziej zawistny(-a) niż", "nie jest tak wybaczający(-a) jak"],
    ],
    q: [
      ["bardziej wybaczający(-a)", "mniej zawistny(-a)"],
      ["bardziej zawistny(-a)", "mniej wybaczający(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej energetyczny(-a) niż", "nie jest tak ospały(-a) jak"],
      ["jest bardziej ospały(-a) niż", "nie jest tak energetyczny(-a) jak"],
    ],
    q: [
      ["bardziej energetyczny(-a)", "mniej ospały(-a)"],
      ["bardziej ospały(-a)", "mniej energetyczny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej skromny(-a) niż", "nie jest tak przechwalający(-a) jak"],
      ["jest bardziej przechwalający(-a) niż", "nie jest tak skromny(-a) jak"],
    ],
    q: [
      ["bardziej skromny(-a)", "mniej przechwalający(-a)"],
      ["bardziej przechwalający(-a)", "mniej skromny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej niezawodny(-a) niż", "nie jest tak niespójny(-a) jak"],
      ["jest bardziej niespójny(-a) niż", "nie jest tak niezawodny(-a) jak"],
    ],
    q: [
      ["bardziej niezawodny(-a)", "mniej niespójny(-a)"],
      ["bardziej niespójny(-a)", "mniej niezawodny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej refleksyjny(-a) niż", "nie jest tak bezmyślny(-a) jak"],
      ["jest bardziej bezmyślny(-a) niż", "nie jest tak refleksyjny(-a) jak"],
    ],
    q: [
      ["bardziej refleksyjny(-a)", "mniej bezmyślny(-a)"],
      ["bardziej bezmyślny(-a)", "mniej refleksyjny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej szczery(-a) niż", "nie jest tak nieszczery(-a) jak"],
      ["jest bardziej nieszczery(-a) niż", "nie jest tak szczery(-a) jak"],
    ],
    q: [
      ["bardziej szczery(-a)", "mniej nieszczery(-a)"],
      ["bardziej nieszczery(-a)", "mniej szczery(-a)"],
    ],
  },

  {
    s: [
      ["jest bardziej proaktywny(-a) niż", "nie jest tak reaktywny(-a) jak"],
      ["jest bardziej reaktywny(-a) niż", "nie jest tak proaktywny(-a) jak"],
    ],
    q: [
      ["bardziej proaktywny(-a)", "mniej reaktywny(-a)"],
      ["bardziej reaktywny(-a)", "mniej proaktywny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej zdeterminowany(-a) niż", "nie jest tak wahał(-a) jak"],
      ["jest bardziej wahał(-a) niż", "nie jest tak zdeterminowany(-a) jak"],
    ],
    q: [
      ["bardziej zdeterminowany(-a)", "mniej wahał(-a)"],
      ["bardziej wahał(-a)", "mniej zdeterminowany(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej autentyczny(-a) niż", "nie jest tak fałszywy(-a) jak"],
      ["jest fałszywy(-a) niż", "nie jest tak autentyczny(-a) jak"],
    ],
    q: [
      ["bardziej autentyczny(-a)", "mniej fałszywy(-a)"],
      ["fałszywy(-a)", "mniej autentyczny(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej entuzjastyczny(-a) niż",
        "nie jest tak apatyczny(-a) jak",
      ],
      [
        "jest bardziej apatyczny(-a) niż",
        "nie jest tak entuzjastyczny(-a) jak",
      ],
    ],
    q: [
      ["bardziej entuzjastyczny(-a)", "mniej apatyczny(-a)"],
      ["bardziej apatyczny(-a)", "mniej entuzjastyczny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej uważny(-a) niż", "nie jest tak rozproszony(-a) jak"],
      ["jest bardziej rozproszony(-a) niż", "nie jest tak uważny(-a) jak"],
    ],
    q: [
      ["bardziej uważny(-a)", "mniej rozproszony(-a)"],
      ["bardziej rozproszony(-a)", "mniej uważny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej szanujący(-a) niż", "nie jest tak nieszanujący(-a) jak"],
      ["jest bardziej nieszanujący(-a) niż", "nie jest tak szanujący(-a) jak"],
    ],
    q: [
      ["bardziej szanujący(-a)", "mniej nieszanujący(-a)"],
      ["bardziej nieszanujący(-a)", "mniej szanujący(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej przystępny(-a) niż",
        "nie jest tak zastraszający(-a) jak",
      ],
      [
        "jest bardziej zastraszający(-a) niż",
        "nie jest tak przystępny(-a) jak",
      ],
    ],
    q: [
      ["bardziej przystępny(-a)", "mniej zastraszający(-a)"],
      ["bardziej zastraszający(-a)", "mniej przystępny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej pomysłowy(-a) niż", "nie jest tak marnotrawny(-a) jak"],
      ["jest bardziej marnotrawny(-a) niż", "nie jest tak pomysłowy(-a) jak"],
    ],
    q: [
      ["bardziej pomysłowy(-a)", "mniej marnotrawny(-a)"],
      ["bardziej marnotrawny(-a)", "mniej pomysłowy(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej przekonywujący(-a) niż",
        "nie jest tak nieprzekonywujący(-a) jak",
      ],
      [
        "jest bardziej nieprzekonywujący(-a) niż",
        "nie jest tak przekonywujący(-a) jak",
      ],
    ],
    q: [
      ["bardziej przekonywujący(-a)", "mniej nieprzekonywujący(-a)"],
      ["bardziej nieprzekonywujący(-a)", "mniej przekonywujący(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej spontaniczny(-a) niż",
        "nie jest tak przewidywalny(-a) jak",
      ],
      [
        "jest bardziej przewidywalny(-a) niż",
        "nie jest tak spontaniczny(-a) jak",
      ],
    ],
    q: [
      ["bardziej spontaniczny(-a)", "mniej przewidywalny(-a)"],
      ["bardziej przewidywalny(-a)", "mniej spontaniczny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej ambitny(-a) niż", "nie jest tak zadowolony(-a) jak"],
      ["jest bardziej zadowolony(-a) niż", "nie jest tak ambitny(-a) jak"],
    ],
    q: [
      ["bardziej ambitny(-a)", "mniej zadowolony(-a)"],
      ["bardziej zadowolony(-a)", "mniej ambitny(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej dyplomatyczny(-a) niż",
        "nie jest tak bezpośredni(-a) jak",
      ],
      [
        "jest bardziej bezpośredni(-a) niż",
        "nie jest tak dyplomatyczny(-a) jak",
      ],
    ],
    q: [
      ["bardziej dyplomatyczny(-a)", "mniej bezpośredni(-a)"],
      ["bardziej bezpośredni(-a)", "mniej dyplomatyczny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej lojalny(-a) niż", "nie jest tak nielojalny(-a) jak"],
      ["jest bardziej nielojalny(-a) niż", "nie jest tak lojalny(-a) jak"],
    ],
    q: [
      ["bardziej lojalny(-a)", "mniej nielojalny(-a)"],
      ["bardziej nielojalny(-a)", "mniej lojalny(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej elokwentny(-a) niż",
        "nie jest tak nieelokwentny(-a) jak",
      ],
      [
        "jest bardziej nieelokwentny(-a) niż",
        "nie jest tak elokwentny(-a) jak",
      ],
    ],
    q: [
      ["bardziej elokwentny(-a)", "mniej nieelokwentny(-a)"],
      ["bardziej nieelokwentny(-a)", "mniej elokwentny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej czujny(-a) niż", "nie jest tak obojętny(-a) jak"],
      ["jest bardziej obojętny(-a) niż", "nie jest tak czujny(-a) jak"],
    ],
    q: [
      ["bardziej czujny(-a)", "mniej obojętny(-a)"],
      ["bardziej obojętny(-a)", "mniej czujny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej ostrożny(-a) niż", "nie jest tak lekkomyślny(-a) jak"],
      ["jest bardziej lekkomyślny(-a) niż", "nie jest tak ostrożny(-a) jak"],
    ],
    q: [
      ["bardziej ostrożny(-a)", "mniej lekkomyślny(-a)"],
      ["bardziej lekkomyślny(-a)", "mniej ostrożny(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej kooperatywny(-a) niż",
        "nie jest tak niekooperatywny(-a) jak",
      ],
      [
        "jest bardziej niekooperatywny(-a) niż",
        "nie jest tak kooperatywny(-a) jak",
      ],
    ],
    q: [
      ["bardziej kooperatywny(-a)", "mniej niekooperatywny(-a)"],
      ["bardziej niekooperatywny(-a)", "mniej kooperatywny(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej pracowity(-a) niż", "nie jest tak niedbały(-a) jak"],
      ["jest bardziej niedbały(-a) niż", "nie jest tak pracowity(-a) jak"],
    ],
    q: [
      ["bardziej pracowity(-a)", "mniej niedbały(-a)"],
      ["bardziej niedbały(-a)", "mniej pracowity(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej czuły(-a) niż", "nie jest tak zimny(-a) jak"],
      ["jest zimniejszy(-a) niż", "nie jest tak czuły(-a) jak"],
    ],
    q: [
      ["bardziej czuły(-a)", "mniej zimny(-a)"],
      ["zimniejszy(-a)", "mniej czuły(-a)"],
    ],
  },
  {
    s: [
      [
        "jest bardziej godny zaufania(-a) niż",
        "nie jest tak niegodny zaufania(-a) jak",
      ],
      [
        "jest bardziej niegodny zaufania(-a) niż",
        "nie jest tak godny zaufania(-a) jak",
      ],
    ],
    q: [
      ["bardziej godny zaufania(-a)", "mniej niegodny zaufania(-a)"],
      ["bardziej niegodny zaufania(-a)", "mniej godny zaufania(-a)"],
    ],
  },
  {
    s: [
      ["jest bardziej rozsądny(-a) niż", "nie jest tak irracjonalny(-a) jak"],
      ["jest bardziej irracjonalny(-a) niż", "nie jest tak rozsądny(-a) jak"],
    ],
    q: [
      ["bardziej rozsądny(-a)", "mniej irracjonalny(-a)"],
      ["bardziej irracjonalny(-a)", "mniej rozsądny(-a)"],
    ],
  },
];

export default {
  names,
  comparisons,
  question: "Kto jest",
};
