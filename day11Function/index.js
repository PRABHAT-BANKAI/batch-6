// parameters Function (with Arguments) Return type in function switch programs

// function sum(a, b) {
//   // parameters where you have put any name of variable

//   return a - b;
// }

// let store = sum(12, 5); // arguments
// console.log(store);

// console.log(sum(5, 10));
// let num1 = 55;
// let num2 = 2;

// let multi = (a, b) => a * b;

// console.log(multi(num1, num2));

function showFruit(fruit) {
  switch (fruit) {
    case "oranges":
      console.log("oranges are good");
      break;

    case "grapes":
      console.log("graps are good");
      break;

    case "apple":
      console.log("apple is good");
      break;
   
      console.log("fruit is not found");
  }
}

showFruit("kiwi");
