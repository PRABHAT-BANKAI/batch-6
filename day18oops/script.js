function UserData(name, subject, age) {
  this.userName = name;
  this.subject = subject;
  this.age = age;
}

let batman = new UserData("batman", "english", 44);
let superman = new UserData("superman","science",22)
console.log(batman);

console.log(superman)




let array = [1,4,1,2,2]
let array2 = [2,3]

console.log(array.map == array2.map)