const COPY = window.COPY;

const months = {
  it: [
    "GENNAIO",
    "FEBBRAIO",
    "MARZO",
    "APRILE",
    "MAGGIO",
    "GIUGNO",
    "LUGLIO",
    "AGOSTO",
    "SETTEMBRE",
    "OTTOBRE",
    "NOVEMBRE",
    "DICEMBRE",
  ],
  en: [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ],
};

const pages = Array.from({ length: 28 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return `img/web/pagina_${number}.jpg`;
});

const carouselPages = Array.from(
  { length: 26 },
  (_, index) => `img/web/Calendario_2027_${index + 1}.jpg`,
);

const craftMeta = [
  { id: "liutaio", month: 0, image: "img/web/1_liutaio.jpg" },
  { id: "fornaio", month: 1, image: "img/web/2_fornaio.jpg" },
  { id: "calzolaio", month: 2, image: "img/web/3_calzolaio.jpg" },
  { id: "sarta", month: 3, image: "img/web/4_sarta.jpg" },
  { id: "vetraio", month: 4, image: "img/web/5_mastro.jpg" },
  { id: "mietitura", month: 5, image: "img/web/6_mietitura.jpg" },
  { id: "ceramista", month: 6, image: "img/web/7_ceramista.jpg" },
  { id: "pescatore", month: 7, image: "img/web/8_pescatore.jpg" },
  { id: "impagliatore", month: 8, image: "img/web/9_impagliatore.jpg" },
  { id: "arrotino", month: 9, image: "img/web/10_arrotino.jpg" },
  { id: "proiezionista", month: 10, image: "img/web/11_proiezionista.jpg" },
  { id: "gondoliere", month: 11, image: "img/web/12_gondoliere.jpg" },
];

const crafts = craftMeta.map((meta) => {
  const text = COPY.crafts[meta.id];
  return {
    ...meta,
    name: { it: text.it.name, en: text.en.name },
    description: { it: text.it.description, en: text.en.description },
    body: { it: text.it.reveal, en: text.en.reveal },
    traits: { it: text.it.traits, en: text.en.traits },
  };
});

const weights = [
  [
    { fornaio: 4, pescatore: 4, liutaio: 1 },
    { ceramista: 3, liutaio: 3, sarta: 3, calzolaio: 3, impagliatore: 3 },
    { mietitura: 4, arrotino: 4, vetraio: 3, gondoliere: 1 },
    { proiezionista: 4, gondoliere: 4, vetraio: 1 },
  ],
  [
    { liutaio: 3, ceramista: 3, calzolaio: 3, impagliatore: 3, sarta: 1, mietitura: 2, vetraio: 2 },
    { fornaio: 4, pescatore: 3, proiezionista: 3, mietitura: 1 },
    { sarta: 4, arrotino: 4, fornaio: 1 },
    { gondoliere: 4, vetraio: 2, proiezionista: 1 },
  ],
  [
    { liutaio: 4, sarta: 4, ceramista: 2, calzolaio: 1 },
    { fornaio: 4, mietitura: 4, pescatore: 3, ceramista: 3, vetraio: 1 },
    { calzolaio: 4, impagliatore: 4, arrotino: 4 },
    { vetraio: 4, proiezionista: 4, gondoliere: 4 },
  ],
  [
    { ceramista: 4, liutaio: 3, sarta: 3, vetraio: 3, calzolaio: 2 },
    { fornaio: 4, mietitura: 3, pescatore: 1 },
    { pescatore: 4, mietitura: 3, impagliatore: 4, arrotino: 1, gondoliere: 1 },
    { gondoliere: 3, proiezionista: 4, arrotino: 3, vetraio: 1 },
  ],
];

const questions = COPY.quiz.map((question, questionIndex) => ({
  prompt: { it: question.it.prompt, en: question.en.prompt },
  options: question.it.options.map((option, optionIndex) => ({
    title: { it: option.title, en: question.en.options[optionIndex].title },
    text: { it: option.text, en: question.en.options[optionIndex].text },
    weights: weights[questionIndex][optionIndex],
  })),
}));

const ui = COPY.ui;

function matchCraft(answers) {
  const scores = Object.fromEntries(crafts.map((craft) => [craft.id, [0, 0, 0, 0]]));

  answers.forEach((choice, questionIndex) => {
    const optionWeights = questions[questionIndex].options[choice].weights;
    Object.entries(optionWeights).forEach(([id, points]) => {
      scores[id][questionIndex] += points;
    });
  });

  const ranked = crafts.map((craft) => {
    const parts = scores[craft.id];
    return {
      id: craft.id,
      total: parts.reduce((sum, value) => sum + value, 0),
      parts,
    };
  });

  ranked.sort((a, b) => {
    if (b.total !== a.total) return b.total - a.total;
    for (const questionIndex of [2, 3, 1, 0]) {
      if (b.parts[questionIndex] !== a.parts[questionIndex]) {
        return b.parts[questionIndex] - a.parts[questionIndex];
      }
    }
    return 0;
  });

  return ranked[0].id;
}

function craftById(id) {
  return crafts.find((craft) => craft.id === id);
}

function editorialPage(monthIndex) {
  return 3 + monthIndex * 2;
}

function slideLabel(index, lang) {
  const text = ui[lang];
  if (index === 0 || index === 2) return text.cover;
  if (index === 1) return text.opening;
  if (index === pages.length - 1) return text.closing;
  const monthIndex = Math.floor((index - 3) / 2);
  const side = (index - 3) % 2 === 0 ? text.front : text.backSide;
  return `${months[lang][monthIndex]} · ${side}`;
}

function carouselSlideLabel(index, lang) {
  const text = ui[lang];
  if (index === 0) return text.opening;
  if (index === carouselPages.length - 1) return text.closing;
  const monthIndex = Math.floor((index - 1) / 2);
  const side = (index - 1) % 2 === 0 ? text.front : text.backSide;
  return `${months[lang][monthIndex]} · ${side}`;
}

window.GDS = {
  months,
  pages,
  carouselPages,
  ui,
  crafts,
  questions,
  matchCraft,
  craftById,
  editorialPage,
  slideLabel,
  carouselSlideLabel,
};
