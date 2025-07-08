//if else (condition statment)

// let a = 5;
// let b = 2;

// if (a < b) {
//   console.log("a is greather than  b");
// } else {
//   console.log("a is not greather than b ");
// }

// let english = 45
// let maths = 55

// let css = 55

// let total = english + maths+ css

// let average = total / 3
// console.log(average)

// let a = 10;

// let b = 5;

// a = a + b;

// b = a - b;
// a = a - b;

// let temp = a

// a = b

// b = temp

// let number  = 23

// if(number%2 == 0){
//   console.log("even")
// }else{
//   console.log("odd")
// }

// let userName = "superman";
// let password = "12345";

// if (userName === "superman") {
//   if (password === "12345") {
//     console.log("login succesfully");
//   } else {
//     console.log("password is not correct ");
//   }
// } else {
//   console.log("userName is not correct ");
// }

let a = 55;
let b = 115;
let c = 239;

// nested if else
if (a > b) {
  if (a > c) {
    console.log("a is maximum");
  } else {
    console.log("c is maximum");
  }
} else {
  if (b > c) {
    console.log("b is maximum");
  } else {
    console.log("c is maximum");
  }
}

// if else  ladder

let light = "red";

if (light == "red") {
  console.log("stop");
} else if (light == "red") {
  console.log("slow down");
} else if (light == "green") {
  console.log("Go");
} else {
  console.log("Invalid light");
}

let budget = 10000;

if (budget >= 10000) {
  console.log("goa");
} else if (budget >= 8000) {
  console.log("aabu");
} else if (budget >= 5000) {
  console.log("girnaar");
} else if (budget >= 2000) {
  console.log("dominoz");
} else if (budget >= 500) {
  console.log("stay at home");
}
else{
  console.log("no any plans")
}
