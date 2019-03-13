//write a function called linearSearch which accepts
//an array and a value, and returns the index
//at which the value exists. If the value does not exist
//in the array, return -1;

//donot use indexof to implement this function!

function linearSearch(arr, pos) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pos) {
      console.log(i);
      return i;
    }
  }
  console.log(-1);
  return -1;
}

linearSearch([10, 15, 20, 25, 30], 15); // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); //5
