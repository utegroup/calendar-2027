(() => {
const {
  months,
  pages,
  ui,
  crafts,
  questions,
  matchCraft,
  craftById,
  editorialPage,
  carouselPages,
  carouselSlideLabel,
} = window.GDS;

const app = document.querySelector("#app");
const STORAGE_KEY = "gds-calendario";

const state = {
  lang: "it",
  view: "home",
  quizIndex: 0,
  answers: [null, null, null, null],
  resultId: null,
  calendarPage: 0,
  calendarFrom: "home",
};

let scrollHandler = null;

function load() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
    if (saved.lang === "it" || saved.lang === "en") state.lang = saved.lang;
    if (Array.isArray(saved.answers) && saved.answers.length === 4) state.answers = saved.answers;
    if (Number.isInteger(saved.quizIndex)) state.quizIndex = saved.quizIndex;
    if (typeof saved.resultId === "string") state.resultId = saved.resultId;
  } catch {
    /* keep defaults */
  }

  const hash = location.hash.replace("#/", "");
  const known = ["home", "calendar", "explore", "quiz", "result"];
  state.view = known.includes(hash) ? hash : "home";
  if (state.view === "result" && !craftById(state.resultId)) state.view = "quiz";
}

function save() {
  sessionStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      lang: state.lang,
      quizIndex: state.quizIndex,
      answers: state.answers,
      resultId: state.resultId,
    }),
  );
}

function t() {
  return ui[state.lang];
}

function fill(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key]);
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function go(view, { replace = false } = {}) {
  state.view = view;
  const url = `#/${view}`;
  if (replace) history.replaceState({ view }, "", url);
  else if (location.hash !== url) history.pushState({ view }, "", url);
  save();
  render();
}

function arrow() {
  return `<img src="assets/arrow.svg" alt="">`;
}

function langSwitch() {
  return `
    <div class="lang">
      <button type="button" class="lang-btn ${state.lang === "it" ? "is-active" : ""}" data-action="lang" data-lang="it">IT</button>
      <button type="button" class="lang-btn ${state.lang === "en" ? "is-active" : ""}" data-action="lang" data-lang="en">EN</button>
    </div>
  `;
}

function logoButton() {
  return `
    <button type="button" class="logo-btn" data-action="home" aria-label="${esc(t().logo)}">
      <img class="logo" src="assets/logo.svg" alt="">
    </button>
  `;
}

function header({ back = false } = {}) {
  const inner = back
    ? `
      <button type="button" class="back" data-action="back" aria-label="${esc(t().back)}">
        <img src="assets/back.svg" alt="">
      </button>
      ${logoButton()}
      ${langSwitch()}
    `
    : `${logoButton()}${langSwitch()}`;
  const frameClass = back ? "header-frame header-inner" : "header-frame";
  return `<header class="header"><div class="${frameClass}">${inner}</div></header>`;
}

function carouselArrow(direction) {
  const isPrev = direction === "prev";
  const label = esc(isPrev ? t().previous : t().next);
  const path = isPrev ? "M11.5 3.5L5.5 9.5L11.5 15.5" : "M6.5 3.5L12.5 9.5L6.5 15.5";
  return `
    <button type="button" class="carousel-arrow is-${direction}" data-action="carousel-${direction}" aria-label="${label}">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="${path}" stroke="#422B31" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `;
}

function primaryButton(label, action, withArrow = true) {
  return `
    <button type="button" class="btn" data-action="${action}">
      <span>${label}</span>
      ${withArrow ? arrow() : ""}
    </button>
  `;
}

function textLink(label, action) {
  return `<button type="button" class="text-link" data-action="${action}">${esc(label)}</button>`;
}

