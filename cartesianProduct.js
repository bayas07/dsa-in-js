function cartesianProduct(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arr.push([arr1[i], arr2[j]]);
    }
  }
  return arr;
}

//  BIG-O - O(mn) - It's based on both array length

function cartesianRecurs(arr1, arr2) {
  if (arr1.length === 0) {
    return [];
  }
  const arr = [];
  for (let i = 0; i < arr2.length; i++) {
    arr.push([arr1[0], arr2[i]]);
  }
  return [...arr, ...cartesianRecurs(arr1.slice(1), arr2)];
}

console.log(cartesianRecurs([1, 2], [3, 4, 5]));
console.log(cartesianProduct([1, 2, 3], [3, 4, 5]));
