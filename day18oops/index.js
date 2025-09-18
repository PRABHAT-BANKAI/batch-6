//oops object oriented programming

// 4 pillars
// abstraction
// inherit
// polymorphism
// encapusulation

let object = {
  name: "batman",
};

// factory function

function userData(userName, age, subject) {
  let obj = {};

  obj.userName = userName;
  obj.age = age;
  obj.subject = subject;

  return obj;
}

let elon = userData("elon", 33, "maths");
console.log(elon);
let bill = userData("bill", 22, "science");
console.log(bill);
