var user = {
    name: "John Doe",
    age: 30,
    isActive: true,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    greet: function () {
        console.log("Hello, my name is ".concat(this.name));
    }
};
console.log(user);
// user = "This is a string now"; // This will cause a type error in TypeScript
