let des = "My Name is Maryam and I'm from Gujranwala."

console.log(des);

let name = "Maryam"
let city = "Gujranwala"


// Properties and Methods


console.log(des.length); // find lenght
console.log(des.toUpperCase()); // convert to Upper Case
console.log(des.toLowerCase()); // convert all into Lower Case

console.log(city.indexOf('w')); // find index of any letter 

console.log(city.charAt(2)); // index dete hen us ka character return karta hai


console.log(des.slice(4, 10));  // slice mai 2 hise hote hen start node and end node. starting or ending point lehkte hen slice utna hisa sirf print krta hai.


console.log(des.trim()); // extra spaces remove krta hai


console.log(city.replace('Gujranwala', 'Lahore'));  

console.log(des.includes("Maryam")); // true or false mai answer deta hai. koi b word search krna ho k wo is mai hai k ni. us ley use hota hai!


// template litterals

console.log(`Please Confirmed Your Information. Your name ${name} and your city ${city}`);
