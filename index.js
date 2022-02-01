// Write a function called checkDataTypes it takes an array and a data type. It returns true if all the array items are the same data types.

// const numbers = [1, 3, 4]
// const names = ['Asab', 'Eyob']
// const bools = [true, false, true, true, false]
// const mixedData = ['Asab', 'JS', true, 2019, { name: 'Asab', lang: 'JS' }]
// const obj = [{ name: 'Asab', lang: 'JS' }]
//       console.log(checkDataTypes(numbers, 'number')) // true
//       console.log(checkDataTypes(numbers, 'string')) // false
//       console.log(checkDataTypes(names, 'string')) // true
//       console.log(checkDataTypes(bool, 'boolean')) // true
//       console.log(checkDataTypes(mixedData, 'boolean')) // false
//       console.log(checkDataTypes(obj, 'object')) // true

const numbers = [1, 3, 4]
const names = ['Asab', 'Eyob']
const bool = [true, false, true, true, false]
const mixedData = ['Asab', 'JS', true, 2019, { name: 'Asab', lang: 'JS' }]
const obj = [{ name: 'Asab', lang: 'JS' }]

const checkDataTypes = (arr, dataType) => {
  let bool = Boolean
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == dataType) {
      bool = true
    } else {
      bool = false
    }
  }
  return bool
}

console.log(checkDataTypes(numbers, 'number')) // true
console.log(checkDataTypes(numbers, 'string')) // false
console.log(checkDataTypes(names, 'string')) // true
console.log(checkDataTypes(bool, 'boolean')) // true
console.log(checkDataTypes(mixedData, 'boolean')) // false
console.log(checkDataTypes(obj, 'object')) // true
