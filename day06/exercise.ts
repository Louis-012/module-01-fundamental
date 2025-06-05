// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
function sumNumbersFromArray(arr: any[]) {
  return arr.reduce((sum, item) => {
    console.log(item);

    if (typeof item === "number") {
      return sum + item;
    }
    return sum;
  }, 0);
}

const array = ["3", 1, "string", null, false, undefined, 2];
console.log(sumNumbersFromArray(array));

// Write a function that will combine 2 given array into one array
// b. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
function combineArrays(arr1: any[], arr2: any[]) {
  return arr1.concat(arr2);
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(combineArrays(arr1, arr2));

// Write a function to find duplicate values in an array
// b. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

function findDuplicates(arr: any[]) {
  const counts: { [num: string]: number } = {};
  arr.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });
  console.log(counts);

  return Object.keys(counts)
    .filter((num) => counts[num] > 1)
    .map((num) => Number(num));
}

const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(findDuplicates(arr));

// Write a function to find the difference in 2 given array
// b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
function arrayDiff(arr1: any[], arr2: any[]) {
  return [
    ...arr1.filter((item) => !arr2.includes(item)),
    ...arr2.filter((item) => !arr1.includes(item)),
  ];
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(arrayDiff(array1, array2));
