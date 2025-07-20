let num = 29;                        // Number
let str = "246";                     // String
let isStudent = true;               // Boolean
let emptyValue = null;              // Null
let notDefined;                     // Undefined
let person = { name: "sathya" };      // Object
let sym = Symbol("id");             // Symbol

console.log("Data Types:");
console.log(typeof num, typeof str, typeof isStudent, typeof emptyValue, typeof notDefined, typeof person, typeof sym);

// Type conversions
let strToNum = Number(str);         
let numToStr = String(num);         

console.log("Converted string to number:", strToNum); 
console.log("Converted number to string:", numToStr); 

// Implicit conversion
console.log("5" * 5);  
console.log("5" + 5);  

