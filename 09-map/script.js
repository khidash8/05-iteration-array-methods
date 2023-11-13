//? Returns any value / can edit the return value
const numbers = [1, 2, 3, 4, 5, 6, 7, 10];

//* sol 1: normal with curly braces
const doubleNumber = numbers.map(function (num) {
  //   console.log("Number " + num);
  return num * 2;
});

console.log("From Normal:  ", doubleNumber);

//*sol 2: arrow function
const doubleNumber2 = numbers.map((num) => num * 2);
console.log("From arrow:  ", doubleNumber2);

//? sol 3: above result using Foreach
const doubledNumberForeach = [];
numbers.forEach((num) => {
  doubledNumberForeach.push(num * 2);
});

console.log("Foreach: ", doubledNumberForeach);

//! chain maps
const sqrtDoubled = numbers
  .map((num) => Math.sqrt(num))
  .map((num) => num * 2)
  .map((num) => num % 2);
console.log("sqrtand doubled: ", sqrtDoubled);

//! Chain other high order methods
const evnDoubled = numbers.map((num) => num * 3).filter((num) => num % 2 === 0);

console.log("evn doubled", evnDoubled);

//! Challenge:
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

//TODO- Create an array of company names
const companyNames = companies.map((comp) => comp.name);
console.log("comapny Names: ", companyNames);

//TODO- Create an array with just company and category
// const companyCategory = companies.map((comp) => {
//   return { name: comp.name, category: comp.category };
// });

const companyInfo = companies.map((comp) => ({
  name: comp.name,
  category: comp.category,
}));

console.log("company Info: ", companyInfo);

//TODO- Create an array of objects with the name and the length of each company in years
//*method 1:
// const companyAge = companies.map((comp) => comp.end - comp.start);

//*method 2:
// const companyAge = companies.map((comp) => {
//   return `${comp.name}: ${comp.end}-${comp.start} = ${
//     comp.end - comp.start
//   } years`;
// });

//*method 3:
const companyAge = companies.map((comp) => {
  return {
    name: comp.name,
    age: comp.end - comp.start,
  };
});

console.log(companyAge);
