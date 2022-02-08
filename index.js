// Write a function which removes items from the middle of an array and replace with three items.

// removeMiddleItem([1,2,3], 4,5,6)
// [1,4,5,6,3]
// removeMiddleItem([1,2,3,4], 4,5,6)
//  [1,4,5,6,4]

const removeMiddleItem = (arr, ...value) => {
  return [arr[0], ...value, arr[arr.length - 1]]
}
console.log(removeMiddleItem([1, 2, 3], 4, 5, 6))

removeMiddleItem([1, 2, 3, 4], 4, 5, 6)
