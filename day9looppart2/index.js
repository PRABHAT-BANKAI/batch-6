let string = "batman";

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}

// *
// **
// ***
// ****
// *****

// *****
// *
// *****
// *
// *****
//row
// for (let i = 0; i < 5; i++) {
//   let str = "*";
//   //column
//   for (let j = 0; j < 5; j++) {
//     if (i == 0) {
//       str += "*";
//     } else if (i == 2) {

//       str += "*";
//     } else if (i == 4) {
//       str += "*";
//     }
//   }

//   console.log(str);
// }

//1
//23
//456
//78910
//1112131415

//prime number (count 2)

let number = 1;
let count = 0;

if (number == 1) {
  console.log("co prime number");
  return;
}
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    count++;
  }
}

// console.log(count);
if (count == 2) {
  console.log("prime number");
} else {
  console.log("not prime number");
}
