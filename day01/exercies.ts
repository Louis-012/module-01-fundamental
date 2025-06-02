/*
find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15
*/

let a: number = 6;
let b: number = 3;

const rectArea = a * b;
console.log(rectArea);

/*
find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
*/
a = 7;
b = 3;

const rectPerim = 2 * (a + b);
console.log(rectPerim);

/*
find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539
*/
let r: number = 5;
const PI: number = Math.PI;

const d = r * 2;
const circ = 2 * PI * r;
const area = PI * Math.pow(r, 2);
console.log(d);
console.log(circ);
console.log(area);

/*
find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35
*/
a = 90;
b = 45;

const g = 180 - a - b;
console.log(g);

/*
convert temperature from Celcius to Fahrenheit.
○ Example : celcius 25
○ Output : 77
*/
let c: number = 30;

const f = (c / 5) * 9 + 32;
console.log(f);

/*
swap two numbers
○ Example : a = 4, b = 7
○ Output : a = 7, b = 4
*/
a = 2;
b = 9;
console.log(a, b);

let numbers: number[] = [a, b];
a = numbers[1];
b = numbers[0];
console.log(a, b);

/*
get first and last characters from a string
○ Example : word = "Programming"
○ Output : P and g
*/
let word = "Development";
console.log(word[0], word[word.length - 1]);

/*
calculate the square and cube of a number
○ Example : number = 4
○ Output : square = 16, cube = 64
*/
let numb: number = 3;

const square = numb ** 2;
const cube = numb ** 3;
console.log(square, cube);

/*
convert minutes to hours and minutes
○ Example : totalMinutes = 135
○ Output : 2 hours and 15 minutes
*/
let minutes: number = 210;

const hour = `${Math.floor(minutes / 60)} hours and ${minutes % 60} minutes`;
console.log(hour);
