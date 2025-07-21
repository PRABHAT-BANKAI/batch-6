// nested functions Closure concepts variables as a function arrow function IIFE

// function show() {
//   console.log("show");
//   inner();
// }

// show();

// function inner() {
//   console.log("inner");
// }

// closure concept
// function outer() {
//   let a = 12;
//   let b = 5;
//   console.log("outer ");
//   function inner() {
//     // lexical environment
//     console.log("inner");
//     console.log(a + b);
//   }

//   return inner;
// }

// let inner = outer();

// inner();

// let sum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(sum(12, 44))
//   //IIFE(Immediately Invoked Function Expression)

(() => {
  console.log("iife");
})();
