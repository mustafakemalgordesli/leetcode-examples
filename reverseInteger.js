// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// Input: x = -120
// Output: -21

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let value = x.toString();
  let minus = false;
  if (value[0] === "-") minus = true;
  let result = "";
  for (let i = value.length - 1; i >= 0; i--)
    if (value[i] != "-" && !(result === "" && value[i] === 0))
      result += value[i];

  if (minus) result = -Number(result);
  else result = Number(result);
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  }
  return result;
};

console.log(reverse(-36040));
