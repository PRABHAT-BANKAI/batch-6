// with Logical Operators

let userEmail = "asd@gmail.com";
let password = "12345";

if (userEmail === "asd@gmail.co" && password === "12345") {
  console.log("login successfull");
} else {
  console.log("incorrect credentials ");
}

let value = 450;

if (value > 500 && value < 800) {
  console.log("value is between 500 to 800");
} else if (value > 400 && value < 500) {
  console.log("value is between 400 to 500");
} else {
  console.log("value is less than 400");
}
