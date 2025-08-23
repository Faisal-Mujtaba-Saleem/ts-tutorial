"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("TypeScript Tutorial #13: Object Data Type");
let user = {
    name: "Husnayaeen",
    age: 31,
    isProgrammer: true,
    company: "MiniMinors",
};
console.log("User Data:", user);
let employee = {
    name: "Husnayaeen",
    age: 31,
    isProgrammer: true,
    company: "MiniMinors",
};
console.log("Employee Data:", employee);
employee.address = {
    street: "Acahar Gali",
    city: "Lahore",
    country: "Pakistan",
}; // Allowed
employee.skills = ["HTML", "CSS", "JavaScript", "React.JS"]; // Allowed
console.log("Updated Employee Data:", employee);
let student = {
    name: "Husnayaeen",
    age: 31,
    address: {
        // flatNo: '1-A', // Not Allowed as this nested <key: value> isn't defined in the StudentType
        street: "Acahar Gali",
        city: "Karachi",
        country: "Pakistan",
    },
    hobbies: ["Reading", "Coding", "Talking"],
    adult: true,
    skills: ["HTML", "CSS", "JavaScript", "React.JS"],
};
console.log("Student Data:", student);
