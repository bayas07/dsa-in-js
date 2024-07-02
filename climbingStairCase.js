const C = console.log;

function climbStairCaseRec(n) {
  if (n < 3) {
    return n;
  }
  return climbStairCaseRec(n - 1) + climbStairCaseRec(n - 2);
}

// BIG - O - O(2^n)

function climbStairCase(n) {
  const ways = [1, 2];

  for (let i = 2; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  return ways[n - 1];
}

// BIG-O - O(n)

C(climbStairCase(1)); // 1
C(climbStairCase(2)); // 2
C(climbStairCase(3)); // 3
C(climbStairCase(4)); // 5
C(climbStairCase(5)); // 8
