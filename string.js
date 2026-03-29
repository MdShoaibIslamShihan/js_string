// string declaration

let str1 = 'Hello my friend';   // single quote
let str2 = "Hellow my friend";  // double quote
let str3 = `hello my friend`    // backtic

// backtic (``) it's called template literal, variable embed here

/*  ... String literals ...  */

let name = 'Kanon';
let age = 35;

// normal string

let str4 = 'my name is ' + name + 'and I am ' + age + ' years old';

// template literal 

let str5 = `my name is ${name} and I am ${age} years old`;

console.log(str5);

// escape character
// using double quotes with escape character

let str6 = "she said, \"javasctipt is fun!\"";
console.log(str6);

// using bactick (template literal)

let str7 = `she said, "javascript is fun!"`
console.log(str7);

// multiple line string

let poem = `I found a quiet in your eyes,
A place where all my chaos dies,
Where time slows down and hearts align,
And somehow, your world becomes mine.`;

console.log(poem);