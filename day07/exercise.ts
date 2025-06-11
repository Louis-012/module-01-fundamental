// Students Stats
type Student = {
  name: string;
  email: string;
  age: Date;
  score: number;
};

function calculateStudentStats(students: Student[]) {
  const scores = students.map((s) => s.score);

  console.log(scores);

  const ages = students.map((s) => {
    const today = new Date();
    let age = today.getFullYear() - s.age.getFullYear();
    const m = today.getMonth() - s.age.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < s.age.getDate())) {
      age--;
    }
    return age;
  });

  console.log(ages);

  const scoreStats = {
    highest: Math.max(...scores),
    lowest: Math.min(...scores),
    average: scores.reduce((a, b) => a + b, 0) / scores.length,
  };

  console.log(scoreStats);

  const ageStats = {
    highest: Math.max(...ages),
    lowest: Math.min(...ages),
    average: ages.reduce((a, b) => a + b, 0) / ages.length,
  };

  console.log(ageStats);

  return {
    score: scoreStats,
    age: ageStats,
  };
}

const students: Student[] = [
  {
    name: "Alice",
    email: "alice@mail.com",
    age: new Date(2000, 5, 10),
    score: 90,
  },
  {
    name: "Bob",
    email: "bob@mail.com",
    age: new Date(1998, 10, 20),
    score: 75,
  },
  {
    name: "Charlie",
    email: "charlie@mail.com",
    age: new Date(2002, 2, 5),
    score: 85,
  },
];

console.log(calculateStudentStats(students));

// Product Data
const products = [
  { name: "Apple", price: 5000 },
  { name: "Banana", price: 3000 },
  { name: "Orange", price: 4000 },
];

const transaction = {
  cart: [] as { product: { name: string; price: number }; qty: number }[],
  total: 0,
};

function addToCart(productName: string, qty: number) {
  const product = products.find((p) => p.name === productName);
  if (!product) {
    console.log("Product not found!");
    return;
  }
  transaction.cart.push({ product, qty });
  transaction.total += product.price * qty;
}

function checkout() {
  const summary = transaction.cart.map((item) => ({
    name: item.product.name,
    price: item.product.price,
    qty: item.qty,
    subtotal: item.product.price * item.qty,
  }));
  const total = transaction.total;

  transaction.cart = [];
  transaction.total = 0;
  return { summary, total };
}

addToCart("Apple", 2);
addToCart("Banana", 3);
console.log(transaction.cart);
console.log(transaction.total);

const result = checkout();
console.log(result);

console.log(transaction);
