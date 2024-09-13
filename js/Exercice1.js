// Validate Input – The program has the following requirements:
// Input
// Ask the user for a number between 1 – 100.
// Output
// If the input is valid (substitute XX for the number entered):
// Thank you! You entered XX, a valid number.
// For invalid input (substitute XX for input)
// Sorry, XX is not a valid entry.
// Test your program with numeric, non-numeric, spaces, and blank input.
// Hint:
// See hands-on tutorial. Recall the following:
// isNaN(), Number.isInteger(), Number.parseInt()

let n = prompt("Type a number between 1 - 100");

let n_int = Number.parseInt(n);

if (Number.isInteger(n_int) && n_int >= 1 && n_int <= 100) {
  console.log(`Thank you! You entered ${n_int}, a valid number.`);
} else {
  console.log(`Sorry, ${n} is not a valid entry.`);
}


