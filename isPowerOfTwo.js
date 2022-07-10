// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.
// Input: n = 16
// Output: true
// Explanation: 2^4 = 16
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let total = 1;
  while (total <= n) {
    if (n == total) return true;
    total = total * 2;
  }
  return false;
};

console.log(isPowerOfTwo(16));
