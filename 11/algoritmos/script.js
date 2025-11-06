"use strict";

// RANDOMIZATION - SHUFFLING

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);
// // 1- Fisher-Yates shuffle
function shuffleFY(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1)); // Math.trunc
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleFY(array) {
  const newArray = [...array];
  for (let i = 0; i < newArray.length; i++) {
    const j = Math.floor(Math.random() * (i + 1)); // Math.trunc
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// console.log(shuffleFY(array));
// console.log(array);

// 2- Random index selection
function shuffleRIS(array) {
  const copy = [...array];
  const shuffled = [];

  while (copy.length) {
    const i = Math.floor(Math.random() * copy.length);
    const numeroAReemplazar = copy.splice(i, 1)[0];
    shuffled.push(numeroAReemplazar);
  }
  return shuffled;
}

// console.log(shuffleRIS(array));

// let tarjetasConocidas = [4, 5];
// console.log(tarjetasConocidas);
// function shuffleRIS(array) {
//   const copy = [...array];
//   const shuffled = [];

//   while (copy.length) {
//     const i = Math.floor(Math.random() * copy.length);
//     const numeroAReemplazar = copy.splice(i, 1)[0];
//     shuffled.push(numeroAReemplazar);
//     if (tarjetasConocidas.includes(numeroAReemplazar)) {
//       tarjetasConocidas[tarjetasConocidas.indexOf(numeroAReemplazar)] =
//         shuffled.indexOf(numeroAReemplazar);
//     }
//   }
//   return shuffled;
// }

// const shuffledArray = shuffleRIS(array);
// console.log(shuffledArray);
// console.log(tarjetasConocidas);
