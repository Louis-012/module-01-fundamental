// a group of program to execute specific purpose
/**
 * funciyon naming rules follow variable naming rules
 * can accept parameter/argument0
 * return value throguh return keyword inside
 * can be written as declarative, functions,expressivef funvtion, or arrow function
 */

// function name(params:type) {
//     //code
// }

function addition() {
  let numberA: number = 10;
  let numberB: number = 13;

  const hassil: number = numberA + numberB;

  return hassil;
}
console.log(addition());

// function e=with parameter forreuseability
function subtraction(numberA: number, numberB: number) {
  const hasil: number = numberA - numberB;
  return hasil;
}
console.log(subtraction(10, 20));
console.log(subtraction(8, 3));
console.log(subtraction(25, 10));
