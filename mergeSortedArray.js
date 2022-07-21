// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let resArr = [];
  let firstIndex = 0,
    secondIndex = 0;
  for (let i = 0; i < nums1.length + nums2.length; i++) {
    if (
      (firstIndex >= m && secondIndex < n) ||
      nums2[secondIndex] < nums1[firstIndex]
    ) {
      resArr.push(nums2[secondIndex]);
      secondIndex++;
    } else if (firstIndex < m) {
      resArr.push(nums1[firstIndex]);
      firstIndex++;
    }
  }
  for (let index = 0; index < nums1.length; index++) {
    nums1[index] = resArr[index];
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 4, 5, 0], 3);
console.log(nums1);
