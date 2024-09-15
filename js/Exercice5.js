// Password (use a loop) - The program has the following requirements:
// Input
// A password
// Output
// Assume the password is "secret"
// If "secret" is not entered, prompt the user for a password again (up to 3 times)
// If a correct password is entered, display the following message (# represents number of
// attempts):
// You entered the correct password after # attempt(s)
// If after three attempts, the user fails to enter the correct password, display the following
// message:
// Your account is locked! You failed to enter the correct password # times
// Note: You can hard code three for failure, but if you need to change this in the future, it's
// more difficult.

let nbFailure = 3;
let password = "secret";

for (let i= 0; i < nbFailure; i++) {
  let text = prompt('Password');
  if (password===text) {
    console.log(`You entered the correct password after ${i} attempt(s)`);
    break;
  } else {
    console.log(`Wrong secret password`);
    if(i===nbFailure-1){console.log(`Your account is locked! You failed to enter the correct password ${nbFailure} times`)}
  }
  
}
