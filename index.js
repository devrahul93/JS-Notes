//Write a function which takes an array parameter and returns an array of the data types of each item:

const arr = ['Asabeneh', 100, true, null, undefined, { job: 'teaching' }]
const mixedData = ['John', 25, 'David', 30, 'Sara', 22]
const checkDatatTypes = (value) => {
  let array = []
  value.forEach((element) => array.push(typeof element))
  return array
}

console.log(checkDatatTypes(arr))
//['string', 'number', 'boolean', 'object', 'undefined', 'object']
console.log(checkDatatTypes(mixedData))
//['string', 'number', 'string', 'number', 'string', 'number']
