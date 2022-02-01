// function add(a, b) {
//   if (typeof b === 'undefined')
//     return function (c) {
//       return a + c
//     }
//   return a + b
// }

// let add = (a, b) => (b == +b ? a + b : (c) => a + c)

function add(a, b) {
  return b == +b
    ? a + b
    : function (c) {
        return a + c
      }
}

console.log(add(2)(3))
console.log(add(2 + 3))
