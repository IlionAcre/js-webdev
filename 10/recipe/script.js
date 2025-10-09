"use strict";
const ORIGINAL_DECK = [
  {
    q: "¿Cuáles son los tipos primitivos en JavaScript?",
    a: "string, number, boolean, null, undefined, bigint y symbol.",
  },
  {
    q: "¿Por qué typeof null devuelve 'object'?",
    a: "Es un error histórico del lenguaje que se mantiene por compatibilidad.",
  },
  {
    q: "¿Qué hace el método push() en un arreglo?",
    a: "Agrega un elemento al final del arreglo y devuelve la nueva longitud.",
  },
  {
    q: "¿Qué hace el método splice() en un arreglo?",
    a: "Permite eliminar o insertar elementos en posiciones específicas del arreglo.",
  },
  {
    q: "¿Para qué sirve el método includes() en un arreglo o string?",
    a: "Verifica si un elemento o texto existe y devuelve true o false.",
  },
  {
    q: "¿Qué devuelve el método slice()?",
    a: "Devuelve una copia de una parte del arreglo o string sin modificar el original.",
  },
  {
    q: "¿Qué hace el método join() en un arreglo?",
    a: "Une todos los elementos en un string, separados por un delimitador.",
  },
  {
    q: "¿Qué devuelve el método trim() en un string?",
    a: "Devuelve una copia del texto sin los espacios al inicio ni al final.",
  },
  {
    q: "¿Qué diferencia hay entre for, for...of y for...in?",
    a: "for usa un contador; for...of recorre valores; for...in recorre claves de un objeto.",
  },
  {
    q: "¿Para qué sirve el método forEach()?",
    a: "Ejecuta una función para cada elemento del arreglo sin devolver un nuevo arreglo.",
  },
  {
    q: "¿Cuál es la diferencia entre while y do...while?",
    a: "while evalúa la condición antes de ejecutar; do...while ejecuta al menos una vez.",
  },
  {
    q: "¿Qué diferencia hay entre una función normal, una anónima y una flecha?",
    a: "Las normales tienen nombre; las anónimas no; las flecha (=>) son más cortas y no tienen su propio this.",
  },
  {
    q: "¿Qué significa que JavaScript sea un lenguaje de tipado dinámico?",
    a: "Que el tipo de las variables puede cambiar durante la ejecución.",
  },
  {
    q: "¿Qué significa que JavaScript sea single-thread?",
    a: "Que ejecuta una sola tarea a la vez en un único hilo.",
  },
  {
    q: "¿Qué papel cumple la call stack en JavaScript?",
    a: "Es la pila donde se guardan y ejecutan las llamadas a funciones en orden.",
  },
  {
    q: "¿Cómo se evalúan las condiciones en JavaScript?",
    a: "Usando valores truthy y falsy en estructuras como if, else if, else y switch.",
  },
  {
    q: "¿Qué es el operador spread (...) y para qué sirve?",
    a: "Expande los elementos de un arreglo u objeto. Ejemplo: const copia = [...original];",
  },
  {
    q: "¿Qué es el operador rest (...) y cuándo se usa?",
    a: "Agrupa varios valores en un solo parámetro. Ejemplo: function sumar(...nums){}.",
  },
  {
    q: "¿Qué hace el método addEventListener()?",
    a: "Escucha un evento del DOM (como clics o teclas) y ejecuta una función cuando ocurre.",
  },
  {
    q: "¿Cómo se cambia el texto y el estilo de un elemento con JavaScript?",
    a: "Con element.textContent = 'Nuevo texto' y element.style.color = 'red';.",
  },
];

let deck = [...ORIGINAL_DECK]; // mutable working deck
let index = 0; // current card index
let known = new Array(deck.length).fill(false); // known flags
let showingAnswer = false; // Q (false) or A (true)

/* ---------- Elements ---------- */
const elCard = document.getElementById("card");
const elTitle = document.getElementById("card-title");
const elText = document.getElementById("card-text");
const elStatIndex = document.getElementById("stat-index");
const elStatTotal = document.getElementById("stat-total");
const elStatKnown = document.getElementById("stat-known");
const elMessage = document.getElementById("message");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnShuffle = document.getElementById("btn-shuffle");
const btnKnown = document.getElementById("btn-known");
const btnReset = document.getElementById("btn-reset");

/* ---------- Utils ---------- */
function setText(el, txt) {
  el.textContent = txt;
}
function wrap(n, len) {
  return (n + len) % len;
}
function showMessage(txt) {
  setText(elMessage, txt || "");
  clearTimeout(showMessage._t);
  showMessage._t = setTimeout(() => setText(elMessage, ""), 1000);
}
function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
}

/* ---------- Rendering ---------- */
function renderCard() {
  const card = deck[index];

  // Title shows whether we're on Q or A
  setText(elTitle, (showingAnswer ? "A" : "Q") + (index + 1));

  // Text shows either the question or the answer
  setText(elText, showingAnswer ? card.a : card.q);

  // Known tint
  const isKnown = known[index] === true;
  elCard.classList.toggle("card-known", isKnown);

  // Reflect pressed state for a11y
  btnKnown.setAttribute("aria-pressed", String(isKnown));
}

function renderStats() {
  setText(elStatIndex, String(index + 1));
  setText(elStatTotal, String(deck.length));

  let count = 0;
  for (let i = 0; i < known.length; i++) if (known[i] === true) count++;
  setText(elStatKnown, String(count));
}

/* ---------- Actions ---------- */
function showQuestionSide() {
  showingAnswer = false;
  renderCard();
}
function showAnswerSide() {
  showingAnswer = true;
  renderCard();
}
function toggleQA() {
  showingAnswer = !showingAnswer;
  renderCard();
}

function goPrev() {
  index = wrap(index - 1, deck.length);
  showingAnswer = false; // always land on question
  renderCard();
  renderStats();
}

function goNext() {
  index = wrap(index + 1, deck.length);
  showingAnswer = false;
  renderCard();
  renderStats();
}

function toggleKnown() {
  known[index] = !known[index];
  renderCard();
  renderStats();
}

function shuffleDeck() {
  shuffleInPlace(deck);
  known = new Array(deck.length).fill(false);
  index = 0;
  showingAnswer = false;
  renderCard();
  renderStats();
  alert("The deck has been shuffled");
}

function resetAll() {
  deck = [...ORIGINAL_DECK];
  known = new Array(deck.length).fill(false);
  index = 0;
  showingAnswer = false;
  renderCard();
  renderStats();
  alert("The deck has been reset");
}

/* ---------- Events ---------- */
// Click the card to toggle Q/A
elCard.addEventListener("click", toggleQA);

// Buttons
btnPrev.addEventListener("click", goPrev);
btnNext.addEventListener("click", goNext);
btnShuffle.addEventListener("click", shuffleDeck);
btnKnown.addEventListener("click", toggleKnown);
btnReset.addEventListener("click", resetAll);

// Keyboard: Space toggles Q/A, arrows navigate, K marks known
document.addEventListener("keydown", e => {
  if (e.key === " " || e.code === "Space") {
    e.preventDefault();
    toggleQA();
  } else if (e.key === "ArrowLeft") goPrev();
  else if (e.key === "ArrowRight") goNext();
  else if (e.key.toLowerCase() === "k") toggleKnown();
});

/* ---------- Init ---------- */
(function init() {
  renderCard();
  renderStats();
  showMessage("Loaded — click the card to reveal the answer");
})();
