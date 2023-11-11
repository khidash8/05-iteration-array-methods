//! For in OBJECTS
const obj = {
  name: "blahh",
  age: 29,
  gender: "Male",
  occupation: "Student",
};

for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

//! for in ARRAY
const arr = ["bla", "blaa", "blaaa", "blaaaa"];

for (const key in arr) {
  console.log(key, arr[key]);
}
