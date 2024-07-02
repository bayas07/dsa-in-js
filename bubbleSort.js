function bubbleSort(arr) {
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

console.log(bubbleSort([3, 1, 4, 2, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(bubbleSort([-2, 1, 8, -6, 5])); // [ -6, -2, 1, 5, 8 ]
console.log(bubbleSort([30, 12, -4, 42, 5])); // [ -4, 5, 12, 30, 42 ]

// BIG-O - O(n^2)

// function bubbleSort(array) {
//   const arrayLength = array.length;
//   let isSwapped;

//   for (let i = 0; i < arrayLength; i++) {
//     isSwapped = false;

//     for (let j = 0; j < arrayLength - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         // Swap elements
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//         isSwapped = true;
//       }
//     }

//     // If no two elements were swapped in the inner loop, array is sorted
//     if (!isSwapped) break;
//   }

//   return array;
// }
