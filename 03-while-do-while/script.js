let i = 1;
//! while loop
while (i <= 20) {
  console.log(i);
  i++;
}

//! Nested while Loop
while (i <= 5) {
  console.log(`Number ${i}`);

  let j = 1;
  while (j <= 10) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}

//! Do While Loop
do {
  console.log(i);
  i++;
} while (i <= 10);
