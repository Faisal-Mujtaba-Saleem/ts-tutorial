console.log("TypeScript Tutorial #2: Installation & Setup");

/**
TypeScript Installation & Setup:

1. Install Node.js:
   - Download and install Node.js from the official website: https://nodejs.org/.
2. Install TypeScript globally:
   - Open your terminal or command prompt and run the following command:
    ```
    npm install -g typescript
     ```
3. Verify TypeScript installation:
   - Run the following command to check if TypeScript is installed correctly:
    ```
    tsc -v
    ```
4. Create a TypeScript project:
   - Create a new directory for your TypeScript project and navigate to it:
    ```
    mkdir my-ts-project
    cd my-ts-project
    ```
5. Initialize a TypeScript configuration file:
   - Run the following command to create a `tsconfig.json` file:
    ```
    tsc --init
    ```
6. Create a TypeScript file:
   - Create a new file named `index.ts` in your project directory and add some TypeScript code to it, for example:
    ```typescript
    console.log("Hello, TypeScript!");
    ```
7. Compile TypeScript to JavaScript:
   - Run the following command to compile your TypeScript code to JavaScript:
    ```
    tsc index.ts 
        Or
    tsc index.ts --watch, This will watch for changes in the index.ts file and recompile it automatically.
    ```
 */

type User = {
  name: string;
  age: number;
  isActive: boolean;
  hobbies: string[];
  address: string | object;
  greet: Function;
};
var user: User = {
  name: "John Doe",
  age: 30,
  isActive: true,
  hobbies: ["reading", "gaming", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(user);

// user = "This is a string now"; // This will cause a type error in TypeScript
