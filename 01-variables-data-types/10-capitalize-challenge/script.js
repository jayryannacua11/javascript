// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

let myNewString;

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);

// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// What if the last letter
// myNewString = myString.slice(0, -1) + myString[myString.length - 1].toUpperCase;
myNewString = myString.substring(0, myString.length - 1) + myString[myString.length - 1].toUpperCase();

console.log(myNewString);