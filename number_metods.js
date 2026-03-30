// ....... toFixed() .......
// used to round a number to a specified number of decimal places.

let num1 = 3.59462
console.log(num1.toFixed(2));   // 3.59

console.log(num1.toFixed(4));   // 3.5946

console.log(num1.toFixed(0));   // 4

let price = 40;
console.log(price.toFixed(2));  // 40.00

// ....... parseInt() .......
// used to convert a string into an integer (whole number).


let sub1 = '3339';
console.log("convert a string into an integer: ",parseInt(sub1));    // 3339

let sub2 = "65px";
console.log(parseInt(sub2));    // 65

let sub3 = "dolby33";
console.log(parseInt(sub3));    // NaN [not a number]

// Radix
// Radix means the base of a number system.

// Binary to Decimal 

let binaryNumber = '1110';
let decimalValue = parseInt(binaryNumber, 2);
console.log(decimalValue);

// Decimal 

let age = "21";
let decimalValueOfAge = parseInt(age, 10);
console.log(decimalValueOfAge);

// Hexadecimal to Decimal 

let HexaValue = "FF";
let decimal = parseInt(HexaValue, 16);
console.log(decimal);

// .......ParseFloat() .......
// convert a string into a floating-point number (decimal number).

/*
Note:
1. parseInt() cut Decimal number
2. It supports a single decimal number
3. toFixed() return string, not number
*/

console.log(parseFloat('10'));          // 10
console.log(parseFloat('10.5'));        // 10.5
console.log(parseFloat('10.7xyz'));     // 10.7
console.log(parseFloat("mnop4.5"));     // NaN