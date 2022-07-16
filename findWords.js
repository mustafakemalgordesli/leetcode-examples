// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
// In the American keyboard:
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

const firstRow = "qwertyuiop".split("");
const secondRow = "asdfghjkl".split("");
const thirdRow = "zxcvbnm".split("");

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let tempWord = words[i].toLowerCase();
    let temp = "";
    for (let b = 0; b < words[i].length; b++) {
      for (let c = 0; c < firstRow.length; c++) {
        if (tempWord[b] === firstRow[c]) {
          temp += firstRow[c];
        }
      }
    }
    if (temp === tempWord) {
      result.push(words[i]);
    } else if (temp === "") {
      let temp = "";
      for (let b = 0; b < words[i].length; b++) {
        for (let c = 0; c < secondRow.length; c++) {
          if (tempWord[b] === secondRow[c]) {
            temp += secondRow[c];
          }
        }

        if (temp === tempWord) {
          result.push(words[i]);
        } else if (temp === "") {
          let temp = "";
          for (let b = 0; b < words[i].length; b++) {
            for (let c = 0; c < thirdRow.length; c++) {
              if (tempWord[b] === thirdRow[c]) {
                temp += thirdRow[c];
              }
            }
          }
          if (temp === tempWord) {
            result.push(words[i]);
            break;
          }
        }
      }
    }
  }
  return result;
};

console.log(
  findWords([
    "asdfghjkla",
    "qwertyuiopq",
    "zxcvbnzzm",
    "asdfghjkla",
    "qwertyuiopq",
    "zxcvbnzzm",
  ])
);
