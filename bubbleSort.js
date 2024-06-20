function sortAsc(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let x = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = x;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(sortAsc([3, 1, 4, 2, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(sortAsc([-2, 1, 8, -6, 5])); // [ -6, -2, 1, 5, 8 ]
console.log(sortAsc([30, 12, -4, 42, 5])); // [ -4, 5, 12, 30, 42 ]

// BIG-O - O(n^2)
