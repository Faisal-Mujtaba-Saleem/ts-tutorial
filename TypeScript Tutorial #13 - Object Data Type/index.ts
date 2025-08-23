console.log("TypeScript Tutorial #13: Object Data Type");

/**
 Object Data Type:
 
 1. Objects are the collection of key-value pairs and it can hold multiple types of values.

 2. In TS, if you define an object type, then every key and its corresponding value in the object must strictly follow that predefined type structure..

 3. Object DataType is defined with the curly braces.
*/
type UserType = {
  name: string;
  age: number;
  isProgrammer: boolean;
};

let user = {
  name: "Husnayaeen",
  age: 31,
  isProgrammer: true,
  company: "MiniMinors",
};

console.log("User Data:", user);

// user.age = "Thirty One"; // Not allowed as we have defined a number type for age.

// user.address = "Acahar Gali"; // Can't do that because this <key: value> is not defined in the UserType. The solution is to use a generic object type.

// Generic Object Type:

type EmployeeType = {
  [key: string]: string | number | boolean | object | Array<unknown>;
};

let employee: EmployeeType = {
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

// Defining Nested Object Types:
type StudentType = {
    name: string,
    age: number,
    address: {
        street: string,
        city: string,
        country: string,
    },
    hobbies: string[],
    adult: boolean,
    skills: string[],
}

let student:StudentType = {
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
}

console.log("Student Data:", student);
