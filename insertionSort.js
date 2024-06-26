function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const NTS = arr[i];
    let sortArrInd = i - 1;
    while (sortArrInd >= 0 && arr[sortArrInd] > NTS) {
      arr[sortArrInd + 1] = arr[sortArrInd];
      sortArrInd = sortArrInd - 1;
    }
    arr[sortArrInd + 1] = NTS;
  }
  return arr;
}

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     for (j; j >= 0, arr[j] > key; j--) {
//       if (key < arr[j]) {
//         arr[j + 1] = arr[j];
//       }
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

console.log(insertionSort([1, 5, 3, 6, 2])); // [ 1, 2, 3, 5, 6 ]
console.log(insertionSort([-4, 5, 7, -6, -2, 1])); // [ -6, -4, -2, 1, 5, 7 ]

// BIG-O - O(n^2)
