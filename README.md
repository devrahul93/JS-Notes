"# JS-Notes"

The first JavaScript engine was created by Brendan Eich in 1995 for the Netscape Navigator web browser.

Javascript is a synchronous single-threaded language. All code is executed in Exection Context.first variable and created in memeory and then it gets executed.

<table>
  <tr>
    <th>Memory/Variable Environment</th>
    <th>Code/ Thread of Execution</th>
  </tr>
  <tr>
    <td>a:10 /fn:{..}</td>
    <td>here code is executed one by one</td>
  </tr>
</table>

<h1>Hosting In Javascript</h1>

```Javascript
  getName(); //Namaste Javascript
  console.log(x); //Undefined
  console.log(getName); //function

  var x=7;

  function getName(){
    console.log('Namaste Javascript')
  }
```

It happens as first variable are alloted in memory with a value of undefined and function with its all of its value in memory .than in thread of execution all the code is executed one by one. like varaibe is given its value and function is executed.

<h3>Difference between not defined and undifined?</h3>
<p> Not defined means the varaible has not assigned a value in a memory .Undefined means the varible is present in the memory but has not been alloted a value</p>

a = b \* 2;

here it tells the computer roughly to get a current stores value of variable b ,multiply by the value 2, then store the result back into another variable we call a. a and b are variables ,\* and = is and operator. "=" is known as assignment operator.

# _TransPiler(Babel)_ =>

Javascript is not a forward compatible language means a code written in 2019 can not run in program of 2016. whereas HTML and CSS are forward compatible it will skip over the new syntax and runs the code. thats why we use _*transpiler*_ like _Babel_ that converts newer JS syntax to older JS syntax.

<h1>Three pillar of JS</h1>

- Types/Coercion
- Scope/Closure
- this/prototypes

<h2>Types & Coercion</h2>

- Primitive Types
- Converting Types
- Checking equality

<h3>Primitive Types</h3>

- Undefined
- String
- Number
- Boolean
- Object
- Symbol

type of (function)// It return function
typeof({})//It return object
typeof([])//It return object not array
var v=null
typeof(v)// It returns undefined

- note:- Use New keyword => The new operator lets developer create an instance of a user defined object type or of one of built in object types that has a constructor function. <br/>
<strong>Use new:</strong>
<ul>
  <li>Object()</li>
  <li>Array()</li>
  <li>Function()</li>
  <li>Date()</li>
  <li>RegExp()</li>
  <li>Error()</li>
</ul>

<strong>Don't Use New</strong>

<ul>
  <li>String()</li> 
  <li>Number()</li> 
  <li>Boolean()</li> 
</ul>

<h1>Programming Piller(in JS)</h1>

- Values
- Operation
- Variable
- Expression and Statement
- Decision
- Loops
- Function

<h2>Operation =></h2>
_common operator in javascript_

- _Assignment_ => =

- _Math_ =>
  +,-,\*,/

- _Compound Assignment_ =>
  +=,-+,and /= it is when we combine math operator with assignment +=2(a=a+2)

- _Object Property Access_ =>
  objects are value that hold other value at specific location called properties. obj.a means an object of value obj with a property name a.

- _Equality_ =>
  ==(loose equal),===(strictly equal),!=(loose not equal), !==(strict not equal)

- _Comparison_ =>
  <,>,<=,>=

- _Logical_ =>
  &&(and),||(or)

<h2>Expression and Statement</h2> =>
a = b \* 2;
This is a _statement_.This statement is made up of four _expressions_ .

1. 2 is a _literal value expression_.
2. b is a _variable expression_.which means to retrive its current value.
3. b \* 2 is an _arithmetic expression_. which means do multiplication.
4. a = b \* 2 is an _assignment expression_.which means to assign the result of b \*2 expression to a variable a.
   /n

- note:- This expression is then translated (compiled or interperated) into computer language. Interperating the code means executing the code from top to bottom . but Javascript is a compiled language,the translation is done ahead of time.The javascript engine actually compile the program on the fly and then immediately runs the compiled code. All relevant modern engines use just-in-time compilation for improved performance.

