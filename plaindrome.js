function isPalindrome(str) {
  str = str.toLowerCase();
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function isPalindromeRecursive(str) {
  str = str.toLowerCase();

  if (str.length <= 1) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindromeRecursive(str.slice(1, str.length - 1)); // or -1
  } else {
    return false;
  }
}

console.log(isPalindrome("RADAR"));
console.log(isPalindrome("hello"));
console.log(isPalindromeRecursive("RADAR"));
console.log(isPalindromeRecursive("hello"));
