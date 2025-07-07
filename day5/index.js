// // Arithmetic operators + * - /  **    (%=modules) return remainder
// // Assignment operators // =  += -=  *= /=  **=
// // Comparison operators// < > <= >= == === != !==
// // Logical operators// && and   || OR
// // conversion with console.log and innerHTML // conversion how to convert data type

// let a = 5
// let b = 11

// let result = a+b
// console.log(result)
// console.log(a*b)
// console.log(a-b)
// console.log(b/a)
// console.log(b%a)

// //exponentation
// console.log(a**3)

// let num1 = 10;

// // num1 = num1 +5

// num1 += 5;

// console.log(num1);

// console.log(5 < 2);
// console.log(5 > 2);
// console.log(1 <= 5);
// console.log(10 >= 5);

// console.log(10 == "10")
// console.log(10 === "10")// strickly check => datatype check and value check
// console.log(10 === 10)

// console.log(9 != 10)
// console.log(9 !== "10")

//&& operator(and) return false

// console.log(0 && 5 > 1 && 6 > 1 && 75);// 0 as false // true with all numerical value without zero 

//|| operator (or) return true

console.log(0 ||  55 || 5 > 1 || 6 > 1 || 75)




//implicit      "coercion"   js handle by own with use implicit 
// explicit     "conversion"  // as user i convert data types manually

console.log(12+"1")// concatenate
console.log(12-"1")



let number = "12"
console.log(typeof number)
let result = Number(number)
console.log(result)