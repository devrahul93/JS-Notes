// Write a function which takes any number of arguments and return the sum of the arguments

const sum = (...value) => {
  return value.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3))
