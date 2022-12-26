"use strict";
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const score0 = document.getElementById("score0");
const score1 = document.getElementById("score1");
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const player1name = prompt("Enter player1 name");
const player2name = prompt("Enter player2 name ");
document.querySelector(".player1name").textContent = player1name.toUpperCase();
document.querySelector(".player2name").textContent = player2name.toUpperCase();
let current = 0;
let score = [0, 0];
let activePlayer = 0;
document.querySelector(".img").classList.add("hidden");

const switchPlayer = function () {
  player0.classList.remove("player--active");
  player1.classList.remove("player--active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document
    .querySelector(`.player${activePlayer}`)
    .classList.add("player--active");
  console.log(`active${activePlayer}`);
};
btnRoll.addEventListener("click", function () {
  document.querySelector(".img").classList.remove("hidden");
  let dice = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(".img").src = `img/dice-${dice}.png`;
  if (dice !== 1) {
    current += dice;
    document.getElementById(`current${activePlayer}`).textContent = current;
  } else {
    document.getElementById(`current${activePlayer}`).textContent = 0;
    current = 0;
    switchPlayer();
  }
});
btnHold.addEventListener("click", function () {
  score[activePlayer] += current;
  if (score[activePlayer] < 100) {
    current = 0;
    document.getElementById(`score${activePlayer}`).textContent =
      score[activePlayer];
    document.getElementById(`current${activePlayer}`).textContent = 0;
    switchPlayer();
  } else {
    document.getElementById(`current${activePlayer}`).textContent = 0;
    document.getElementById(`score${activePlayer}`).textContent =
      score[activePlayer];

    document.querySelector(`.player${activePlayer}`).classList.add("win");
    document.querySelector(`.winner${activePlayer}`).classList.remove("hidden");
    btnHold.classList.add("hidden");
    btnRoll.classList.add("hidden");
  }
});
btnNew.addEventListener("click", function () {
  document.querySelector(`.player${activePlayer}`).classList.remove("win");
  document.querySelector(`.winner${activePlayer}`).classList.add("hidden");
  btnHold.classList.remove("hidden");
  btnRoll.classList.remove("hidden");
  current = 0;
  score = [0, 0];
  activePlayer = 0;
  player1.classList.remove("player--active");
  player0.classList.add("player--active");
  score0.textContent = 0;
  score1.textContent = 0;
  document.querySelector(".img").classList.add("hidden");
});