function externalLink(label, href) {
  return `<a class="text-link" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;
}

function homeSlides() {
  return carouselPages.map((src, index) => ({ src, index }));
}

function renderHome() {
  const slides = homeSlides();
  const cards = slides
    .map((slide, position) => {
      const label = esc(carouselSlideLabel(slide.index, state.lang));
      return `<img class="carousel-card" src="${slide.src}" alt="${label}" ${position === 0 ? "" : 'loading="lazy"'}>`;
    })
    .join("");

  const dots = slides
    .map(
      (slide, position) =>
        `<button type="button" class="dot ${position === 0 ? "is-on" : ""}" data-action="dot" data-index="${position}" aria-label="${esc(carouselSlideLabel(slide.index, state.lang))}"></button>`,
    )
    .join("");

  return `
    ${header()}
    <section class="hero">
      <h1>
        <span class="hero-kicker">${t().calendarWord}</span>
        <span class="hero-year">2027</span>
      </h1>
    </section>
    <section class="band" aria-roledescription="carousel">
      <div class="carousel-stage">
        ${carouselArrow("prev")}
        <div class="carousel-track" id="carousel">${cards}</div>
        ${carouselArrow("next")}
      </div>
      <div class="dots">${dots}</div>
    </section>
    <p class="tagline">${t().tagline[0]}<br>${t().tagline[1]}</p>
    <div class="actions">
      ${primaryButton(t().discover, "quiz")}
      ${textLink(t().explore, "explore")}
      ${externalLink(t().visit, t().visitUrl)}
    </div>
  `;
}

function renderCalendar() {
  const images = pages
    .map(
      (src, index) =>
        `<img class="calendar-page" data-page="${index}" src="${src}" alt="${esc(fill(t().pageOf, { current: index + 1, total: pages.length }))}" ${index < 2 ? "" : 'loading="lazy"'}>`,
    )
    .join("");

  return `
    ${header({ back: true })}
    <p class="calendar-count">${esc(fill(t().pageOf, { current: state.calendarPage + 1, total: pages.length }))}</p>
    <div class="calendar">${images}</div>
  `;
}

function renderExplore() {
  const cards = crafts
    .map((craft) => {
      const name = esc(craft.name[state.lang].join(" "));
      return `
        <article class="craft">
          <h2>${esc(months[state.lang][craft.month])}</h2>
          <img src="${craft.image}" alt="${name}" loading="lazy">
          <h3>${name}</h3>
          <p>${esc(craft.description[state.lang])}</p>
        </article>
      `;
    })
    .join("");

  return `
    ${header({ back: true })}
    <section class="explore">
      <h1>${t().exploreTitle[0]}<br>${t().exploreTitle[1]}</h1>
      <div class="craft-list">
        ${cards}
        ${primaryButton(t().discover, "quiz")}
      </div>
    </section>
  `;
}

function renderQuiz() {
  const question = questions[state.quizIndex];
  const selected = state.answers[state.quizIndex];
  const options = question.options
    .map((option, index) => {
      const isSelected = selected === index;
      const mark = isSelected
        ? `<img class="radio" src="assets/radio.svg" alt="">`
        : `<span class="radio radio-empty" aria-hidden="true"></span>`;
      return `
        <button type="button" class="option ${isSelected ? "is-selected" : ""}" data-action="choose" data-choice="${index}" aria-pressed="${isSelected}">
          <span class="option-copy">
            <span class="option-title">${esc(option.title[state.lang])}</span>
            <span class="option-text">${esc(option.text[state.lang])}</span>
          </span>
          ${mark}
        </button>
      `;
    })
    .join("");

  const bars = questions
    .map((_, index) => `<span class="bar ${index <= state.quizIndex ? "is-on" : ""}"></span>`)
    .join("");

  return `
    ${header({ back: true })}
    <section class="quiz">
      <div class="progress">
        <p>${esc(fill(t().gesture, { current: state.quizIndex + 1, total: questions.length }))}</p>
        <div class="bars" aria-hidden="true">${bars}</div>
      </div>
      <h1>${esc(question.prompt[state.lang])}</h1>
      <div class="options">${options}</div>
      <button type="button" class="btn" data-action="confirm" ${selected === null ? "disabled" : ""}>
        <span>${t().confirm}</span>
      </button>
    </section>
  `;
}

function renderResult() {
  const craft = craftById(state.resultId);
  if (!craft) return renderQuiz();
  const name = craft.name[state.lang].map((line) => `<span>${esc(line)}</span>`).join("");
  const traits = craft.traits[state.lang].map((trait) => `<span>${esc(trait)}</span>`).join("");

  return `
    ${header({ back: true })}
    <section class="result">
      <img src="${craft.image}" alt="${esc(craft.name[state.lang].join(" "))}">
      <div class="identity">
        <h1>${name}</h1>
        <p>${esc(craft.body[state.lang])}</p>
      </div>
      <div class="traits">${traits}</div>
      <div class="actions">
        ${primaryButton(t().restart, "restart", false)}
        ${textLink(t().home, "home")}
        ${externalLink(t().visit, t().visitUrl)}
      </div>
    </section>
  `;
}

function render() {
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
    scrollHandler = null;
  }

  document.documentElement.lang = t().htmlLang;
  document.title = t().title;
  document.body.dataset.view = state.view;

  const views = {
    home: renderHome,
    calendar: renderCalendar,
    explore: renderExplore,
    quiz: renderQuiz,
    result: renderResult,
  };

  app.innerHTML = views[state.view]();
  window.scrollTo(0, 0);

  if (state.view === "home") bindCarousel();
  if (state.view === "calendar") bindCalendar();
}

function carouselCards() {
  const track = document.querySelector("#carousel");
  if (!track) return { track: null, cards: [] };
  return { track, cards: [...track.querySelectorAll(".carousel-card")] };
}

function carouselActiveIndex() {
  const { track, cards } = carouselCards();
  if (!track || cards.length === 0) return 0;
  const mid = track.scrollLeft + track.clientWidth / 2;
  let active = 0;
  let best = Infinity;
  cards.forEach((card, index) => {
    const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - mid);
    if (distance < best) {
      best = distance;
      active = index;
    }
  });
  return active;
}

function scrollCarousel(index) {
  const { cards } = carouselCards();
  cards[index]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}

function bindCarousel() {
  const { track, cards } = carouselCards();
  const dots = [...document.querySelectorAll(".dot")];
  const prev = document.querySelector(".carousel-arrow.is-prev");
  const next = document.querySelector(".carousel-arrow.is-next");
  if (!track) return;

  const update = () => {
    const active = carouselActiveIndex();
    dots.forEach((dot, index) => dot.classList.toggle("is-on", index === active));
    if (prev) prev.disabled = active === 0;
    if (next) next.disabled = active === cards.length - 1;
  };

  track.addEventListener("scroll", update, { passive: true });
  update();
}

function bindCalendar() {
  const images = [...document.querySelectorAll(".calendar-page")];
  const counter = document.querySelector(".calendar-count");
  const target = images[state.calendarPage];

  const focus = () => {
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 92;
    window.scrollTo(0, Math.max(0, top));
  };

  if (target && state.calendarPage > 0) {
    if (target.complete) focus();
    else target.addEventListener("load", focus, { once: true });
  }

  scrollHandler = () => {
    const line = window.scrollY + 140;
    let current = 0;
    images.forEach((image, index) => {
      if (image.offsetTop <= line) current = index;
    });
    if (counter) counter.textContent = fill(t().pageOf, { current: current + 1, total: pages.length });
  };
  window.addEventListener("scroll", scrollHandler, { passive: true });
}

function openCalendar(page, from) {
  state.calendarPage = page;
  state.calendarFrom = from;
  go("calendar");
}

function startQuiz() {
  state.quizIndex = 0;
  state.answers = [null, null, null, null];
  state.resultId = null;
  save();
  go("quiz");
}

function onClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "home") {
    if (state.view !== "home") go("home");
    return;
  }

  if (action === "lang") {
    state.lang = target.dataset.lang;
    save();
    render();
    return;
  }

  if (action === "back") {
    if (state.view === "quiz" && state.quizIndex > 0) {
      state.quizIndex -= 1;
      save();
      render();
      return;
    }
    if (state.view === "calendar") {
      go(state.calendarFrom);
      return;
    }
    if (state.view === "result") {
      state.quizIndex = questions.length - 1;
      go("quiz");
      return;
    }
    go("home");
    return;
  }

  if (action === "calendar") {
    openCalendar(0, "home");
    return;
  }

  if (action === "calendar-craft") {
    const craft = craftById(state.resultId);
    openCalendar(craft ? editorialPage(craft.month) : 0, "result");
    return;
  }

  if (action === "explore") {
    go("explore");
    return;
  }

  if (action === "quiz") {
    startQuiz();
    return;
  }

  if (action === "restart") {
    startQuiz();
    return;
  }

  if (action === "dot") {
    scrollCarousel(Number(target.dataset.index));
    return;
  }

  if (action === "carousel-prev" || action === "carousel-next") {
    const active = carouselActiveIndex();
    scrollCarousel(action === "carousel-prev" ? active - 1 : active + 1);
    return;
  }

  if (action === "choose") {
    state.answers[state.quizIndex] = Number(target.dataset.choice);
    save();
    render();
    return;
  }

  if (action === "confirm") {
    if (state.answers[state.quizIndex] === null) return;
    if (state.quizIndex < questions.length - 1) {
      state.quizIndex += 1;
      save();
      render();
      return;
    }
    state.resultId = matchCraft(state.answers);
    save();
    go("result");
  }
}

app.addEventListener("click", onClick);

window.addEventListener("popstate", () => {
  const hash = location.hash.replace("#/", "");
  const known = ["home", "calendar", "explore", "quiz", "result"];
  state.view = known.includes(hash) ? hash : "home";
  if (state.view === "result" && !craftById(state.resultId)) state.view = "quiz";
  render();
});

load();
render();
})();
