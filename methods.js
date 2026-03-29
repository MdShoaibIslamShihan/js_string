// ...........length ...........
// It tells you the size/count

let color = ['red', 'green', 'Blue'];
let totalColar = color.length;

console.log(totalColar);        // 3

let name = "Shihan";

console.log(name.length);       // 6

// ...........toUpperCase() ...........
// convert all letters of a string to uppercase (capital letters).

let para1 = "how are you my friend ?";
console.log(para1.toUpperCase());   

// HOW ARE YOU MY FRIEND ?


// ...........toLowerCase() ...........
// convert all letters of a string to lowercase (small letters).

let para2 = "WE ARE DOING WELL";
console.log(para2.toLowerCase());

// we are doing well

// ...........slice ...........
// extract a part of an array (or string) and return it as a new array/string.

const num1 = [11, 12, 13, 14, 15, 16, 17];
console.log(num1.slice(0, 5)); // [ 11, 12, 13, 14, 15 ]

let boy = ['Rumon', 'Abid', 'Mohon', 'Monno'];
console.log(boy.slice(0, 2)); // [ 'Rumon', 'Abid' ]

let str = 'Hi my friend';
console.log(str.slice(1, 9)); // i my fri

// ...........substring ...........
// Negative values become 0

let str2 = "Hello Canada";
console.log(str2.slice(0, 7)); // Hello C

// ...........trim() ...........
// remove whitespace (spaces) from the beginning and end of a string.
// It does NOT remove spaces in the middle

let text = "   Hello World   ";
console.log(text.trim()); // Hello World


// combain methods

let text2 = '     lets do this     ';
let finalText = text2.trim().toUpperCase();

console.log(finalText);

let arr = ['WE', 'CAN', 'DO', 'THIS'];
let finalArr = arr.slice(0, 3);

console.log(finalArr);