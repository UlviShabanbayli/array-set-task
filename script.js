"use strict";
const nums = [1, 3, 2, 4, 5, 3];

const uniqueNums = new Set();
const duplicates = new Set();

nums.forEach((el) => {
  if (uniqueNums.has(el)) {
    duplicates.add(el);
  } else {
    uniqueNums.add(el);
  }
});

console.log(Array.from(duplicates).join(", "));
