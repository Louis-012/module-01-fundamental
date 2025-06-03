// Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

let number: number = 14;
let printed: string = "";

if (number % 2 == 0) {
  printed = `${number} : even number`;
} else if (number % 2 == 1) {
  printed = `${number} : odd number`;
}
console.log(printed);

// Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

number = 15;
let isPrime: boolean = true;
for (let index = 2; index < number; index++) {
  if (number % index === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);

//Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6

let limit: number = 3;
let total: number = 0;
for (let index = 1; index <= limit; index++) {
  total += index;
}
console.log(total);

// Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

limit = 6;
total = 1;
for (let index = 2; index <= limit; index++) {
  total *= index;
}
console.log(total);

//Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

limit = 15;
let n1: number = 0;
let n2: number = 1;
let fib: number;

for (let index = 0; index <= limit; index++) {
  console.log(n1);
  fib = n1 + n2;
  n1 = n2;
  n2 = fib;
}
console.log(n2 - n1);
