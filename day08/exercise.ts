// Merge Students
type Student = {
  name: string;
  email: string;
};

function mergeStudents(arr1: Student[], arr2: Student[]): Student[] {
  const map = new Map<string, Student>();
  [...arr1, ...arr2].forEach((student) => {
    map.set(student.email, student);
  });
  console.log(map);
  return Array.from(map.values());
}

const array1: Student[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
  { name: "Student 4", email: "student4@mail.com" },
];

const array2: Student[] = [
  { name: "Student 4", email: "student4@mail.com" },
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

const merge = mergeStudents(array1, array2);
console.log(merge);

// Switch Value
function switchKeyValue(arr: Record<string, any>[]): Record<string, any>[] {
  console.log(arr);
  return arr.map((obj) => {
    const swapped: Record<string, any> = {};
    Object.entries(obj).forEach(([key, value]) => {
      console.log(key, value);
      swapped[String(value)] = key;
    });
    console.log(swapped);

    return swapped;
  });
}

const input = [{ name: "David", age: 20 }];
const output = switchKeyValue(input);
console.log(output);
