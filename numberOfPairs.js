// You are given a 0-indexed integer array nums. In one operation, you may do the following:
// Choose two integers in nums that are equal.
// Remove both integers from nums, forming a pair.
// The operation is done on nums as many times as possible.
// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.
// Input: nums = [1,3,2,1,3,2,2]
// Output: [3,1]
// Explanation:
// Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
// Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
// Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
// No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let pairs = 0;
  leftOvers = nums.length;
  for (let i = 0; i < leftOvers; i++) {
    for (let b = i + 1; b < leftOvers; b++) {
      if (nums[i] == nums[b]) {
        pairs++;
        nums.splice(i, 1);
        nums.splice(b - 1, 1);
        leftOvers = nums.length;
        i--;
      }
    }
  }
  return [pairs, leftOvers];
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
