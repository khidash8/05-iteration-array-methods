const numbers = [1, 2, 3, 4, 5, 6, 11, 18];
let evnNumbrs = [];

//? Even numbers
// evnNumbrs = numbers.filter((num) => num % 2 === 0);

//? above with foreach
// numbers.forEach(function (number) {
//   if (number % 2 === 0) {
//     evnNumbrs.push(number);
//   }
// });
// console.log(evnNumbrs);

//! challenge
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

//TODO- Get only retail companies
const retailComps = companies.filter((comp) => comp.category === "Retail");

// console.log(retailComps);

//TODO- Get companies that started in or after 1980 and ended in or before 2005
const earlyAdopters = companies.filter(
  (comp) => comp.start >= 1980 && comp.end <= 2005
);

// console.log(earlyAdopters);

//TODO- Get companies that lasted 10 years or more
const succeededComps = companies.filter((comp) => comp.end - comp.start >= 10);
console.log(succeededComps);