<h2>Practise</h2>
<ol>

<li>
Qu. Write a function called greet which take name and role as parameters. Use your function to greet all the your classmates.

```js
const greet = (name, role) => {
  return `Hi Angelica,nice to meet you I am ${name} and i am ${
    role || 'student'
  }`
}
console.log(greet('Raja'))
```

</li>
<li>
Qu.Write a function called greetStudents, which take an array of names. Use your function to greet all the your classmates.

```js
const names = [
  'Pradip',
  'Van',
  'Thanh',
  'Thanh',
  'Ca',
  'Joshua',
  'Devendra',
  'Anzhelika',
]
const nameCalling = (...arr) => {
  for (const element of arr) {
    console.log(`Hi Angelica,my Name is ${element} nice to meet You`)
  }
}
nameCalling(...names)
```

</li>
<li>
Qu.Extract the numbers and calculate the total annual income of the person from the following text. ‘He earns 5000 euro from salary per month, 15000 euro annual bonus, 10000 euro online courses per month.?

```Js

const income = (salary, bonus, extra) => {
return `${(salary * 12)+bonus+extra} is his total income`;
};

console.log(income(5000, 15000, 10000));

```

</li>
<li>
Qu.In English language some words come more often than others to a sentence. Write a function called mostFrequentWords it takes a sentence or a paragraph as a parameter and return an array of objects. The object key is the word and its number of occurrence is the value. What are the ten most frequent words in a sentence or a paragraph of an English language.

```Js
const mostFrequentWords=()=>{
   return()
 }
```

</li>
<li>
Qu.write function for palindrome with removing spaces and extra character

```Js
function palindrome(str) {
let newStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
let reverseStr = newStr.split('').reverse().join('')

return newStr == reverseStr ? true : false}
```

</li>

<li>
Qu.Convert the given number into a roman numeral.

```Js
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

```

</li>
<li>
Qu.Return Caesar Cypher which adds the character and add 13 to it.

```Js
function rot13(str) {
  var alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ' ',
    '-',
    '_',
    '.',
    '&',
    '?',
    '!',
    '@',
    '#',
    '/',
  ]

var alphabets13 = [
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z',
'A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
' ',
'-',
'_',
'.',
'&',
'?',
'!',
'@',
'#',
'/',
]

var resultStr = []
for (let i = 0; i < str.length; i++) {
for (let j = 0; j < alphabets.length; j++) {
if (str[i] === alphabets[j]) {
resultStr.push(alphabets13[j])
}
}
}
return resultStr.join('')
}

console.log(rot13('SERR PBQR PNZC'))

```

</li>
<li>
qu.telephone number validation

```js
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
```

</li>
<li>
Qu.Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

```Js
function spinWords(string){
  let newStr=string.split(/(\s+)/);
  let copyStr=[];
  for(let i=0;i<newStr.length;i++){
    if(newStr[i]<5){
      copyStr.push(newStr[i])
    }else{
      copyStr.push(newStr[i].split('').reverse().join(''))
    }
  }
  return copyStr.join('')g
}
```

</li>
<li>
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

```Js
function narcissitic(value){
  let newValue=[...value+'']
  let Map1=newValue.map(x => Math.pow(x,newValue.length));
  let Map2=Map1.reduce((a,b)=>a+b);
  return value==Map2?true:false
}

```

</li>

<li>
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify( "64607935616") == "#######5616"
maskify( "1") == "1"
maskify( "") == ""

```Js
let newCC = cc.split('').reverse()
  let numCC = newCC.map((x) => +x)
  let z = []
  // for (i = 0; i < newCC.length - 4; i++) {
  //   z.push(newCC[i])
  // }

  let number = newCC.length - (newCC.length - 4)

  for (i = 0; i < number; i++) {
    z.push(newCC[i])
  }

  for (i = 0; i < newCC.length - 4; i++) {
    z.push('*')
  }

  return z.reverse().join('')

```

</li>

<li>
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

<p>This one take more execution time</p>

