// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space
// Input: nums = [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var hash = new Object();
  for (num of nums) {
    if (hash[num] === 1) hash[num]++;
    else hash[num] = 1;
  }
  for (var key in hash) {
    if (hash[key] === 1) return key;
  }
};

console.log(singleNumber([2, 2, 1]));
