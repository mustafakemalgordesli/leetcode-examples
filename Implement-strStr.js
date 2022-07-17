// Implement strStr().
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Input: haystack = "hello", needle = "ll"
// Output: 2

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] == needle[0]) {
      let isTrue = true;
      for (let b = i + 1; b < i + needle.length; b++) {
        if (haystack[b] != needle[b - i]) {
          isTrue = false;
          break;
        }
      }
      if (isTrue) return i;
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));
