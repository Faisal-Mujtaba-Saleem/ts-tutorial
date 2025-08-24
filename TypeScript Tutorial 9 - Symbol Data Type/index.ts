console.log("TypeScript Tutorial #9: Symbol Data Type");

/*
 Symbol Data Type:

 1. The Symbol Data Type is a primitive data type introduced in ES6 (ECMAScript).

 2. Symbols are unique and immutable identifiers that can be used as keys for object properties.

 3. Symbols are unique and immutable, so even if we create two symbols with the same description, they will not be equal.
 
 4. They are created using the Symbol() function, which takes an optional description as an argument.
*/

// Creating symbols
// Each time you create a symbol, even with the same description, it will be unique.
var sym1: symbol = Symbol(2005);
var sym2: symbol = Symbol(2005);

// Logging the symbols
console.log("sym1 === sym2:", sym1 === sym2); // This will log false because sym1 and sym2 are different symbols, even though they have the same description.

// Defining a type with symbol properties
type UserType = {
  name: string;
  age: number;
  [key: symbol]: any;
};

// Practical use case of symbols

// Creating a simple user object.
const user: UserType = {
  name: "Alice",
  age: 25,
};

// Logging the user object
console.log("User object:", user);

// Adding a private property to the user object using a symbol that can't be accessed directly especially outside the codebase.
const pvtId = Symbol("pvtId");
Object.setPrototypeOf(user, {
  [pvtId]: 123,
});
// Logging the user object with the private property
console.log("User object with private property:", {
  ...user,
  privateProperties: Object.getPrototypeOf(user),
});

// console.log(user["Symbol(pvtId)"]); // In TS this will throw an error, but in JS it will log undefined because the property is not enumerable i.e. not visible in the object itself.
console.log(user[pvtId]); // This will log 123 because we are accessing the property using the symbol reference.
