// 	Array With Functions (map ,filter, foreach, indexof, findindex ,includes, every, some)

//HOF (high order function ) where function passing as a argument

let array = [12,12,1,2 ,55 ,23, 55, 66, 7];

// let result = array.map((element, index) => {
//   // new array
//   // update new array
//   // return new array

//   return element * 2 + " " + index;
// });

// console.log(result);

// let filterValue = array.filter((item) => {
//   return item <= 12; // true
// });

// console.log(filterValue);

// let result2 = array.indexOf(55);
// console.log(result2);


// let result3 = array.findIndex((item)=>{

//   return item > 12
// })
// console.log(result3)


// let string = "batman"


// let result4 = string.includes("man")
// console.log(result4)


// let result5 = array.some((item)=>{
//   return  item == 55
// })
let result5 = array.every((item)=>{
  return  item == 55
})


console.log(result5)