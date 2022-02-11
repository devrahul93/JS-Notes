//Write a function which check if items of an array are unique?

const arrOne = [1, 4, 6, 2, 1]
const arrTwo = [1, 4, 6, 2, 3]

function checkUniqueness(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        if (arr[i] == arr[j]) {
          return true
        }
      }
    }
  }
  return false
}

console.log(checkUniqueness(arrOne))
//false
console.log(checkUniqueness(arrTwo))
//true
