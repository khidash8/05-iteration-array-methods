//! For Of loop -- for Arrays
//? Regular arrays
const arr1 = ["john", "born", "loan", "corn"];

for (const arr of arr1) {
  console.log("arr1: " + arr);
}

//? array of objects
const arr2 = [{ name: "kiid" }, { name: "Loki" }];

for (const user of arr2) {
  console.log("arr2: " + user);
}
