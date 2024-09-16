// Following Second - The program has the following requirements:
// Input
// Time as three values: hours, minutes, seconds (validate input)
// (may use three prompts)
// Display an appropriate message for invalid input.
// Output
// Output the time entered and the time one second later.
// Examples:
// Time input: 14h17m59s
// One second later: 14h18m0s
// Time input: 6h59m59s
// One second later: 7h0m0s
// Time input: 23h59m59s
// One second later: 0h0m0s

let hour;
while (!Number.isInteger(hour) || hour<0 || hour>=24) {
  hour = Number.parseInt(prompt("Type the hour"));
}
console.log(hour);

let minute;
while (!Number.isInteger(minute)|| minute<0 || minute>=60) {
  minute = Number.parseInt(prompt("Type the minute"));
}

let second;
while (!Number.isInteger(second)|| second<0 || second>=60) {
  second = Number.parseInt(prompt("Type the second"));
}

console.log(`Time input : ${hour}h${minute}m${second}s`);

if (second===59) {
  if (minute===59) {
    if (hour===23) {
      hour=0;
      minute=0;
      second=0;
    } else {
      hour++;
      minute=0;
      second=0;
    }
  } else {
    minute++;
    second=0;
  }
} else {
  second++;
}

console.log(`One second later: ${hour}h${minute}m${second}s`);


