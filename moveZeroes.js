// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (let b = i + 1; b < nums.length; b++) {
        if (nums[b] != 0) {
          let temp = nums[i];
          nums[i] = nums[b];
          nums[b] = temp;
          break;
        }
      }
    }
  }
};
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
