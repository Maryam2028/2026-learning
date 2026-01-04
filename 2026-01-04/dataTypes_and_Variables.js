
// Variables
// let, const, var
let name = "Maryam"
console.log(name);
name = "Rani"
console.log(name);

const pi = 3.14
console.log(`The Value of PI is ${pi}`);

// Data Types


// Primitive Data Types
let userName = "Maryam Developer"; // string
let userAge = 23; // Number
let userLogIn = true // Boolean

let contactNo; // undefined
let email = null // Null

let BigNo = 2324235325n // BigInt
let id = Symbol('id'); // Symbol

// Non Primitive Data Type

let myArr = [2, 4, 6, 7, 10]; // Array

let myObj = {
    name : "Maryam Dev",
    email : "maryamdev@gmail.com",
    pass : "m@3648"
} // Object

function myFun(){
    console.log("I am a Winner of My life.");
    
}  // Function

console.table([userName, userAge, userLogIn, contactNo, email, BigNo, id, myArr, myObj, myFun()]);

console.log(typeof(userName));

console.log(typeof(userAge));

console.log(typeof(userLogIn));

console.log(typeof(contactNo));

console.log(typeof(email));

console.log(typeof(BigNo));

console.log(typeof(id));

console.log(typeof(myArr));

console.log(typeof(myObj));

console.log(typeof(myFun));