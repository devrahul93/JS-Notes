import { countries } from './data.js'

// console.log(countries)
//find countries with initial

const firstWord = (initial) => {
  let caps = initial.toUpperCase()
  let word = []
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].startsWith(caps)) {
      word.push(countries[i])
    }
  }
  console.log(word)
}

firstWord('a')
