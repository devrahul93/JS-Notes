let number = [3, 4, 100, 6, 7]

const sumOfAllNumbers = (num) => {
  return num.reduce((x, y) => x + y)
}

console.log(sumOfAllNumbers(number))
sumOfAllNumbers(number)
