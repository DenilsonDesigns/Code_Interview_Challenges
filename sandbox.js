function areThereDuplicates() {
  let obj = {};
  let duplicate = false;

  for (let i = 0; i < arguments.length; i++) {
    if (!obj[arguments[i]]) {
      obj[arguments[i]] = 1;
    } else {
      obj[arguments[i]] += 1;
    }
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      duplicate = true;
    }
  }
  console.log(duplicate);
  return duplicate;
}

areThereDuplicates(1, 2, 3); //false
areThereDuplicates(1, 2, 2); //true
areThereDuplicates("a", "b", "c", "a"); //true
