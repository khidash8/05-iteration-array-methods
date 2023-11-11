//! Break
for (let i = 0; i < 10; i++) {
  if (i === 6) {
    console.log(`Breaking at ${i}....`);
    break;
  }
  console.log(i);
}

//! Continue
for (let i = 0; i < 10; i++) {
  if (i === 6) {
    console.log(`Skipping at ${i}`);
    continue;
  }
  console.log(i);
}
