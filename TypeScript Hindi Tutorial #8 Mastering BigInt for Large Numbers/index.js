"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("BigInt in TypeScript");
// The BigInt Data Type comes in handy when dealing with large pos. / neg integers that exceed the limits of the standard number type in JavaScript/TypeScript.
// The maximum/minimum safe integer in JS/TS is -/+(2^53 -1), which is approximately ±9.007 x 10^15, which is equals to ±9007199254740991.
// Maximum safe integer in JavaScript
const maxSafeInteger = Number.MAX_SAFE_INTEGER;
const minSafeInteger = Number.MIN_SAFE_INTEGER;
// Logging the maximum and minimum safe integers
console.log("Max Safe Integer:", maxSafeInteger);
console.log("Min Safe Integer:", minSafeInteger);
// Demonstrating the use of BigInt for large integers
let x = 1;
let y = -1;
// Logging the values of x and y
console.log(`x: ${x}, y: ${y}`);
// Logging the values of x and y summed with max/min safe integers
console.log("Max Safe Integer + x:", maxSafeInteger + x);
console.log("Min Safe Integer + y:", minSafeInteger + y);
x = 2;
y = -2;
// Logging the updated values of x and y
console.log(`Updated x: ${x}, Updated y: ${y}`);
// Logging the updated values of x and y summed with max/min safe integers
console.log("Max Safe Integer + updated x:", maxSafeInteger + x);
console.log("Min Safe Integer + updated y:", minSafeInteger + y);
// You will notice that the addition of x and y to the max/min safe integers does not cause any issues, as they are still within the safe range: 1, but when we increase the values of x and y to 2, the addition of these values to the max/min safe integers will cause an overflow, leading to incorrect results.
// To handle such large integers, we can use BigInt, which allows us to work with integers larger than the safe limits of the standard number type.
// Converting x and y to BigInt
let bigIntX = BigInt(x);
let bigIntY = BigInt(y);
// Logging the BigInt values
console.log(`BigInt x: ${bigIntX}, BigInt y: ${bigIntY}`);
// Adding BigInt values to max/min safe integers, but directly adding BigInt & Number as below will throw an error in both the JS/TS because they are different types and we can't mix it.
// console.log(`Max Safe Integer + BigInt x: ${maxSafeInteger + bigIntX}`);
// console.log(`Min Safe Integer + BigInt y: ${minSafeInteger + bigIntY}`);
// To add BigInt values to max/min safe integers, we need to convert the max/min safe integers to BigInt as well.
console.log(`Max Safe Integer in BigInt + BigInt x: ${BigInt(maxSafeInteger) + bigIntX}`);
console.log(`Min Safe Integer in BigInt + BigInt y: ${BigInt(minSafeInteger) + bigIntY}`);
// We can also convert also convert a Number into BigInt by fixing 'n' at the end of the number.
// Example of BigInt from Number with 'n'
const bigIntFromNumber_n = 1234567890123456789012345678901234567890n; // Note the 'n' at the end
// Logging the BigInt from Number attached with 'n' 
console.log(`bigIntFromNumber_n ${bigIntFromNumber_n}, type of bigIntFromNumber_n: ${typeof bigIntFromNumber_n}`);
