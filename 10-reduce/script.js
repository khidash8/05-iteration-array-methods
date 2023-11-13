//?Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* regular expression
const sum = numbers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);

//* arrow expression
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

//! Challenge
const cart = [
  { id: 1, name: "prod1", price: 120 },
  { id: 2, name: "prod2", price: 195 },
  { id: 3, name: "prod3", price: 180 },
];

//todo- get sum of prices
const total = cart.reduce((acc, cur) => acc + cur.price, 0);

console.log(sum);
