"use strict";
let userInput;
userInput = 5;
userInput = "Shubham";
userInput = true;
// interesting case
let username;
// username = userInput; ERROR with unknown type but not with any type for obvious reason
// we can fix it though with one extra check
if (userInput === "string") {
    username = userInput; // here it will work without any problem
}
// never type => it will never return anything not even undefined
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log(generateError("An error occured of code: ", 500));
function test() {
    console.log("Hello Typescript");
}
