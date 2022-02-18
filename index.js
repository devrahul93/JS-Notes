//Find the first repeated character in a string

let str = 'uniud'

function repeatedChar(str) {
  let newStr = str.split('')
  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < newStr.length; j++) {
      if (newStr[i] == newStr[j]) {
        return newStr[i]
      }
    }
  }
  return '\0'
}

console.log(repeatedChar(str))
