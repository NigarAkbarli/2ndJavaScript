//1st
const a = +prompt('Please enter the number:');
for(let counter=1; counter<1000; counter++){

    if(counter%a==0){
        console.log(counter);
    }
}


//2nd
const a1 = +prompt("Please enter the number");
let number = 0;
for (let i = 1; i * i < a1; i++) {
  number = number + 1;
}
console.log(number);


//3rd
const a3 = +prompt("Please enter the number:");
let divisor;
for (let index = 1; index <= a3 / 2; index++) {
  if (a3 % index == 0) {
    divisor = index;
  }
}
console.log(divisor);


//4th
const a4 = +prompt("Please enter the value for a:");
const b4 = +prompt("Please enter the value for b:");
let sum = 0;
for (let n = a4; n < b4; n++) {
  if (n % 7 == 0) {
    sum = sum + n;
  }
}
console.log(sum);


//5th
const num = +prompt("Please enter the positive number:");
let term1 = 1;
let term2 = 1;
let nextTerm;
if (num == 1) {
  console.log(term1);
} else if (num == 2) {
  console.log(term2);
} else {
  for (j = 3; j <= num; j++) {
    nextTerm = term1 + term2;
    term1 = term2;
    term2 = nextTerm;
  }
  console.log(nextTerm);
}


//6th
let a6 = +prompt("Please enter the value for A:");
let b6 = +prompt("Please enter the value for B:");
let remainder;
while (a6 % b6 > 0) {
  remainder = a6 % b6;
  a6 = b6;
  b6 = remainder;
}
console.log(`GCD: ${b6}`);


//7th
let a7 = prompt("Please enter the number:");
console.log(a7)
let mirror = 0;
let r;
while (a7 != 0) {
  r = a7 % 10;
  mirror = mirror * 10 + r;
  a7 = (a7 - r) / 10;
}
console.log(`Mirror image:${mirror}`);


//8th
let a8 = +prompt("Please enter the value for A:");
let b8 = +prompt("Please enter the value for B:");
let ra, rb;
let temp=0;
while(a8 != 0){
  ra = a8 % 10;
  a8 = (a8-ra)/10;
  while(b8 != 0){
    rb = b8 % 10;
    b8 = (b8-rb)/10;
  if(ra==rb){
      temp=1;
      console.log(`YES!`);
    }
}
} 
if(temp==0){
  console.log(`NO!`);
}