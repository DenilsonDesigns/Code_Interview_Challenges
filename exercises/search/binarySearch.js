//Write a function called binary search which accepts a sorted
//array and a value and returns the index at which the value
//exists. Otherwise, return -1;

// function binarySearch(arr, val) {
//   let left = 0;
//   let right = arr.length - 1;
//   let found = false;

//   while (!found) {
//     let middle = (right - left) / 2;
//     // console.log(middle, arr[middle]);
//     if (val === arr[middle]) {
//       console.log("hit");
//       found = true;
//       console.log(middle);
//       return arr[middle];
//     } else if (val > arr[middle]) {
//       left = middle;
//       middle = (right - left) / 2;
//     } else if (val < arr[middle]) {
//       right = middle;
//       middle = (right - left) / 2;
//     }
//   }

//   //   console.log(right);
// }

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  //   console.log(start, middle, end);
  while (arr[middle] !== elem) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
    if (start > middle) {
      console.log(-1);
      return -1;
    }
  }

  return middle;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 16); //5;
// binarySearch([1, 2, 3, 4, 5], 3); //2;
