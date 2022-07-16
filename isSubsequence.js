// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without
// disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// Input: s = "abc", t = "ahbgdc"
// Output: true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let min = 0;
  for (let i = 0; i < s.length; i++) {
    let isSub = false;
    for (let b = min; b < t.length; b++) {
      if (s[i] == t[b]) {
        isSub = true;
        min = b + 1;
        break;
      }
    }
    if (!isSub) return false;
  }
  return true;
};

console.log(isSubsequence("aaaaaa", "bbaaaa"));
