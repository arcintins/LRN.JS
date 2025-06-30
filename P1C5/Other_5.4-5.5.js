// Task 1
// https://www.codewars.com/kata/59a9919107157a45220000e1/javascript
// Given an array (a list in Python) of integers and an integer n, 
// find all occurrences of n in the given array and return another 
// array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].
// Assume that n and all values in the given array will always be integers.

function findAll(array, n) {
  return array.reduce((result, el, index) => {
    if (el === n) result.push(index);
    return result;
  }, [])
}

// Example:
console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)) // [2, 4]

// End Task 1

// Task 2
// https://www.codewars.com/kata/57a31ce7cf1fa5a1e1000227/javascript
// You will be given an array which lists the current inventory of stock in your 
// store and another array which lists the new inventory being delivered to your store today.
// Your task is to write a function that returns the updated 
// list of your current inventory in alphabetical order.

function updateInventory(curStock, newStock) {
  curStock.forEach((el) => {[el[0], el[1]] = [el[1], el[0]]});
  let curStockObj = Object.fromEntries(curStock);
  newStock.forEach((el) => {
    if (curStockObj[el[1]]) { curStockObj[el[1]] += el[0] }
    else { curStockObj[el[1]] = el[0] }
  });

  return Object.entries(curStockObj).reduce((result, el) => {
    result.push([el[1], el[0]]);
    return result;
  }, []).sort((el1, el2) => {
    if (el2[1] > el1[1]) return -1;
    return 1;
  })
}

// Example:
currentStock = [[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']]
newStock = [[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']]

console.log(updateInventory(currentStock, newStock))  // =>
// [[15, 'Apple'], [25, 'HTC'], [5, 'LG'], [1000, 'Nokia'], [54, 'Samsung'], [43, 'Sony']]

// End Task 2

// Task 3
// https://www.codewars.com/kata/54f8b0c7a58bce9db6000dc4/javascript
// Create a function named "rotate" that takes an array and returns a 
// new one with the elements inside rotated n spaces.
// If n is greater than 0 it should rotate the array to the right. 
// If n is less than 0 it should rotate the array to the left. If n is 0, 
// then it should return the array unchanged.

function rotate(array,n){
  let realRotate = n > 0 ? n % array.length : array.length + n % array.length;
  let newArr = [...array.slice(array.length - realRotate), ...array.slice(0, array.length - realRotate)]
  return newArr;
}

// Example:
var data = [1, 2, 3, 4, 5];

rotate(data, 1) // => [5, 1, 2, 3, 4]
rotate(data, 2) // => [4, 5, 1, 2, 3]
rotate(data, 3) // => [3, 4, 5, 1, 2]
rotate(data, 4) // => [2, 3, 4, 5, 1]
rotate(data, 5) // => [1, 2, 3, 4, 5]

rotate(data, 0) // => [1, 2, 3, 4, 5]

rotate(data, -1) // => [2, 3, 4, 5, 1]
rotate(data, -2) // => [3, 4, 5, 1, 2]
rotate(data, -3) // => [4, 5, 1, 2, 3]
rotate(data, -4) // => [5, 1, 2, 3, 4]
rotate(data, -5) // => [1, 2, 3, 4, 5]
// Furthermore the method should take ANY array of objects and perform this operation on them:

rotate(['a', 'b', 'c'], 1)     // => ['c', 'a', 'b']
rotate([1.0, 2.0, 3.0], 1)     // => [3.0, 1.0, 2.0]
rotate([true, true, false], 1) // => [false, true, true]

// Finally the rotation shouldn't be limited by the indices available in the array. 
// Meaning that if we exceed the indices of the array it keeps rotating.

// Example:
rotate(data, 7)     // => [4, 5, 1, 2, 3]
rotate(data, 11)    // => [5, 1, 2, 3, 4]
rotate(data, 12478) // => [3, 4, 5, 1, 2]

// End Task 3

// Task 4

// End Task 4