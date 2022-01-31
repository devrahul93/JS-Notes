'use strict'
// Write a function called convertArrayToObject which can convert the array to a structured object.
//     const students = [
//         ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//         ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
//       ]

//     console.log(convertArrayToObject(students))
//     [
//       {
//         name: 'David',
//         skills: ['HTM','CSS','JS','React'],
//         scores: [98,85,90,95]
//       },
//       {
//         name: 'John',
//         skills: ['HTM','CSS','JS','React'],
//         scores: [85, 80,85,80]
//       }
//     ]

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
]

const convertArrayToObject = (arr) => {
  const entries = new Map([
    ['name', arr[0][0]],
    ['skills', arr[0][1]],
    ['scores', arr[0][2]],
  ])

  const entries1 = new Map([
    ['name', arr[1][0]],
    ['skills', arr[1][1]],
    ['scores', arr[1][2]],
  ])

  const obj = Object.fromEntries(entries)
  const obj1 = Object.fromEntries(entries1)

  return [obj, obj1]
}

console.log(convertArrayToObject(students))
convertArrayToObject(students)
