// ........ math.round() ........

let num1 = 6.67;
let finalNum1 = Math.round(num1);
console.log(finalNum1);         // 7

let num2 = 3.49;
let finalNum2 = Math.round(num2);
console.log(finalNum2);         // 3

// ........ math.random() ........

// give a random number from 0 to 1
console.log(Math.random());

// give a random number from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// give a random number from 1 to 20 
console.log(Math.floor(Math.random() * 20) + 1);

// ........ math.max() ........

let call = 40;
let call2 = 8;
let call3 = 12;
console.log(Math.max(call, call2, call3));      // 40

let arrayOfNumber = [33, 17, 3, 0.66, 37];
console.log(Math.max(...arrayOfNumber));        // 37


// ........ math.min() ........

const call4 = [0.3, 12, 334, 55, 10];
console.log(Math.min(...call4));                // 0.3

let no1 = 101;
let no2 = 53;
let no3 = 29;
let no4 = 76;

console.log(Math.min(no1, no2, no3, no4));      // 29

// ........ math.ceil() ........

let no5 = 4.01;
console.log(Math.ceil(no5));                    // 5

// ........ math.floor() ........

let no6 = 6.99;
console.log(Math.floor(no6));                   // 6

// ........ math.abs() ........
// used to return the absolute (positive) value of a number.

let no7 = -5;
console.log(Math.abs(no7));                     // 5