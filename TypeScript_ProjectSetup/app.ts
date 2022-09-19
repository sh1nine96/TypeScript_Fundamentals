    let userInput: unknown;

    userInput = 5;
    userInput = 'Shubham';
    userInput = true;

    // interesting case 
    let username: string;
    // username = userInput; ERROR with unknown type but not with any type for obvious reason
    // we can fix it though with one extra check

    if(userInput === 'string'){
        username = userInput; // here it will work without any problem
    }

    // never type => it will never return anything not even undefined

    function generateError(message: string, code: number): never{
        throw {message: message, errorCode: code};
    }

    generateError('An error occured of code: ', 500);