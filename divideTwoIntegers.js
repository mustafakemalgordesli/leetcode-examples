// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
// Return the quotient after dividing dividend by divisor.
// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === 0) return 0;
  if (divisor === 1 || divisor === -1) {
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor < 0))
      return -dividend;
    return dividend;
  }
  let total = 0;
  let tempDivisor = divisor < 0 ? -divisor : divisor;
  let tempDividend = dividend < 0 ? -dividend : dividend;
  for (let i = 0; i <= tempDividend; i++) {
    total += tempDivisor;
    if (total > tempDividend) {
      if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0))
        return -i;
      return i;
    }
  }
};

console.log(divide(-10, 3));
