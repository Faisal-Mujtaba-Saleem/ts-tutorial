"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("TypeScript Tutorial #11: Array Data Type");
/**
 Array Data Type:

1. Arrays are the collection of elements of the same type in TS generally but can hold multiple types if explicitly defined.

2. There are 2 conventions to define an array type in TypeScript:
    a. Using the type followed by square brackets, i.e. <<T>>[],
    b. Using the Array generic type, i.e. Array<T>.

3. ReadOnly Arrays:
    a. We can create ReadOnly arrays in TS using the ReadonlyArray<T> generic type, which prevents modification of the array elements.
    b. This is useful when we want to ensure that the array elements remain unchanged after their initial assignment
*/
// Defining arrays using both conventions:
// 1. Using the type followed by square brackets,
let users = ["Faiq", "Ali", "Talha", "Hasan"];
let ids = [1, 2, 3, 4, 5];
// 2. Using the Array generic type,
let students = ["Sohaib", "Huzaifa1", "Huzaifa2", "Saif"];
let marks = [10, 20, 30, 40, 50];
// ReadOnly Arrays and their use case:
marks[0] = 100; // This is valid
console.log("Marks before ReadOnly:", marks);
let finalMarks = [...marks];
// finalMarks[0] = 25; // This will throw an error because finalMarks
console.log("Final Marks after ReadOnly:", finalMarks);
