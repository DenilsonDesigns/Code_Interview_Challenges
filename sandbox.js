/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let counter = 0;
  //for each J, loop through S and +1 for each hit
  for (let el of J) {
    for (let char of S) {
      if (el === char) {
        counter++;
      }
    }
  }
  return counter;
};

numJewelsInStones("z", "ZZ");
