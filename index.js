// Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false . Take two strings as arguments. Determine if second string matches ending of first string. Return boolean value. Example

// yourFunc("integrity", "ity")
// true
// yourFunc("integration", "tio")
// false
// yourFunc("connection", "sion")
// false
// yourFunc("connection", "tion")
// true

const yourFunc = (word, endWrd) => {
  let result = word.endsWith(endWrd)
  console.log(result)
}

console.log(yourFunc('connection', 'tion'))
