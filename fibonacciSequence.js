function fibonacci(num) {
  let initVal = [0, 1];
  if (num <= 0) {
    return [];
  } else if (num <= 2) {
    return initVal.slice(0, num);
  } else {
    for (let i = 2; i < num; i++) {
      initVal[i] = initVal[i - 1] + initVal[i - 2];
    }
    return initVal;
  }
}

// function fibonacci(num) {
//   if (num <= 0) {
//     return [];
//   } else if (num === 1) {
//     return [0];
//   } else if (num === 2) {
//     return [0, 1];
//   } else {
//     let initVal = [0, 1];
//     for (let i = 2; i < num; i++) {
//       initVal[i] = initVal[i - 1] + initVal[i - 2];
//     }
//     return initVal;
//   }
// }

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(7));
