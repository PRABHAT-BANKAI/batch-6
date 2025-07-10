//loop

//for loop

// for(initialization;condition;inc,dec){

// }

// console.log(1)
// console.log(2)
// console.log(3)

for (let i = 1; i <= 100; i++) {
  // console.log(i)
  if (i % 2 == 1) {
    console.log("odd is", i);
  } else {
    console.log("even is ", i);
  }
}

for (let j = 100; j >= 1; j--) {
  console.log(j);
}

//while

//syntax

//intialization
// condtion
// inc/dec

let k = 1;
let g = 10;

while (k <= 10 && g >= 1) {
  console.log(k, g);
  k++;
  g--;
}



// do while

// execution
// condition check
// inc/dec

//12345678910

let t = 0
let str  = ""
do{
str += t
  t++
}while(t<=10)

  console.log(str)
