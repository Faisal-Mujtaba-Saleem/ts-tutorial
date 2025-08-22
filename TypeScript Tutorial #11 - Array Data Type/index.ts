console.log("TypeScript Tutorial #11: Array Data Type");

// Arrays are the collection of elements of the same type in TS generally but can hold multiple types if explicitly defined.
// There are 2 conventions to define an array in TypeScript:
// 1. Using the type followed by square brackets,
let users: string[] = ["Faiq", "Ali", "Talha", "Hasan"];
let ids: number[] = [1, 2, 3, 4, 5];
// 2. Using the Array generic type,
let students: Array<string> = ["Sohaib", "Huzaifa1", "Huzaifa2", "Saif"];
let marks: Array<number> = [10, 20, 30, 40, 50];

// ReadOnly Arrays and their use case:
marks[0] = 100; // This is valid
console.log("Marks before ReadOnly:", marks);

let finalMarks: ReadonlyArray<number> = [...marks];
// finalMarks[0] = 25; // This will throw an error because finalMarks

console.log("Final Marks after ReadOnly:", finalMarks);
