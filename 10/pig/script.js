'use strict';

const botonRoll = document.querySelector('.btn--roll');
const botonHold = document.querySelector('.btn--hold');
const botonNew = document.querySelector('.btn--new');
const imagenDado = document.querySelector('.dice');
imagenDado.style.cursor = 'pointer';
const scores = [
  document.querySelector('#score--0'),
  document.querySelector('#score--1'),
];
const currentScores = [
  document.querySelector('#current--0'),
  document.querySelector('#current--1'),
];
const players = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];

let scoreActual;
let listaScore;
let currentPlayer;

function comenzarJuego() {
  scoreActual = 0;
  listaScore = [0, 0];
  currentPlayer = 0;
  imagenDado.classList.add('hidden');
  for (let cScore of currentScores) cScore.innerText = 0;
  for (let score of scores) score.innerText = 0;

  for (let player of players) {
    player.classList.remove('player--active');
    player.classList.remove('player--winner');
  }
  players[0].classList.add('player--active');
}

function cambiarColor() {
  for (let player of players) player.classList.toggle('player--active');
}

function actualizarCurrent() {
  currentScores[currentPlayer].innerText = scoreActual;
}

function rollearDado() {
  let dado = Math.trunc(Math.random() * 6) + 1;

  imagenDado.src = `./dice-${dado}.png`;
  if (imagenDado.classList.contains('hidden')) {
    imagenDado.classList.remove('hidden');
  }

  if (dado !== 1) {
    scoreActual += dado;
    actualizarCurrent();
  } else {
    scoreActual = 0;
    cambiarColor();
    actualizarCurrent();
    currentPlayer = currentPlayer === 0 ? 1 : 0;
  }
}
comenzarJuego();

botonRoll.addEventListener('click', rollearDado);
imagenDado.addEventListener('click', rollearDado);

botonHold.addEventListener('click', () => {
  listaScore[currentPlayer] += scoreActual;
  scores[currentPlayer].innerText = listaScore[currentPlayer];
  scoreActual = 0;
  actualizarCurrent();
  if (listaScore[currentPlayer] >= 100) {
    players[currentPlayer].classList.remove('player--active');
    players[currentPlayer].classList.add('player--winner');
  }
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  cambiarColor();
});

botonNew.addEventListener('click', comenzarJuego);
