function primeNumber(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Big-O - O(n)
// Tip - If we make Math.sqrt(num) - It would be 0(sqrt(n))

console.log(primeNumber(2));
console.log(primeNumber(3));
console.log(primeNumber(333));
console.log(primeNumber(101));
