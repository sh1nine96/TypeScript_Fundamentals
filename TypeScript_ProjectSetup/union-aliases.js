"use strict";
// function combine(
//     input1: number | string, 
//     input2: number | string, 
//     resultConvertor: 'as-number' | 'as-text') {
function combine(input1, input2, resultConvertor) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConvertor === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConvertor == 'as-number'){
    //     return +result;
    // }
    // else{
    //     return result.toString();
    // }
}
let combinedAges = combine(23, 39, 'as-number');
console.log(combinedAges);
let combinedStringAges = combine('20', '25', 'as-number');
console.log(combinedStringAges);
let combinedNames = combine("Shubham ", "Sharma", 'as-text');
console.log(combinedNames);
