"use strict";

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.chucknorris.io/jokes/random1");
// xhr.onload = function () {
//   if (xhr.status === 200) {
//     const data = JSON.parse(xhr.responseText);
//     console.log(data.value);
//   } else {
//     console.error("Miraaaa es un error:", xhr.status);
//   }
// };
// xhr.onerror = function () {
//   console.error("Request failed");
// };
// xhr.send();

// const API_URL = "https://jsonplaceholder.typicode.com/users";

// fetch("https://jsonplaceholder.typicode.com/users").then(response => {
//   console.log(response.json());
// });

// fetch(API_URL)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const users = data;
//     console.log("Users:", users);

//     const firstUser = users[0];
//     console.log("First user:", firstUser.name, "-", firstUser.email);
//   });

// const API_URL = "https://jsonplaceholder.typicode.com/users";

// async function getUsers() {
//   const response = await fetch(API_URL);
//   const data = await response.json();
//   return data; //
// }

// getUsers().then(users => {
//   console.log("Users:", users); //
// });

// console.log("Hola mundo");

// const API_URL = "https://api.exchangerate-api.com/v4/latest/SDF"; // example endpoint

// fetch(API_URL)
//   .then(response => {
//     if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
//     return response.json();
//   })
//   .then(data => {
//     const rateUSD = {
//       USD: 1,
//       EUR: data.rates.EUR,
//       COP: data.rates.COP,
//       MXN: data.rates.MXN,
//       ARS: data.rates.ARS,
//       BRL: data.rates.BRL,
//       GBP: data.rates.GBP,
//       JPY: data.rates.JPY,
//     };
//     console.log("Rates:", rateUSD);
//   });

// console.log(rateUSD);

// PUT // PATCH
