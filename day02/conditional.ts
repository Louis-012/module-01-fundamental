// conditional statement

/**
 * IF                       : check strictly single condition
 * IF ... ELSE              : check two condition
 * IF ... ELSE IF ... ELSE  : check three condition or more
 * SWITCH CASE              : data value comparison
 */

let nama: string = "max";
let usia: number = 15;

if (usia > 16) {
  console.log(`${nama} sudah dewasa`);
}

if (usia > 16) {
  const print: string = `${nama} sudah dewasa`;
  console.log(print);
} else {
  const print: string = `${nama} belum dewasa`;
  console.log(print);
}

let isTrue: boolean = true;
if (isTrue) {
  console.log("yes");
} else {
  console.log("no");
}

const value: number = 70;
let result: string;

if (value >= 90) {
  result = "A";
} else if (value >= 80 && value < 90) {
  result = "B";
} else if (value >= 70 && value < 80) {
  result = "C";
} else if (value >= 60 && value < 70) {
  result = "D";
} else {
  result = "F";
}

console.log(result);

// switch case
const job: string = "Coder";

switch (job) {
  case "Coder":
    console.log("Make Apps");
    break;
  case "driver":
    console.log("Drive");
    break;

  default:
    console.log("Unkwown");

    break;
}
