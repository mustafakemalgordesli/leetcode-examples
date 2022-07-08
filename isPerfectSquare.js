// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Follow up: Do not use any built-in library function such as sqrt.
// Example 1:
// Input: num = 16
// Output: true
// Example 2:
// Input: num = 14
// Output: false

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num == 1) return true;
  for (let i = 0; i <= num / 2; i++) {
    if (i * i === num) return true;
  }
  return false;
};
console.log(isPerfectSquare(14));