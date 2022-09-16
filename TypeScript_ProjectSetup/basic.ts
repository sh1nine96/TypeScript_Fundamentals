function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // return n1 + n2;

  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
let num1: number;
num1 = 5;
const num2 = 3.3;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(+num1, +num2, printResult, resultPhrase);
console.log(result);
