import type { ReasoningData } from "@components/TestApp/types";

const names = [
  "Ana",
  "Bruno",
  "Camila",
  "Diego",
  "Eduarda",
  "Felipe",
  "Gabriela",
  "Henrique",
  "Isabela",
  "João",
  "Larissa",
  "Lucas",
  "Mariana",
  "Mateus",
  "Natália",
  "Otávio",
  "Patrícia",
  "Pedro",
  "Rafaela",
  "Ricardo",
  "Sofia",
  "Thiago",
  "Valentina",
  "Vinícius",
  "Amanda",
  "André",
  "Beatriz",
  "Caio",
  "Carolina",
  "Daniel",
  "Elena",
  "Fernando",
  "Fernanda",
  "Gabriel",
  "Helena",
  "Igor",
  "Júlia",
  "Leonardo",
  "Letícia",
  "Marcos",
  "Melissa",
  "Nicolas",
  "Olivia",
  "Paulo",
  "Priscila",
  "Renata",
  "Rodrigo",
  "Samuel",
  "Tatiana",
  "Victor",
  "Alice",
  "Arthur",
  "Bianca",
  "Carlos",
  "Clara",
  "Davi",
  "Débora",
  "Eduardo",
  "Flávia",
  "Gustavo",
  "Ingrid",
  "José",
  "Juliana",
  "Kevin",
  "Laura",
  "Luiza",
  "Marcelo",
  "Miguel",
  "Nina",
  "Raquel",
  "Roberto",
  "Sandra",
  "Sérgio",
  "Teresa",
  "Tomás",
  "Vanessa",
  "Wagner",
  "Yasmin",
  "Alexandre",
  "Aline",
  "Bernardo",
  "Cristina",
  "Douglas",
  "Elisa",
  "Fábio",
  "Giovana",
  "Hugo",
  "Irene",
  "Jefferson",
  "Karina",
  "Leandro",
  "Mônica",
  "Nathan",
  "Paula",
  "Ronaldo",
  "Simone",
  "Tiago",
  "Úrsula",
  "Vitor",
  "William",
  "Xavier",
  "Zélia",
];

