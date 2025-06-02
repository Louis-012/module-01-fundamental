// boolean: true, false

let isActive: boolean = true;
let isDeleted: boolean = false;

console.log(Boolean("QWERTY"));
console.log(Boolean(" "));
console.log(Boolean(45));
console.log(Boolean(-45));

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// comparison operator: >, <, >=, <=, ==, ===
let A = 12;
let B = 15;

console.log(A > B);
console.log(A < B);
console.log(A >= 12);
console.log(B <= 10);
console.log(B == 15);
console.log(A != 15);

// logical operator: &&(and), ||(or), !(not)
console.log(Boolean("ABC") && Boolean(3));
console.log(A <= 12 && B === 15);
console.log(A === 10 && B === 1);

console.log(Boolean("ABC") || Boolean(3));
console.log(A <= 12 || B === 15);
console.log(A === 10 || B === 1);

console.log(!(A < 12) && B === 15);
