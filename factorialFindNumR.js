// n! -> n * (n - 1)!;

function findFactorialOfNum(n) {
  if (n === 0) return 1;
  return n * findFactorialOfNum(n - 1);
}

console.log(findFactorialOfNum(5)); // 120

// BIG-O - o(n)

// f5 - r24 * 5 -> 120
// f4 - r6 * 4 -> 24
// f3 - r2 * 3 -> 6
// f2 - r1 * 2 -> 2
// f1 - r1 * 1 -> 1
// f0 - r1;
