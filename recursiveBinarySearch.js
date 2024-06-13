function recursiveBinarySearch(arr = [], target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, startIndex, endIndex) {
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  if (startIndex > endIndex) {
    return -1;
  }
  if (arr[midIndex] === target) {
    return midIndex;
  }
  if (target < arr[midIndex]) {
    return search(arr, target, startIndex, midIndex - 1);
  } else {
    return search(arr, target, midIndex + 1, endIndex);
  }
}

let testArr = [10, 20, 30, 40, 50];

console.log(recursiveBinarySearch(testArr, 20)); // 1
console.log(recursiveBinarySearch(testArr, 50)); // 4
console.log(recursiveBinarySearch(testArr, 100)); // -1

// BIG-O - O(logn)
