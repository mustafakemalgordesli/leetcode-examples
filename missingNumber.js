// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let total = 0,
    temp = 0;
  let isThereZero = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) isThereZero = true;
    total += nums[i];
    temp += i;
  }
  temp += nums.length;
  console.log(total, temp);
  if (!isThereZero) return 0;
  if (temp - total != 0) return temp - total;
  return nums.length;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
