// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //my solution
  //   let negative = false;
  //   let newN = n.toString().split("");
  //   if (newN[0] === "-") {
  //     negative = true;
  //   }
  //   newN = newN.reverse();
  //   if (negative) {
  //     newN.unshift("-");
  //   }
  //   newN = parseInt(newN.join(""));
  //   return newN;

  //solution 1
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