```Js
function sumPairs(ints, s) {
  for (let i = 1; i < ints.length; i++) {
    for (let j = 0; j < i; j++) {
      if (ints[i] + ints[j] === s) return [ints[j], ints[i]]
    }
  }
}

```

<p>This one is fast</p>

```Js
function sumPairs(ints, s) {
   const intsSet = new Set();
  for (let i = 0; i < ints.length; i++) {
    let currInt = ints[i];
    if (intsSet.has(s - currInt)) return [s - currInt, currInt];
    else intsSet.add(currInt);
  }
}
```

</li>

<li>
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

```Js

function openOrSenior(data) {
  let result = String
  let arr = []

  data.forEach((element) => {
    element[0] >= 55 && element[1] > 7 ? arr.push('Senior') : arr.push('Open')
  })

  return arr
}

```

</li>

<li>
Qu. Write a function called stat which calculate mean, median and range of an array.

     const numbers = [80, 85,70, 90, 65, 90, 80];
     stat(numbers).mean()
     stat(numbers).median()
     stat(numbers).range()

```Js

 const numbers = [80, 85, 70, 90, 65, 90, 80]

const stat = (num) => {
  let total = num.reduce((x, y) => x + y)
  let sortedNum = num.sort()


  return {
    mean: function () {
      return total / num.length
    },

    median: function () {
      if (sortedNum.length % 2) {
        return sortedNum[sortedNum.length / 2 - 0.5]
      } else {
        return (
          (sortedNum[sortedNum.length / 3] +
            sortedNum[sortedNum.length / 3 + 1]) /
          2
        )
      }
    },

    range: function () {
      return sortedNum[sortedNum.length - 1] - sortedNum[0]
    },
  }
}

stat(numbers).mean()
stat(numbers).median()
stat(numbers).range()

```

</li>

<li>
Qu.A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  console.log(name, skills, scores)
  console.log(jsScore, reactScore)

```Js
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let [name, skills, scores] = student
let jsScore = scores[2]
let reactScore = scores[3]

```

</li>

<li>
Qu.Write a function called convertArrayToObject which can convert the array to a structured object.
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]

    console.log(convertArrayToObject(students))
    [
      {
        name: 'David',
        skills: ['HTM','CSS','JS','React'],
        scores: [98,85,90,95]
      },
      {
        name: 'John',
        skills: ['HTM','CSS','JS','React'],
        scores: [85, 80,85,80]
      }
    ]

```Js
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
```

</li>

<li>
Copy the student object to newStudent without mutating the original object. In the new object add the following ?

<ol type='i'>
    <li>
    Add Bootstrap with level 8 to the front end skill sets
    </li>
    <li>
    Add Express with level 9 to the back end skill sets
    </li>
    <li>
    Add SQL with level 8 to the data base skill sets
    </li>
    <li>
    Add SQL without level to the data science skill sets
    </li>
</ol>

```Js
    const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }

```

The copied object output should look like this:

```Object
{
name: 'David',
age: 25,
skills: {
frontEnd: [
{skill: 'HTML',level: 10},
{skill: 'CSS',level: 8},
{skill: 'JS',level: 8},
{skill: 'React',level: 9},
{skill: 'BootStrap',level: 8}
],
backEnd: [
{skill: 'Node',level: 7},
{skill: 'GraphQL',level: 8},
{skill: 'Express',level: 9}
],
dataBase: [
{ skill: 'MongoDB',level: 7.5},
{ skill: 'SQL',level: 8}
],
dataScience: ['Python','R','D3.js','SQL']
}
}
```

```Js
const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 },
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js'],
  },
}
student.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 })

student.skills.backEnd.push({ skill: 'Express', level: 9 })

student.skills.dataBase.push({ skill: 'SQL', level: 8 })
student.skills.dataScience.push('SQL')

```

</li>

<li>
<ol type='i'>
<li>
'Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon'. This string contains big IT companies. Write a function called companiesWithTwoOs check if the company has two os are return an array containing the companies.
</li>
<li>
Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
</li>
<li>
Write the function called tenMostSpokenLanaguages, it takes the countriesobject and return the array of objects. The language is key and value is the number of places the language is spoken.
</li>
</ol>

