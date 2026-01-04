let num1 = 23
let num2 = 32

// let result = console.log(num1 + num1)

console.log(typeof(num1));

console.log(typeof(num1.toString())); // Number ko String mai convert keya jata hai

num1 = 99.789909
console.log(num1.toFixed(2)); // number ko n decimal places tak round krta hai

let str = "200"
console.log(parseInt(str));   //String ko integer mai convert karta hai.

/*
Function	Use	Example
Math.round(num)	nearest integer	---->  Math.round(4.6) → 5
Math.floor(num)	round down	-------->  Math.floor(4.9) → 4
Math.ceil(num)	round up	-------->  Math.ceil(4.1) → 5
Math.sqrt(num)	square root	-------->  Math.sqrt(9) → 3
Math.pow(a,b)	power	------------>  Math.pow(2,3) → 8
Math.abs(num)	absolute value	---->  Math.abs(-5) → 5
Math.random()	random 0–1	-------->  Math.random() → 0.1234…

*/