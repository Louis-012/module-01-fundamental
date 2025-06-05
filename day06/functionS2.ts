// callback function: function that runs inside another funtion and inserted through parameter
//                    function that is made in the parameter of enother function

// function name(callbackFn()) {
//     callbackFn()
// }

// mainFunction declaration
function printCalc(callbackFn) {
  let angkaA: number = 10;
  let angkaB: number = 30;
  const result = callbackFn(angkaA, angkaB);

  return `Hasil perhitungan callback adalah ${result}`;
}

console.log(
  printCalc(function (angkaA: number, angkaB: number) {
    return angkaA + angkaB;
  })
);

// array function
// forEach: for loop alternative to access each array data
// array.forEach(element() => {
//      code
// });

const students: string[] = ["Abdi", "Edi", "Aldo"];

students.forEach((value, index) => {
  console.log(`${index + 1}. ${value}`);
});

function forEachAlter(value: any[], callbackFn: any) {
  for (let i = 0; i < value.length; i++) {
    callbackFn(value[i], i);
  }
}

forEachAlter(students, (value: any[], index: number) => {
  console.log(`${index + 1}. ${value}`);
});

// arrat.map(callbackFn): make new array from existing array
// [1,2,3] -> [2,4,6]
//["Abdi", "Edi", "Aldo"] -> ["1. Abdi", "2. Edi", "3. Aldo"]
// [1,2,3] -> ["1", "2", "3"]
// [1000,2000,3000] -> ["Rp. 1.000", "Rp. 2.000", "Rp. 3.000"]

const numbers: number[] = [1, 2, 3, 4, 5];
const newArray = numbers.map((value: number) => {
  return value * 2;
});
console.log(newArray);

const uang: number[] = [2000, 5000, 10000];
const newUang = uang.map((value: number, index) => {
  return value.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
});

console.log(newUang);

const result: string[] = [];
uang.forEach((value: number, index: number) => {
  result.push(
    value.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    })
  );
});
console.log(result);

// array/filter(callbackFn): filter array data based on condition
// [1,2,3,4,5] -> [2,4]

const angka: number[] = [1, 2, 3, 7, 28, 12];

const angkaGenap = angka.filter((value, index) => {
  return value % 2 !== 0;
});
console.log(angkaGenap);
