function telephoneCheck(str) {
  let re = /^(1\s?)?(\d{3}|\(d{3}\)[/-/s]?)\d{3}[/-/s]?\d{4}$/
  //for optional we use question mark
  //it is optional to start with space
  //it is also optional to start with one
  //d is for how many digit in the{}
  //"|" it is or

  return re.test(str)
}

telephoneCheck('555-555-5555')
console.log('heelo')
