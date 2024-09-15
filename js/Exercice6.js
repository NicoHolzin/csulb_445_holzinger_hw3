// Multiplication Table (use a loop) - The program has the following requirements:
// Input
// A number (assume valid input)
// Output
// The multiplication table for the input number multiplied by 0 – 10. For example, assume 3
// is entered:
// 3 x 0 = 0
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30

let length = 10;

let num;
while (!Number.isInteger(num)) {
  num = Number.parseInt(prompt("Type a number"));
}

for (let i= 0; i <= length; i++) {
  console.log(`${num} * ${i} = ${num*i}`);
}