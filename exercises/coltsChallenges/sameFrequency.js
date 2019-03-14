function sameFrequency(num1, num2) {
  return parseInt(
    num1
      .toString()
      .split("")
      .sort()
      .join("")
  ) ===
    parseInt(
      num2
        .toString()
        .split("")
        .sort()
        .join("")
    )
    ? true
    : false;
}

console.log(sameFrequency(182, 281)); //true
// console.log(sameFrequency(34, 14)); //false
