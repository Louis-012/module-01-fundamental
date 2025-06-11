const pet = {
  name: "Fluffy",
  species: "Dog",
  age: 4,
  vaccinated: true,
  favoriteToys: "Ball",
};

console.log(pet.name);
console.log(pet.favoriteToys);

const idCard: any = {};
console.log(idCard);

idCard.name = "John Doe";
idCard.age = 30;
idCard.gender = "Male";
console.log(idCard);

function createStudent(name: string, grade: number) {
  return {
    name: name,
    grade: grade,
  };
}

const student = createStudent("Budi", 10);
console.log(student);

const employee = Object.assign({}, { name: "Alice", role: "Developer" });
console.log(employee);

interface IPerson {
  id: number;
  name: string;
  age: number;
  hobby: string[];
}

const person1: IPerson = {
  id: 1,
  name: "Alice",
  age: 30,
  hobby: ["Reading", "Traveling"],
};

interface iAddress {
  street: string;
  zipCode: string;
}

interface IDetail {
  detail: IPerson;
  address: iAddress;
}

const paket: IDetail = {
  detail: {
    id: 2,
    name: "Bob",
    age: 25,
    hobby: ["Gaming", "Cooking"],
  },
  address: {
    street: "123 Main St",
    zipCode: "12345",
  },
};

console.log(paket);

type Color = "red" | "green" | "blue";
const color: Color = "red";

type Coordinate = {
  x: number;
  y: number;
};

const point: Coordinate = {
  x: 10,
  y: 20,
};
console.log(point);

type Vehicle = {
  brand: string;
  year: number;
};

type Car = Vehicle & {
  seat: number;
};

const car: Car = {
  brand: "Toyota",
  year: 2015,
  seat: 5,
};
