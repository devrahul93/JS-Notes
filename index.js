// Maximum Math.max returns its largest argument. We can build something like that now. Write a function findMax that takes three arguments and returns their maxiumum. Without method Math.max method.

// console.log(findMax(0, 10, 5));
// 10
// console.log(findMax(0, -10,-2));
// 0

// const findMax = (...a) => {
//   let value = Math.max(...a)
//   console.log(value)
// }

// console.log(findMax(0, 10, -2))

var arr = [0, 10, 1]
var largest = arr[0]

for (var i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i]
  }
}
console.log(largest)
