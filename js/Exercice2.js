// Class Standing - The program has the following requirements:
// Input
// Ask the user for their name and number of units completed at college (use prompt(s)).
// Validate input (integer >= 0, check for non-numeric or decimal entry)
// For invalid input, display an appropriate message.
// Output
// Output the following message (Text in Italics will change depending on input)
// Hello NameEntered
// Your grade standing is GradeStanding
// NameEntered – This is the name entered
// GradeStanding – Calculate as follows:
// Number of units:
// 0 – 30: Freshman
// 31 – 60: Sophomore
// 61 – 90: Junior
// > 91: Senior

let name = prompt("Please type your name");
let units = prompt("Please type the number of units completed at college");
let units_int = Number.parseInt(units);

if (Number.isInteger(units_int) && units_int >= 0) {
  console.log(`Thank you! You entered ${units_int}, a valid number of units.`);

  let GradeStanding;

  if (units_int <= 30) {
    GradeStanding = "Freshman";
  } else if (units_int >= 31 && units_int <= 60) {
    GradeStanding = "Sophomore";
  } else if (units_int >= 61 && units_int <= 90) {
    GradeStanding = "Junior";
  } else if (units_int >= 91) {
    GradeStanding = "Senior";
  }

  console.log(`Hello ${name}\nYour grade standing is ${GradeStanding}`);

} else {
  console.log(`Sorry, ${units} is not a valid number of units.`);
}





