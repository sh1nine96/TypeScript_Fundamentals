var userInput;
userInput = 5;
userInput = 'Shubham';
userInput = true;
// interesting case 
var username;
// username = userInput; ERROR with unknown type but not with any type for obvious reason
// we can fix it though with one extra check
if (userInput === 'string') {
    username = userInput; // here it will work without any problem
}
// never type => it will never return anything not even undefined
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured of code: ', 500);
// we can use watch mode to avoid recompilation again and again
// [tsc file.ts --watch] or => [tsc file.ts -w]
