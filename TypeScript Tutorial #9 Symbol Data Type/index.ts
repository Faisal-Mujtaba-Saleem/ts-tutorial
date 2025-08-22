console.log("TypeScript Tutorial #9: Symbol Data Type");

var sym1: symbol = Symbol(2005);
var sym2: symbol = Symbol(2005);
// Symbols are unique and immutable, so even if we create two symbols with the same description, they will not be equal.
console.log("sym1 === sym2:", sym1 === sym2); // This will log false because sym1 and sym2 are different symbols, even though they have the same description.

type UserType = {
  name: string;
  age: number;
  [key: symbol]: any;
};

// Practical use case of symbols
const user: UserType = {
  name: "Alice",
  age: 25,
};

console.log("User object:", user);

const pvtId = Symbol("pvtId");
Object.setPrototypeOf(user, {
  [pvtId]: 123,
});
console.log("User object with private property:", {
  ...user,
  privateProperties: Object.getPrototypeOf(user),
});

// console.log(user["Symbol(pvtId)"]); // In TS this will throw an error, but in JS it will log undefined because the property is not enumerable i.e. not visible in the object itself.
console.log(user[pvtId]); // This will log 123 because we are accessing the property using the symbol reference.