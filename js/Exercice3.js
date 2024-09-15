// Following Day - The program has the following requirements:
// Use the switch/case syntax NOT if/then
// Input
// A day of the week
// Valid input is three letter abbreviation in lower case (validate input):
// sun, mon, tue, wed, thu, fri, or sat
// For invalid input, display an appropriate message.
// Output
// Output the following message (Text in Italics will change depending on input)
// You entered: DayEntered
// The following day is: FollowingDay

let day = prompt("Enter a day (three letter abbreviation in lower case)");
let nextDay;

switch (day) {
  case 'mon':
    day = "Monday";
    nextDay = "Tuesday";
    console.log(`You entered: ${day}\nThe following day is: ${nextDay}`);
    break;

  case 'tue':
    day = "Tuesday";
    nextDay = "Wednesday";
    console.log(`You entered: ${day}\nThe following day is: ${nextDay}`);
    break;

  case 'wed':
    day = "Wednesday";
    nextDay = "Thursday";
    console.log(`You entered: ${day}\nThe following day is: ${nextDay}`);
    break;

  case 'thu':
    day = "Thursday";
    nextDay = "Friday";
    console.log(`You entered: ${day}\nThe following day is: ${nextDay}`);
    break;

  case 'fri':
    day = "Friday";
    nextDay = "Saturday";
    console.log(`You entered: ${day}\nThe following day is: ${nextDay}`);
    break;

  case 'sat':
    day = "Saturday";
    nextDay = "Sunday";
    console.log(`You entered: ${day}\nThe following day is: ${nextDay}`);
    break;

  case 'sun':
    day = "Sunday";
    nextDay = "Monday";
    console.log(`You entered: ${day}\nThe following day is: ${nextDay}`);
    break;

  default:
    console.log(`"${day}" is not recognized as a valid day (three letter abbreviation in lower case).`);
    break;
}
