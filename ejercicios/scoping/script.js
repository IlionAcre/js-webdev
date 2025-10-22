"use strict";

// let a = 1;

// function f() {
//   let a = 2;
//   if (a === 2) {
//     var b = 3;
//   }
//   function g() {
//     let b = 4;
//     b + 4;
//     if (b === 4) {
//       const c = 5;
//     }
//     console.log(c);
//   }
//   g();
// }
// f();

// var x = 1;
// {
//   let x = 2;
//   x = 3;
// }
// console.log(x);

// let msg = "afuera";
// function f() {
//   let msg = "adentro";
//   return msg;
// }
// console.log(msg);
// console.log(f());

// var n = 5;
// if (true) {
//   var n = 10;
// }
// console.log(n);

// let n = 5;
// if (true) {
//   let n = 10;
// }
// console.log(n);

// HOISTING
// console.log(a);
// var a = 7;

// TDZ - Zona temporal muerta
// 'use strict';
// console.log(b);
// let b = 3;

// const v = "externo";
// function g(v) {
//   return v.toUpperCase();
// }
// console.log(g("interno"));
// console.log(v);

// const user = { name: "Ada" };
// {
//   const user = { name: "Linus" };
//   user.name = "Grace";
//   console.log(user.name);
// }
// console.log(user.name);

// var out = [];
// for (var i = 0; i < 3; i++) {
//   out.push(() => i);
// }
// console.log(i);
// console.log(out[0](), out[1](), out[2]());

// let out = [];
// for (let i = 0; i < 3; i++) {
//   out.push(() => i);
// }
// console.log(out[0](), out[1](), out[2]());

// for (var i = 1; i <= 2; i++) {
//   setTimeout(() => console.log("var:", i), 0);
// }
// for (let j = 1; j <= 2; j++) {
//   setTimeout(() => console.log("let:", j), 0);
// }

// function h() {
//   x = 42; //
// }
// h();
// console.log(typeof x, x);
