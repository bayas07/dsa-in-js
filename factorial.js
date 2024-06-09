function factorial(num) {
  let factor = 1;
  for (let i = num; i > 1; i--) {
    factor = factor * i;
  }
  return factor;
}

// function factorial(num) {
//   let factor = 1;
//   for (let i = 2; i <= num; i++) {
//     factor = factor * i;
//   }
//   return factor;
// }

// Big-O - O(n)

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5)); // 1 x 2 x 3 x 4 x 5
