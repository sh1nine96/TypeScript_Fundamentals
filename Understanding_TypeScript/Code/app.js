/* we can use watch mode to avoid recompilation again and again
for all typescript files inside to be in watch mode we need to type tsc --init, it will give us tsconfig.json file
then we can just type "tsc" in terminal and it will compile all files at that moment to go inside
watch mode we can just type "tsc -w" or "tsc --watch" */
//=> for single ts file [tsc file.ts --watch] or => [tsc file.ts -w] 
"use strict";
let username = "Shubham";
console.log(username);
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log('I am clicked');
});
