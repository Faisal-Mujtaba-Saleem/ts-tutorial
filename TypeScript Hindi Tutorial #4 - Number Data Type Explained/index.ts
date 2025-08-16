var num1:number = 12;
var num1:number = 12.5;

var num2:number = 20; // Changing this variable's declaration keyword to let or const, i.e. let/const num2:number = 20; can cause a redeclaration error in TypeScript because this variable saves in index.js after transpiling from here, i.e. index.ts and it takes the whole dir or both index.js & index.ts as a single file. To resolve this we have to do some changes in tsconfig.json file which will be discussed in another tutorial.

var num_:number = 10;
var num_str:string = "10";

// var total:number = num_ + num_str; // This will give an error in TS because num_ is a number and num_str is a string, so they cannot be added directly. TypeScript enforces type safety.

var total:number = num_ + Number(num_str); // This will convert num_str to a number before adding, resolving the type mismatch. We can also use the unary plus/unary minus operator to convert a string to a pos./neg. number, like this: var total:number = num_ + +num_str; / var total:number = num_ + -num_str This will also work and is a common shorthand in JavaScript and TypeScript.

console.log("Total: ", total); 

var infer_var = 10; // TypeScript infers the type as number but the problem in such variable declaration in TS is that when we the value is comming from an API or some other source, it may not always be a number. So, it's better to explicitly declare the type. Some times we want to give flexibility to the variable to hold any type of the given types, in that case we can use union type like this:
var age:number | string = '1'; // This variable can hold either a number or a string. This type is called union type in TypeScript. It is useful in scenarios like suppose we are taking an from user for his age it will be in the form of str initially afterwards we can parse it into num Or the user can also inputs age in words instead of figs.

// In TS, we can't write numbers with leading zeros, like 0123, because it is considered an octal number. If you want to write a number with leading zeros, you can use a string instead, like "0123". However, if you want to represent a number with leading zeros in a way that TypeScript understands, you can use the following syntax:
var leading0Numbers:number = 0o123 // This is an octal number in TypeScript, which is represented with a leading zero and the letter 'o'. 

// decimail numbers can be represented in TypeScript using the following syntax:
var decimalNum:number = 0.123; // This is a decimal number in TypeScript

// hexadecimal numbers can be represented in TypeScript using the following syntax:
var hexDecNum:number = 0x123 // This is a hexadecimal number in TypeScript

// binary numbers can be represented in TypeScript using the following syntax:
var binaryNum: number = 0b001; // This is a binary number in Type