const comparisons = [
  {
    s: [
      ["é mais forte que", "não é tão fraco(a) quanto"],
      ["é mais fraco(a) que", "não é tão forte quanto"],
    ],
    q: [
      ["mais forte", "menos fraco(a)"],
      ["mais fraco(a)", "menos forte"],
    ],
  },
  {
    s: [
      ["é mais inteligente que", "não é tão burro(a) quanto"],
      ["é mais burro(a) que", "não é tão inteligente quanto"],
    ],
    q: [
      ["mais inteligente", "menos burro(a)"],
      ["mais burro(a)", "menos inteligente"],
    ],
  },
  {
    s: [
      ["é mais alto(a) que", "não é tão baixo(a) quanto"],
      ["é mais baixo(a) que", "não é tão alto(a) quanto"],
    ],
    q: [
      ["mais alto(a)", "menos baixo(a)"],
      ["mais baixo(a)", "menos alto(a)"],
    ],
  },
  {
    s: [
      ["é mais corajoso(a) que", "não é tão covarde quanto"],
      ["é mais covarde que", "não é tão corajoso(a) quanto"],
    ],
    q: [
      ["mais corajoso(a)", "menos covarde"],
      ["mais covarde", "menos corajoso(a)"],
    ],
  },
  {
    s: [
      ["é mais gentil que", "não é tão cruel quanto"],
      ["é mais cruel que", "não é tão gentil quanto"],
    ],
    q: [
      ["mais gentil", "menos cruel"],
      ["mais cruel", "menos gentil"],
    ],
  },
  {
    s: [
      ["é mais engraçado(a) que", "não é tão sério(a) quanto"],
      ["é mais sério(a) que", "não é tão engraçado(a) quanto"],
    ],
    q: [
      ["mais engraçado(a)", "menos sério(a)"],
      ["mais sério(a)", "menos engraçado(a)"],
    ],
  },
  {
    s: [
      ["é mais amigável que", "não é tão hostil quanto"],
      ["é mais hostil que", "não é tão amigável quanto"],
    ],
    q: [
      ["mais amigável", "menos hostil"],
      ["mais hostil", "menos amigável"],
    ],
  },
  {
    s: [
      ["é mais generoso(a) que", "não é tão egoísta quanto"],
      ["é mais egoísta que", "não é tão generoso(a) quanto"],
    ],
    q: [
      ["mais generoso(a)", "menos egoísta"],
      ["mais egoísta", "menos generoso(a)"],
    ],
  },
  {
    s: [
      ["é mais confiante que", "não é tão inseguro(a) quanto"],
      ["é mais inseguro(a) que", "não é tão confiante quanto"],
    ],
    q: [
      ["mais confiante", "menos inseguro(a)"],
      ["mais inseguro(a)", "menos confiante"],
    ],
  },
  {
    s: [
      ["é mais calmo(a) que", "não é tão ansioso(a) quanto"],
      ["é mais ansioso(a) que", "não é tão calmo(a) quanto"],
    ],
    q: [
      ["mais calmo(a)", "menos ansioso(a)"],
      ["mais ansioso(a)", "menos calmo(a)"],
    ],
  },
  {
    s: [
      ["é mais otimista que", "não é tão pessimista quanto"],
      ["é mais pessimista que", "não é tão otimista quanto"],
    ],
    q: [
      ["mais otimista", "menos pessimista"],
      ["mais pessimista", "menos otimista"],
    ],
  },
  {
    s: [
      ["é mais ambicioso(a) que", "não é tão preguiçoso(a) quanto"],
      ["é mais preguiçoso(a) que", "não é tão ambicioso(a) quanto"],
    ],
    q: [
      ["mais ambicioso(a)", "menos preguiçoso(a)"],
      ["mais preguiçoso(a)", "menos ambicioso(a)"],
    ],
  },
  {
    s: [
      ["é mais responsável que", "não é tão descuidado(a) quanto"],
      ["é mais descuidado(a) que", "não é tão responsável quanto"],
    ],
    q: [
      ["mais responsável", "menos descuidado(a)"],
      ["mais descuidado(a)", "menos responsável"],
    ],
  },
  {
    s: [
      ["é mais empático(a) que", "não é tão insensível quanto"],
      ["é mais insensível que", "não é tão empático(a) quanto"],
    ],
    q: [
      ["mais empático(a)", "menos insensível"],
      ["mais insensível", "menos empático(a)"],
    ],
  },
  {
    s: [
      ["é mais criativo(a) que", "não é tão convencional quanto"],
      ["é mais convencional que", "não é tão criativo(a) quanto"],
    ],
    q: [
      ["mais criativo(a)", "menos convencional"],
      ["mais convencional", "menos criativo(a)"],
    ],
  },
  {
    s: [
      ["é mais disciplinado(a) que", "não é tão imprudente quanto"],
      ["é mais imprudente que", "não é tão disciplinado(a) quanto"],
    ],
    q: [
      ["mais disciplinado(a)", "menos imprudente"],
      ["mais imprudente", "menos disciplinado(a)"],
    ],
  },
  {
    s: [
      ["é mais atraente que", "não é tão feio(a) quanto"],
      ["é mais feio(a) que", "não é tão atraente quanto"],
    ],
    q: [
      ["mais atraente", "menos feio(a)"],
      ["mais feio(a)", "menos atraente"],
    ],
  },
  {
    s: [
      ["é mais honesto(a) que", "não é tão enganoso(a) quanto"],
      ["é mais enganoso(a) que", "não é tão honesto(a) quanto"],
    ],
    q: [
      ["mais honesto(a)", "menos enganoso(a)"],
      ["mais enganoso(a)", "menos honesto(a)"],
    ],
  },
  {
    s: [
      ["é mais paciente que", "não é tão impaciente quanto"],
      ["é mais impaciente que", "não é tão paciente quanto"],
    ],
    q: [
      ["mais paciente", "menos impaciente"],
      ["mais impaciente", "menos paciente"],
    ],
  },
  {
    s: [
      ["é mais aberto(a) que", "não é tão fechado(a) quanto"],
      ["é mais fechado(a) que", "não é tão aberto(a) quanto"],
    ],
    q: [
      ["mais aberto(a)", "menos fechado(a)"],
      ["mais fechado(a)", "menos aberto(a)"],
    ],
  },
  {
    s: [
      ["é mais educado(a) que", "não é tão grosseiro(a) quanto"],
      ["é mais grosseiro(a) que", "não é tão educado(a) quanto"],
    ],
    q: [
      ["mais educado(a)", "menos grosseiro(a)"],
      ["mais grosseiro(a)", "menos educado(a)"],
    ],
  },
  {
    s: [
      ["é mais organizado(a) que", "não é tão caótico(a) quanto"],
      ["é mais caótico(a) que", "não é tão organizado(a) quanto"],
    ],
    q: [
      ["mais organizado(a)", "menos caótico(a)"],
      ["mais caótico(a)", "menos organizado(a)"],
    ],
  },
  {
    s: [
      ["é mais maduro(a) que", "não é tão imaturo(a) quanto"],
      ["é mais imaturo(a) que", "não é tão maduro(a) quanto"],
    ],
    q: [
      ["mais maduro(a)", "menos imaturo(a)"],
      ["mais imaturo(a)", "menos maduro(a)"],
    ],
  },
  {
    s: [
      ["é mais flexível que", "não é tão rígido(a) quanto"],
      ["é mais rígido(a) que", "não é tão flexível quanto"],
    ],
    q: [
      ["mais flexível", "menos rígido(a)"],
      ["mais rígido(a)", "menos flexível"],
    ],
  },
  {
    s: [
      ["é mais humilde que", "não é tão arrogante quanto"],
      ["é mais arrogante que", "não é tão humilde quanto"],
    ],
    q: [
      ["mais humilde", "menos arrogante"],
      ["mais arrogante", "menos humilde"],
    ],
  },
  {
    s: [
      ["é mais carismático(a) que", "não é tão entediante quanto"],
      ["é mais entediante que", "não é tão carismático(a) quanto"],
    ],
    q: [
      ["mais carismático(a)", "menos entediante"],
      ["mais entediante", "menos carismático(a)"],
    ],
  },
  {
    s: [
      ["é mais confiável que", "não é tão duvidoso(a) quanto"],
      ["é mais duvidoso(a) que", "não é tão confiável quanto"],
    ],
    q: [
      ["mais confiável", "menos duvidoso(a)"],
      ["mais duvidoso(a)", "menos confiável"],
    ],
  },
  {
    s: [
      ["é mais apaixonado(a) que", "não é tão indiferente quanto"],
      ["é mais indiferente que", "não é tão apaixonado(a) quanto"],
    ],
    q: [
      ["mais apaixonado(a)", "menos indiferente"],
      ["mais indiferente", "menos apaixonado(a)"],
    ],
  },
  {
    s: [
      ["é mais compreensivo(a) que", "não é tão julgador(a) quanto"],
      ["é mais julgador(a) que", "não é tão compreensivo(a) quanto"],
    ],
    q: [
      ["mais compreensivo(a)", "menos julgador(a)"],
      ["mais julgador(a)", "menos compreensivo(a)"],
    ],
  },
  {
    s: [
      ["é mais tolerante que", "não é tão intolerante quanto"],
      ["é mais intolerante que", "não é tão tolerante quanto"],
    ],
    q: [
      ["mais tolerante", "menos intolerante"],
      ["mais intolerante", "menos tolerante"],
    ],
  },
  {
    s: [
      ["é mais perdoador(a) que", "não é tão rancoroso(a) quanto"],
      ["é mais rancoroso(a) que", "não é tão perdoador(a) quanto"],
    ],
    q: [
      ["mais perdoador(a)", "menos rancoroso(a)"],
      ["mais rancoroso(a)", "menos perdoador(a)"],
    ],
  },
  {
    s: [
      ["é mais energético(a) que", "não é tão letárgico(a) quanto"],
      ["é mais letárgico(a) que", "não é tão energético(a) quanto"],
    ],
    q: [
      ["mais energético(a)", "menos letárgico(a)"],
      ["mais letárgico(a)", "menos energético(a)"],
    ],
  },
  {
    s: [
      ["é mais modesto(a) que", "não é tão presunçoso(a) quanto"],
      ["é mais presunçoso(a) que", "não é tão modesto(a) quanto"],
    ],
    q: [
      ["mais modesto(a)", "menos presunçoso(a)"],
      ["mais presunçoso(a)", "menos modesto(a)"],
    ],
  },
  {
    s: [
      ["é mais sincero(a) que", "não é tão falso(a) quanto"],
      ["é mais falso(a) que", "não é tão sincero(a) quanto"],
    ],
    q: [
      ["mais sincero(a)", "menos falso(a)"],
      ["mais falso(a)", "menos sincero(a)"],
    ],
  },
  {
    s: [
      ["é mais proativo(a) que", "não é tão reativo(a) quanto"],
      ["é mais reativo(a) que", "não é tão proativo(a) quanto"],
    ],
    q: [
      ["mais proativo(a)", "menos reativo(a)"],
      ["mais reativo(a)", "menos proativo(a)"],
    ],
  },
  {
    s: [
      ["é mais determinado(a) que", "não é tão hesitante quanto"],
      ["é mais hesitante que", "não é tão determinado(a) quanto"],
    ],
    q: [
      ["mais determinado(a)", "menos hesitante"],
      ["mais hesitante", "menos determinado(a)"],
    ],
  },
  {
    s: [
      ["é mais genuíno(a) que", "não é tão fingido(a) quanto"],
      ["é mais fingido(a) que", "não é tão genuíno(a) quanto"],
    ],
    q: [
      ["mais genuíno(a)", "menos fingido(a)"],
      ["mais fingido(a)", "menos genuíno(a)"],
    ],
  },
  {
    s: [
      ["é mais entusiasta que", "não é tão apático(a) quanto"],
      ["é mais apático(a) que", "não é tão entusiasta quanto"],
    ],
    q: [
      ["mais entusiasta", "menos apático(a)"],
      ["mais apático(a)", "menos entusiasta"],
    ],
  },
  {
    s: [
      ["é mais atento(a) que", "não é tão distraído(a) quanto"],
      ["é mais distraído(a) que", "não é tão atento(a) quanto"],
    ],
    q: [
      ["mais atento(a)", "menos distraído(a)"],
      ["mais distraído(a)", "menos atento(a)"],
    ],
  },
  {
    s: [
      ["é mais respeitoso(a) que", "não é tão desrespeitoso(a) quanto"],
      ["é mais desrespeitoso(a) que", "não é tão respeitoso(a) quanto"],
    ],
    q: [
      ["mais respeitoso(a)", "menos desrespeitoso(a)"],
      ["mais desrespeitoso(a)", "menos respeitoso(a)"],
    ],
  },
  {
    s: [
      ["é mais acessível que", "não é tão intimidador(a) quanto"],
      ["é mais intimidador(a) que", "não é tão acessível quanto"],
    ],
    q: [
      ["mais acessível", "menos intimidador(a)"],
      ["mais intimidador(a)", "menos acessível"],
    ],
  },
  {
    s: [
      ["é mais espontâneo(a) que", "não é tão previsível quanto"],
      ["é mais previsível que", "não é tão espontâneo(a) quanto"],
    ],
    q: [
      ["mais espontâneo(a)", "menos previsível"],
      ["mais previsível", "menos espontâneo(a)"],
    ],
  },
  {
    s: [
      ["é mais diplomático(a) que", "não é tão direto(a) quanto"],
      ["é mais direto(a) que", "não é tão diplomático(a) quanto"],
    ],
    q: [
      ["mais diplomático(a)", "menos direto(a)"],
      ["mais direto(a)", "menos diplomático(a)"],
    ],
  },
  {
    s: [
      ["é mais leal que", "não é tão desleal quanto"],
      ["é mais desleal que", "não é tão leal quanto"],
    ],
    q: [
      ["mais leal", "menos desleal"],
      ["mais desleal", "menos leal"],
    ],
  },
  {
    s: [
      ["é mais prudente que", "não é tão imprudente quanto"],
      ["é mais imprudente que", "não é tão prudente quanto"],
    ],
    q: [
      ["mais prudente", "menos imprudente"],
      ["mais imprudente", "menos prudente"],
    ],
  },
  {
    s: [
      ["é mais cooperativo(a) que", "não é tão individualista quanto"],
      ["é mais individualista que", "não é tão cooperativo(a) quanto"],
    ],
    q: [
      ["mais cooperativo(a)", "menos individualista"],
      ["mais individualista", "menos cooperativo(a)"],
    ],
  },
  {
    s: [
      ["é mais diligente que", "não é tão negligente quanto"],
      ["é mais negligente que", "não é tão diligente quanto"],
    ],
    q: [
      ["mais diligente", "menos negligente"],
      ["mais negligente", "menos diligente"],
    ],
  },
  {
    s: [
      ["é mais carinhoso(a) que", "não é tão frio(a) quanto"],
      ["é mais frio(a) que", "não é tão carinhoso(a) quanto"],
    ],
    q: [
      ["mais carinhoso(a)", "menos frio(a)"],
      ["mais frio(a)", "menos carinhoso(a)"],
    ],
  },
  {
    s: [
      ["é mais sensato(a) que", "não é tão irracional quanto"],
      ["é mais irracional que", "não é tão sensato(a) quanto"],
    ],
    q: [
      ["mais sensato(a)", "menos irracional"],
      ["mais irracional", "menos sensato(a)"],
    ],
  },
] satisfies ReasoningData["comparisons"];

export default {
  names,
  comparisons,
  question: "Quem é",
} satisfies ReasoningData;
