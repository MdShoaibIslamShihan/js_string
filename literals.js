// Template literals are a way to create strings using backticks ( ) instead of quotes.

let name = "Jonathon"
let status = "alive"
let mission = `Herer is ${name}, who is still ${status}`;

console.log(mission);
// Herer is Jonathon, who is still alive

// Variable inside string (Interpolation)
// ${} দিয়ে variable বা expression use করা যায়

let a = 6;
let b = 3;

console.log(`The sum is: ${a + b}`);
//The sum is: 9

// Multi-line string

let text = `This is line 1
This is line 2`;

console.log(text);
/*
This is line 1
This is line 2
*/

