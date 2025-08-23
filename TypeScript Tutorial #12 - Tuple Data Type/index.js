"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("TypeScript Tutorial #12: Tuple Data Type");
/**
 Tuple Data Type:

1. Tuples are a special type of array in TypeScript that allows us to store a fixed number of elements with different types.

2. In JS there is no concept of tuple, but in TS we can define a tuple with a fixed number of elements and their types.

3. Tuples are defined using square brackets [] and the types of the elements are specified in the order they will appear in the tuple.

4. We can access the elements of a tuple using their index, just like we do with arrays.

5. We can also use destructuring to extract the elements of a tuple into separate variables.

6. Tuples are useful when we want to group related data together, such as a pair of values or a set of coordinates.

7. In general, tuples are immutable, meaning we cannot change the length of the tuple or add/remove elements from it after it has been created, but in TS a tuple can be mutable, meaning we can change the values of the elements in the tuple. If we want to make an actual immutable tuple, we can declare it as a readonly tuple, i.e. readonly [type1, type2, ...].
*/
let user = [
    "Husnayaeen",
    30,
    false,
    "Programmer",
    "Achar Gali",
];
// user = [...user, "Muslim"]; // In TS his will throw an error because we are trying to add an element to the tuple, which is not allowed in TS. But in JS this will work regularly because originlly TS Tuple is actually/originally an array.
console.log("User Tuple:", user);
// But we can alter a tuple through built-in array alterartion methods like, (push, pop, shift, unshift) in TS, this is some kind of nuance but we can bypass it by declaring it as readonly
// Some nuances in TS Tuple.
user.push("muslim"); // Allowed
// We can also change the values of the elements in the tuple.
user[0] = "Husnayaeen Khan"; // Allowed
user[1] = 31; // Allowed
console.log("Updated User Tuple:", user);
// Bypassing TS Tuple'nuance by declaring it as readonly
let readonlyUser = [
    ...user,
];
// Now this tuple can't be altered through array alterartion methods, array alterartion methods doesn't works on readonly array/tuple in TS.
// readonlyUser.pop(); // Not Allowed
// readonlyUser[1] = 30; // Not Allowed
// We can also use destructuring to extract the elements of the tuple into separate variables.
let [name, age, permanent, profession, address] = user;
console.log("Values Destructured from User Tuple:", name, age, permanent, profession, address);
let coordinates2D = [
    [0, 0],
    [1, 2],
    [3, 4],
    [-1, 1],
    [1, -5],
];
console.log(coordinates2D);
// coordinates2D[0] = [0, 0, -1]; This will throw an error, This way we can prevent accidentally ading 3.points in an 2D Coordinates Array and we can define a dimension of the array.
