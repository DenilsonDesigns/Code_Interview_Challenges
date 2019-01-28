// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //MY SOLUTION
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;

  //SOLUTION #2
  //   const matches = str.match(/[aeiou]/gi);
  //   return matches? matches.length: 0;
}

vowels("hi there");

module.exports = vowels;
