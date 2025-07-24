// // // Array With Functions Push ,Pop, shift, unshifts, Splice string function

// // let array = [12, 42, 55, 77];

// // let value = array.push(99);

// // console.log(array);
// // console.log(value);

// // let value2 = array.pop();

// // console.log(value2);
// // console.log(array);

// // let temp = array.shift()
// // console.log(temp)
// // console.log(array)

// // let temp2 = array.unshift(88)
// // console.log(temp2)

// // console.log(array)

// let array = [122, 5, 1, 22, 66, 89, 86, 32, 1]; // array is collection of multiple datatypes

// console.log(array.length);

// //splice

// let store = array.splice(3, 2, "batman", 24, "superman", "heman"); // 1st argument for start number, 2nd argument for remove number , third argument for adding numbers

// console.log(store);

// console.log(array); // splice have power to manipulate original array

// /// slice  works in   array and string

// let bakery = ["c", "a", "k", "e"];//"cake"

// let sliceStore = bakery.slice(1, 3);
// console.log(sliceStore);

// console.log(bakery); // cannot changes in array

// Array With Functions (map ,filter, foreach, indexof, findindex ,includes, every, some)
// HOF(high order function )

function sum(a, b) {
  return a + b;
}

function show(add) {
  return 12 + add(5, 4);
}

console.log(show(sum));

let array = [1, 2, 3, 4, 5, 6, 7, 8];
//array.map() inertnally create new array then update new array and return new array with update

let result = array.map((element) => {
  return element * 2;
});

console.log(result);

array.forEach((item) => {
  console.log(item);
});
