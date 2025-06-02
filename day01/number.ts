// data containing numbers only
let distance: number = 1500; // Int value
let weight: number = 90.25; // Float value

// Arithmathics : +, -, *, /, %
let number1: number = 20;
let number2: number = 35;
const result: number = number1 + number2;
console.log(result);

// math object function
const PiMath: number = Math.PI;
console.log(PiMath);

console.log(Math.round(25.5));
console.log(Math.ceil(25.1));
console.log(Math.floor(25.9));

console.log(Math.pow(4, 2));
console.log(Math.sqrt(16));
console.log(Math.cbrt(8));

console.log(Math.max(1, 2, 3, 5, 8, 10, -10, -20));
console.log(Math.min(1, 2, 3, 5, 8, 10, -10, -20));

console.log(Math.random());

// data parsing
let price: number = 25500;
console.log(
  price.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  })
);
