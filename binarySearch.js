// function binarySearch(arr, target) {
//   const middleIndex = Math.floor(arr.length / 2);
//   if (arr[middleIndex] === target) {
//     return middleIndex;
//   }
//   let startIndex = 0;
//   let endIndex = arr.length;
//   if (target > arr[middleIndex]) {
//     startIndex = middleIndex;
//   } else {
//     endIndex = middleIndex;
//   }
//   for (let i = startIndex; i < endIndex; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

function binarySearch(arr, target) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }
  return -1;
}

let testArr = [-5, 1, 2, 4, 7, 9, 11, 13, 45, 56, 65, 71, 100, 112, 1000]; // 15

console.log(binarySearch(testArr, 2)); // 2
console.log(binarySearch(testArr, 45)); // 8
console.log(binarySearch(testArr, 10000)); // -1

// BIG-0 // O(logn)
