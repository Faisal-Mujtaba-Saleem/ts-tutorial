"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
console.log("TypeScript Tutorial #10: Use TypeScript with HTML input fields");
document.querySelector("form")?.addEventListener("submit", getInfo);
function getInfo(e) {
    e.preventDefault();
    // Option.2:
    //   let form: FormData | { [key: string]: FormDataEntryValue } = new FormData(
    //     e.target as HTMLFormElement
    //   );
    //   form = Object.fromEntries(form.entries());
    // Option.1:
    // const formData: FormData = new FormData(e.target as HTMLFormElement);
    // type User = {
    //   name: string;
    //   email: string;
    //   phone: string;
    //   age: string;
    // };
    // const user = Object.fromEntries(formData.entries()) as User;
    // console.log(user);
    // const {
    //   name,
    //   email,
    //   phone,
    //   age,
    // }: {
    //   name: string;
    //   email: string;
    //   phone: string;
    //   age: string;
    // } = user;
    // console.log(
    //   `The name of the user is ${name}, email is ${email}, phone is ${phone} and age is ${age}`
    // );
    // Option.3:
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const age = Number(form.age.value);
    console.log(`The name of the user is ${name}, email is ${email}, phone is ${phone} and age is ${age}`);
    e.target.reset();
}
