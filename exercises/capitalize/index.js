// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //   SOLUTION #1
  let words = str.split(" ");

  let balls = words.map(el => {
    return el.slice(0, 1).toUpperCase() + el.slice(1);
  });
  return balls.join(" ");

  //SOLUTION #2
  //   let result = str[0].toUpperCase();

  //   for (let i = 1; i < str.length; i++) {
  //     if (str[i - 1] === " ") {
  //       result += str[i].toUpperCase();
  //     } else {
  //       result += str[i];
  //     }
  //   }

  //   return result;
}

capitalize("i love breakfast at bill miller bbq");

module.exports = capitalize;
