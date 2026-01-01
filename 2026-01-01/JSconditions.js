// if else example

let age = 78

if (age >= 18) {
    console.log("You are Eligible for Vote!");
    
}else{
    console.log("You are not eligible for Vote!"); 
}

// if else if example

let marks = 20

if (marks >= 80) {
    console.log("Your Grade: A");
}else if (marks >= 70) {
    console.log("Your Grade: B");
}else if (marks >= 50) {
    console.log("Your Grade : C");
}else if(marks >= 40) {
    console.log("Your Grade: F");  
}else{
    console.log("invalid Input");
}

// Switch Statement Example

let fruit = "Cherry"

switch (fruit) {
    case "banana":
        console.log(`Price of ${fruit} is 366 per dozen`);
        break;
    case "orange":
        console.log(`Price of ${fruit} is 288`);
        break;
    case "mango":
        console.log(`Price of ${fruit} is 500.`);
        break; 

    default:
        console.log(`Don't have this fruit ${fruit}`);
        
        break;
}

let day = 8

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Input");
        
        break;
}

let newAge = 18
console.log((newAge >= 18 ? "You are eligible for Vote" : "You are not eligible"));

let myName = "Stranger"
let final = (myName == "Stranger" ? "Congratulations! You win" : "Sorry! NExt Time")

console.log(final);

if (2 === 3) {
    console.log("Equals");
}else if(2 !== 3){
    console.log("Not Equals");
}else{
    console.log("don't Understand the Logic!");
    
}

if (!(2 == 2 && 2 == 2)) {
    console.log("Correct Operation");
}else if(2 == 4 || 2 != 2){
    console.log("Incorrect Operation");
}else{
    console.log("Invalid Input");
    
}

let gh;
let hg = "Missing"

let result = gh ?? hg

console.log(result);
