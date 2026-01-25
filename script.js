console.log("JAI SHREE GANESHA \n JAI SHREE SHYAM");

/*console. log("Operators in Js")
let a = 10;
let b = 4;
console. log("a + b = ", a+b)
console. log("a - b = ", a-b)
console. log("a / b =", a/b)
console. log("a ** b = ", a ** b)
console. log("a % b = ", a%b)
console. log("a++ = ", a++)
console. log("a -- = ", a -- )
*/
/*let a = prompt("what is password");
a =Number.parseInt(a)
if(a<0){
    alert("this is valid password")
}
console.log(a);*/
/*let fruitType = "Oranges";

switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");*/
/*let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}*/
/*let num = prompt("write a number ");
if(num %2==0 ){
  console.log("welcome")
}
else{
  console.log("try again")
}*/
/*for(let i =0;i<100;i++){
  console.log("Ravi Repswal")
}*/
// function name(){
//   console.log("ravi repswal");
// }
// name();
/*function sum(x,y){
  s=x+y;
  return s;
}
let v = sum(41,23);
console.log(v);*/

// let students={
//   ravi : 91,
//   vivek : 91,
//   aman : 91,
// }
// for(let marks in students){
//   console.log("marks=",marks);
// }     
// const str = "Saturday night plans";
// console.log(str.startsWith("Sat"));
// console.log(str.endsWith("ans"));
// const str = "my marks are 91";
// let marks = str.slice(12)
// console.log(marks);
// let num=[1,2,3,4,5]
// num.pop();
// console.log(num)
// let num =[155,25,453,44,5];
// num.push(6)
// console.log(num)
// num.shift()
// console.log(num)
// num.sort()
// console.log(num)
/* Map


let a =[1,2,3,4,5];
let b =a.map((value)=>{
  console.log(value)
  return value + 10
})
console.log(b)*/
/*filter


let a = [1,12,34,32,123,33];
let b =a.filter((a)=>{
  return a> 30;
})
console.log(b)*/
/*Reduce
let a  = [1,2,3,4,5,6,7]  
let b = a.reduce((a1,a2)=>{
  return a1+a2;
})
console.log(b)*/

/* create an array of numbers and takea input from the user to add number to this array

let arr =[1,2,3,4,5]
let a = prompt("enter a enter a number")
a =Number.parseInt(a)
arr.push(a)
console.log(arr)*/

/* keep adding numbers to the arrays in 1 until 0 is added to the arrary

let arr =[1,2,3,4,5,6,7,8,9,10,11,22,33,44,55,66,77,88,99,100];
let a ;
do {
  a =prompt("enter a number")
  console.log(arr);
  arr.push(a)
}while(a!=0);
console.log(arr);*/

/* filter for numbers divisble by 10 from a given array

let arr =[1,5,10,20,30,3,9,45,3,24,44,990]
let a =arr.filter((arr)=>{
  return arr%10==0;
})
console.log(a)*/

/*create an array of square of given numbers

let a =[1,2,3,4,5];
let b =a.map((a)=>{
  return a*a
})
console.log(b)*/

/* use reduce to calculate factorial of a given numbers from an arrays of first n natural number (n bring the number whose factorial needs to be cslculated)

let a =[1,2,3,4,5,6]
let b = a.reduce((a1,a2)=>{
  return a1*a2
})
console.log(b)
*/

/* write a javascript program to generate a random number and store it in a variable. the program them takes an input from the user to tell them wherater the guess was correct , greater or lesser than the original number.
100-(no. of gusses) is the score of the user 
the program is expected to terminate once 
the number is glossed . number should be between 1-100
*/

/*let n= 21;
let b=prompt("enter the game number");
while(b!=n){
  b=prompt("enter the game number");
}*/
console.time("forloop")
for (i=0;i>10;i++){
  console.log(4)
}
console.timeEnd("forloop")








