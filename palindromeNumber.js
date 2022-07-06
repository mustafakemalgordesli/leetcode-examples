// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let value = String(x);
  let newString = "";
  for (let i = 0; i < value.length; i++) {
    newString += value[value.length - 1 - i];
  }
  console.log(value);
  console.log(newString);
  return value == newString ? true : false;
};

console.log(isPalindrome(-121));
