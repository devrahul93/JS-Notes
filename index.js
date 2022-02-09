//Write a function which calculate the average age of the group.

const ages = [35, 30, 17, 18, 15, 22, 16, 20]
const averageAge = (num) => {
  return Math.round(num.reduce((a, b) => a + b) / num.length)
}

console.log(averageAge(ages))
//22
