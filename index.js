const numbers = [80, 85, 70, 90, 65, 90, 80]

const stat = (num) => {
  let total = num.reduce((x, y) => x + y)
  let sortedNum = num.sort()

  return {
    mean: function () {
      return total / num.length
    },

    median: function () {
      if (sortedNum.length % 2) {
        return sortedNum[sortedNum.length / 2 - 0.5]
      } else {
        return (
          (sortedNum[sortedNum.length / 3] +
            sortedNum[sortedNum.length / 3 + 1]) /
          2
        )
      }
    },

    range: function () {
      return sortedNum[sortedNum.length - 1] - sortedNum[0]
    },
  }
}

stat(numbers).mean()
stat(numbers).median()
stat(numbers).range()
