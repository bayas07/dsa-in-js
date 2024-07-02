function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, fromRod, toRod);
}

// BIG-O - o(2^n)

towerOfHanoi(3, "A", "C", "B");
