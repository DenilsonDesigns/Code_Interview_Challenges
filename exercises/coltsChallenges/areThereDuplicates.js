function areThereDuplicates() {
  let map = {};
  for (let index in arguments) {
    if (map[arguments[index]]) {
      return true;
    }
    map[arguments[index]] = map[arguments[index]] + 1 || 1;
  }
  return false;
}

areThereDuplicates("a", "b", "c", "a"); //true
// areThereDuplicates(1, 2, 2)//true
