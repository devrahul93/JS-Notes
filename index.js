function convertToRoman(num) {
  let defaultValue = ''

  let lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  for (key in lookup) {
    // console.log(key)
    // It returns the key of the object
    // console.log(lookup[key])
    // It return the value of the object
    while (num >= lookup[key]) {
      defaultValue += key
      num -= lookup[key]
    }
  }

  return defaultValue
}

console.log(convertToRoman(915))
