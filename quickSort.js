function quickSort(arr) {
  const leftArr = [];
  const rightArr = [];
  const pivot = arr[arr.length - 1];

  if (arr.length < 2) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([1, 4, 5, -10, 2]));

// Worst case- O(n^2)
// Avg case - O(logn)
