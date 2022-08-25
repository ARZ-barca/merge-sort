// merges two sorted arrays together
function merge(array1, array2) {
  let resultArray = [];
  while (array1.length !== 0 || array2.length !== 0) {
    if (array1.length === 0) {
      resultArray = resultArray.concat(array2);
      break;
    } else if (array2.length === 0) {
      resultArray = resultArray.concat(array1);
      break;
    }
    if (array1[0] <= array2[0]) {
      resultArray.push(array1.shift());
    } else if (array2[0] < array1[0]) {
      resultArray.push(array2.shift());
    }
  }
  return resultArray;
}

// test case for merge function
// console.log(merge([1, 2, 3, 5, 11], [3, 4, 5, 6]));

// actual mergesort function
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  return merge(
    mergeSort(array.slice(0, Math.floor(array.length / 2))),
    mergeSort(array.slice(Math.floor(array.length / 2)))
  );
}

// test case for mergeSort function
console.log(mergeSort([20, 1, 3, 2, 21, 90, 66, 55, 56, 40]));
