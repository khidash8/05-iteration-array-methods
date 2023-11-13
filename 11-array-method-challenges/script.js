//! Challenge 1
const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

//? Solution 1:
const youngPeople = people
  .filter((age) => age.age <= 25)
  .map((sorted) => ({
    name: `${sorted.firstName} ${sorted.lastName}`,
    email: sorted.email,
  }));

//? Solution 2:
const youngPeople2 = people
  .map((group) => ({
    name: group.firstName + group.lastName,
    email: group.email,
    age: group.age,
  }))
  .filter((sort) => sort.age <= 25);

// console.log(youngPeople2);

//! Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

//? Solution
const postveNmbrSum = numbers
  .filter((num) => num > 0)
  .reduce((pre, cur) => pre + cur, 0);

console.log(postveNmbrSum);

//! Challenge 3
//? Solution 1:
const words = ["jelly", "bully", "sully", "valli"];
const capitalizedWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});

//? Solution 2:
const capitalizedWords2 = words.map((word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(capitalizedWords2);
