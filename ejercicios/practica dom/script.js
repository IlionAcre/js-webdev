"use strict";

const amount = document.getElementById("amount");
const convertButton = document.getElementById("convert");
const titulo = document.querySelector("h1");

convertButton.addEventListener("click", () => {
  console.log(amount.value);
});
