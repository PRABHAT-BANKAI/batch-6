// // object is non primitive data types which is mean refernce data type

// let userData = {
//   //key("string")   :  value
//   userName: "Batman",
//   age: 55,
//   boolean: true,
// };

// // console.log(`name: ${userData.userName} age: ${userData.age}`);
// // console.log(userData.age);

// console.log(userData["userName"]);

// // dot notation  .data
// // bracket notation  [data]

// let object = {
//   userName: "superman",
// };

// let object2 = object;

// console.log(object == object2);

let student = {
  studentName: "tony stark",
  subjects: ["maths", "english", "physics"],
  showName: function () {
    return "iron man"
  },
};

// console.log(student.studentName)

// console.log(student.subjects.length)

// for(let i=0;i<student.subjects.length;i++){

//   console.log(student.subjects[i])
// }

let array = ["maths", "english", "hindi"];

let subjects = {
  maths: 55,
  english: 44,
  hindi:33
};
let sum =0;

for(let i=0;i<array.length;i++){
sum+=  subjects[array[i]]
}

console.log("sum",sum)




console.log(student.showName())