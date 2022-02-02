// Declare a function called randomNumbers which can return an array of 7 numbers which range 1-20.

// randomNumbers()
// [9,4, 3, 5, 2, 8, 2]

let randomNumbers = () => {
  var arr = []
  while (arr.length < 7) {
    var r = Math.floor(Math.random() * 20) + 1
    if (arr.indexOf(r) === -1) arr.push(r)
  }
  return arr
}

console.log(randomNumbers())

// var arr = []
// while (arr.length < 8) {
//   var r = Math.floor(Math.random() * 20) + 1
//   if (arr.indexOf(r) === -1) arr.push(r)
// }
// console.log(arr)
