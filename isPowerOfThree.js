// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3^x.
// Input: n = 27
// Output: true
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let total = 1;
  while (total <= n) {
    if (total == n) return true;
    total *= 3;
  }
  return false;
};

console.log(isPowerOfThree(27));
