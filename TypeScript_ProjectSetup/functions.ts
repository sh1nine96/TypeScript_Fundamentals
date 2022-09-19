    function add(n1: number, n2: number){
        return n1 + n2;
    }

    function printResult( num: number): void{
        console.log('Result is: ' + num);
    }

    function addAndHandle(n1: number, n2: number, cb: (num: number)=> void){
        const result = n1 + n2;
        cb(result);
    }


    printResult(add(20, 15));

    // function type

    // let combineValues: Function;
    let combineValues: (parameter1: number, parameter2: number) => number ;
    combineValues = add; // will not be error as add function accepts 2 parameters
    // combineValues - printResult; -> throw error as printResult accepts only 1 parameter
    // combineValues = 9; compiler will not catch but error in console, bcz it's no more a function after this line
    console.log(combineValues(10, 11));

    addAndHandle(12, 18, (result)=>{
        console.log(result);
    });
