// Simple Calculation - The program has the following requirements:
// Input
// Two integer numbers (validate input)
// For invalid input, display an appropriate message.
// Output
// The following mathematical operations for the numbers entered
// • Addition (e.g. num1 + num2 = sum; 3 + 4 = 7)
// • Subtraction
// • Multiplication
// • Division
// • Modulo

let num1;
let num2;
while (!Number.isInteger(num1)) {
  num1 = Number.parseInt(prompt("Type a number 1"));
}
while (!Number.isInteger(num2)) {
  num2 = Number.parseInt(prompt("Type a number 2"));
}

console.log(`
  Addition : ${num1} + ${num2} = ${num1+num2}\n
  Subtraction : ${num1} - ${num2} = ${num1-num2}\n
  Multiplication : ${num1} * ${num2} = ${num1*num2}\n 
  Division : ${num1} / ${num2} = ${num1/num2}\n 
  Modulo : ${num1} % ${num2} = ${num1%num2}\n`)