```Js
// 'Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon'. This string contains big IT companies. Write a function called companiesWithTwoOs check if the company
// has two os are return an array containing the companies.

const companies = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'

const companiesWithTwoOs = (cmp) => {
  let newCmp = cmp.match(/\w*(\w)\w*\1\w*/gm)
  let arr = []
  newCmp.forEach((element) => {
    if (element.split('').includes('o')) {
      arr.push(element)
    }
  })

  return arr

  // EXPLANATION

  // NODE                     EXPLANATION
  // --------------------------------------------------------------------------------
  //   \w*                      word characters (a-z, A-Z, 0-9, _) (0 or
  //                            more times (matching the most amount
  //                            possible))
  // --------------------------------------------------------------------------------
  //   (                        group and capture to \1:
  // --------------------------------------------------------------------------------
  //     \w                       word characters (a-z, A-Z, 0-9, _)
  // --------------------------------------------------------------------------------
  //   )                        end of \1
  // --------------------------------------------------------------------------------
  //   \w*                      word characters (a-z, A-Z, 0-9, _) (0 or
  //                            more times (matching the most amount
  //                            possible))
  // --------------------------------------------------------------------------------
  //   \1                       what was matched by capture \1
  // --------------------------------------------------------------------------------
  //   \w*                      word characters (a-z, A-Z, 0-9, _) (0 or
  //                            more times (matching the most amount
  //                            possible))
}

companiesWithTwoOs(companies)
console.log(companiesWithTwoOs(companies))

```

```Js
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

```

```Js
Will Do it Later
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

```

</li>

<li>
Make a function called add which give truthy value when add(a, b) === add(a)(b)

```Js
WILL DO IT LATER
    console.log(add(2,3)) //5
    console.log(add(2)(3)) //5
    console.log(add(2,3) === add(2)(3)) // true
```

</li>

<li>
Write a function called checkDataTypes it takes an array and a data type. It returns true if all the array items are the same data types.

```Js
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

```

</li>

<li>
 Declare firstName, lastName, age variables and assign your first name, your last name and your age to the variables.

Concatenate the firstName , a space and lastName variable and assigned to a fullName variable.

Check if your name is long or short. If the length of your first name is greater than 7, you have a long name else you have a short name

```Js
const firstName = 'Pankaj'
const lastName = 'Dubey'
let age = 30

let fullName = `${firstName} ${lastName}`

let cheker = (name) => {
  return name.split('').length >= 7 ? `it is too big` : `it is ok`
}
console.log(cheker(firstName))
cheker(firstName)
```

</li>

<li>
 Declare an array called shoppingBasket and put at least 5 items you commonly put to your shopping basket.

```Js
let shoppingBasket = []

shoppingBasket.push('Saamosa', 'chop')
shoppingBasket.unshift('kela')
shoppingBasket.push('rosogulla', 'peda', 'barfi', 'ladu')
shoppingBasket.shift()

console.log(shoppingBasket.indexOf('peda'))
```

</li>

<li>
// Declare a function called listShoppingItems, it takes your shopping basket array you declared at question 4 as a parameter and it prints out the capitalized shopping items.

```Js
const list = ['Banana', 'Tomato', 'Milk', 'Egg']

let listShoppingItems = (list) => {
  let arr = []

  list.forEach((element) => arr.push(element.toUpperCase()))
  return arr.toString()
}

console.log(listShoppingItems(list))
listShoppingItems(list)
// BANANA
// TOMATO
// MILK
// EGG
```

</li>
Declare a function called randomNumbers which can return an array of 7 numbers which range 1-20.

```Js

let randomNumbers = () => {
  var arr = []
  while (arr.length < 7) {
    var r = Math.floor(Math.random() * 20) + 1
    if (arr.indexOf(r) === -1) arr.push(r)
  }
  return arr
}

console.log(randomNumbers())

```

<li>
</li>
</ol>
