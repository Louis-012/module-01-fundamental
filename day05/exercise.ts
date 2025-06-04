// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

const arr: number[] = [12, 5, 23, 18, 4, 45, 32];

function findMinMax(arr: number[]) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(min);
  console.log(max);
  console.log(sum);

  const result = {
    small: min,
    big: max,
    avrg: sum / arr.length,
  };

  return result;
}

const answer = findMinMax(arr);
console.log(`Highest is: ${answer.big}`);
console.log(`Lowest is: ${answer.small}`);
console.log(`Average is: ${answer.avrg}`);

// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

const sequence: any[] = ["apple", "banana", "cherry", "date"];
function wordtoString(seq: any[]) {
  seq[seq.length - 1] = `and ${seq[seq.length - 1]}`;
  let result = seq.join(", ");
  console.log(result);

  return result;
}

console.log(wordtoString(sequence));

// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

const numbers: number[] = [5, 3, 1, 7, 2, 6];

function secondSmallest(seq) {
  seq.sort((a, b) => a - b);
  console.log(numbers);

  return seq[1];
}
console.log(secondSmallest(numbers));

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [3, 2, 1];
function addArrays(arr1: number[], arr2: number[]) {
  const result: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  console.log(result);

  return result;
}
console.log(addArrays(arr1, arr2));

// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

const arr3: number[] = [1, 2, 3, 4];
const newNumber: number = 7;
function addUnique(arr: number[], newElement: number) {
  if (!arr.includes(newElement)) {
    arr.push(newElement);
  }
  console.log(arr);

  return arr;
}
console.log(addUnique(arr3, newNumber));
