// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //solution 1
  //   return str
  //     .split("")
  //     .reverse()
  //     .join("");

  //solution 2
  //   let reversed = "";

  //   for (const char of str) {
  //     reversed = char + reversed;
  //   }
  //   return reversed;

  //solution 3
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

module.exports = reverse;
