// Write the function called tenMostSpokenLanaguages, it takes the countriesobject and return the array of objects. The language is key and value is the number of places the language is spoken.

import { objCountries } from './data.js'

// console.log(objCountries)

// for (const property in objCountries) {
//   console.log(`${property}:${objCountries[property]}`)
// }

objCountries.forEach((element) => {
  let lang = element.languages.join()
  //   lang.push(element.languages)
  console.log(typeof lang)
})
