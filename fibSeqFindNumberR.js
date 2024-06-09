// Fn = Fn-2 + Fn-1;

function fibSeqFindNumber(index) {
  if (index < 2) {
    return index;
  }
  return fibSeqFindNumber(index - 1) + fibSeqFindNumber(index - 2);
}

// Big-O
// O(n) - (Iterative)
// 0(2^n) - (Recursive)

console.log(fibSeqFindNumber(0)); // 0
console.log(fibSeqFindNumber(1)); // 1
console.log(fibSeqFindNumber(6)); // 8
