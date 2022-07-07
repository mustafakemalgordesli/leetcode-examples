// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
// Input: (x = 2.0), (n = 10);
// Output: 1024.0;

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0 || x === 1) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2 == 0) {
    let result = myPow(x * x, n / 2);
    if (result === 1) return x * x;
    return result;
  }
  return x * myPow(x * x, (n - 1) / 2);
};

console.log(myPow(2, 9));
