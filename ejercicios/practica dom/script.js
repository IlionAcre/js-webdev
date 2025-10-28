"use strict";

const rateUSD = {
  USD: 1,
  EUR: 0.92,
  COP: 4100,
  MXN: 18.0,
  ARS: 980,
  BRL: 5.6,
  GBP: 0.78,
  JPY: 151.0,
};

const amount = document.getElementById("amount");
const convertButton = document.getElementById("convert");
const titulo = document.querySelector("h1");

convertButton.addEventListener("click", () => {
  console.log(amount.value);
});
