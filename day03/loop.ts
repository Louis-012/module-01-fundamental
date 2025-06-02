// Looping : codes that repeats the execution of a program

// While loop : always repeat as long as the condition is fulfilled
// while (condition) {
//      program
// }

let count: number = 1;

while (count <= 10) {
  console.log(count);
  count++;
}

let isBoolean: boolean = true;

while (isBoolean) {
  count++;

  if (count === 15) {
    console.log(count);
    isBoolean = false;
  }
}

while (true) {
  count++;

  if (count === 25) {
    console.log(count);
    break;
  }
}

// Do While loop
// do {
//     // program
// } while (condition);

let counter: number = 1;

do {
  console.log(counter);
  counter++;
} while (counter < 1);

// For Loop : looping limit is stated from start
// for (let index = 0; index < array.length; index++) {
//     program

// }

for (let index = 0; index < 10; index++) {
  console.log(index);
}

const limit: number = 6;
let cetak: string = "";

for (let i: number = 0; i < limit; i++) {
  if (i % 2 == 0) {
    cetak += `${i} : Genap | `;
  } else if (i % 2 == 1) {
    cetak += `${i} : Ganjil | `;
  }
}
console.log(cetak);
