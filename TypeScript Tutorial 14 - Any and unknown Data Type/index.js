"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("TypeScript Tutorial #14: Any and Unknown Data Type");
/**
 Any and Unknown Data Type:
    Any and unknown are data types in TypeScript that allow you to work with values of any type but they have some differences.

    1. Any:
        a. Any is a type that allows you to assign any value to a variable, regardless of its type.
        b. It disables type checking, meaning you can assign any value to a variable of type any.
        c. It's useful when you aren't sure what type of a value would be assigned to a variable.
        d. It's unsafe and should be avoided because it disables type safety in your code totally.

    2. Unknown:
        a. Unknown is a type that allows you to assign values of any type to a variable.
        b. It disables type checking, temporarily, but it enforces you to check the type of the value before using it.
        c. It's useful when you aren't sure what type of a value would be assigned to a variable.
        d. It's safer and better to use it instead of any because it doesn't disable type safety in your code completely, rather it enforces you to check the type before using it.
 */
let book = '{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","year":1925,"genre":"Classic","rating":4.5,"desc":"A classic novel about the American Dream","price":9.99,"isAvailable":true}';
// suppose the json string is comming from an api now we have to parse it and use it as an object but TS has inferred the type as string so it will not allow us to use it as an object, i.e. accessing its properties even if we have parsed in an object.
book = JSON.parse(book);
// const { title, author, year, genre, rating, desc, price, isAvailable } = book; // Not Allowed, Because it has inferred the type as string. So here we have to use any type to allow us to use it as an object however it is unsafe.
// Using Any Type:
let any_book = '{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","year":1925,"genre":"Classic","rating":4.5,"desc":"A classic novel about the American Dream","price":9.99,"isAvailable":true}';
any_book = JSON.parse(any_book);
const { title: any_book_title, author: any_book_author, year: any_book_year, genre: any_book_genre, rating: any_book_rating, desc: any_book_desc, price: any_book_price, isAvailable: any_book_isAvailable, } = any_book; // Allowed, Because we have used any type to allow us to use it as an object. But it's unsafe as it disables type safety in your code completely. This can lead to assign it any value mistakenly which can create bugs in your code.
// Using Unkown Type:
let unknown_book = '{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","year":1925,"genre":"Classic","rating":4.5,"desc":"A classic novel about the American Dream","price":9.99,"isAvailable":true}';
// unknown_book = JSON.parse(unknown_book); // This is not allowed, if we have to assign it any value then we have to first check its type before using it.
// Correct Way:
unknown_book = JSON.parse(unknown_book);
const { title: unknown_book_title, author: unknown_book_author, year: unknown_book_year, genre: unknown_book_genre, rating: unknown_book_rating, desc: unknown_book_desc, price: unknown_book_price, isAvailable: unknown_book_isAvailable, } = unknown_book;
console.log(any_book);
console.log(unknown_book);
console.log(`The title of any book is ${any_book_title}, author is ${any_book_author} and genre is ${any_book_genre} and price is ${any_book_price}.`);
console.log(`The title of unknown book is ${unknown_book_title}, author is ${unknown_book_author} and genre is ${unknown_book_genre} and price is ${unknown_book_price}.`);
