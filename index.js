// input =  [(18, 20), (45, 2), (61, 12), (37, 6), (21, 21), (78, 9)]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap

let Data = [
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]

let result = ['Open', 'Senior', 'Open', 'Senior']

function openOrSenior(data) {
  let result = String
  let arr = []

  data.forEach((element) => {
    element[0] >= 55 && element[1] > 7 ? arr.push('Senior') : arr.push('Open')
  })

  return arr
}

console.log(openOrSenior(Data))
