// try catch (helps error handling  and dont block the running code )

// console.log(1);
// console.log(2);
// try {
//   console.log(3);
// } catch (error) {
//   console.log(error);
// }
// console.log(4);
// console.log(5);

let number = 5;
try {
  if (number % 2 == 0) {
    console.log("even");
  } else {
    throw "odd";
  }
} catch (error) {
  console.log(error ,"error");
}
