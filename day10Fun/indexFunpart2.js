//FUNCTION WITH FOUR WAYS

// normal function

show();
function show() {
  console.log("show");
}
show();

//vairable function

// print() Cannot access 'print' before initialization

let print = function () {
  // anonymous function
  console.log("print");
};

print();

let fun = () => {
  // anonymous function
  console.log("arrow function");
};

fun();

// arrow function short cuts   where we dont need  return function

let sum = (a, b) => a + b;

console.log(sum(12, 3));
