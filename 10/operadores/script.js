"use strict";

const posts1 = [{ title: "Hola mundo" }, { title: "Destructuring FTW" }];
const posts2 = [];

let [{ title: newTitle } = {}] = posts1;
console.log(newTitle);
[{ title: newTitle } = {}] = posts2;
console.log(newTitle);
