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
Qu.Extract the numbers and calculate the total annual income of the person from the following text. ???He earns 5000 euro from salary per month, 15000 euro annual bonus, 10000 euro online courses per month.?

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

<li>
Declare a function called sumOfEven, it takes a positive integer as a parameter and it returns the sum of all numbers

```Js
let sumOfAll = (n) => {
  return (n * (n + 1)) / 2
}

console.log(sumOfAll(10))

```

</li>

<li>
Declare an object called person, it has firstName, lastName, age, country, getPersonInfo keys. The getPersonInfo is a method which return about the person object. eg.
I am Asabeneh Yetayeh. I am 200 years old. I live in from Finland.

```Js
let person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 200,
  country: 'Finland',
  getPersonInfo: function () {
    return `I am ${this.firstName} ${this.lastName}. I am ${this.age} years old. I live in from ${this.country}`
  },
}

console.log(person.getPersonInfo())

```

</li>
<li>
Looping a triangle Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######

```Js
let line

for (let line = '#'; line.length < 8; line += '#') console.log(line)
```

Another Solution

```Js
const triangle = (num) => {
  let triangle = []
  let line = ''
  do {
    // console.log(line)
    line = line + '#'
    triangle.push(line)
  } while (line.length < num)

  return triangle
}

console.log(triangle(8))
```

</li>

<li>

FizzBuzz Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"for numbers divisible by only one of those).

```Js
const fizzBuzz = () => {
  let arr = []
  for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push('FizzBuzz')
    }
    if (i % 3 == 0) {
      arr.push('Fizz')
    }
    if (i % 5 == 0) {
      arr.push('Buzz')
    } else {
      arr.push(i)
    }
  }
  return arr
}

console.log(fizzBuzz())
```

</li>

<li>
Maximum Math.max returns its largest argument. We can build something like that now. Write a function findMax that takes three arguments and returns their maxiumum. Without method Math.max method.

```js
const findMax = (...a) => {
  let value = Math.max(...a)
  console.log(value)
}

console.log(findMax(0, 10, -2))
```

```Js
var arr = [0, 10, 1]
var largest = arr[0]

for (var i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i]
  }
}
console.log(largest)
```

</li>

<li>
Reversing an array Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.

```Js
const reverseArray = (arr) => {
  console.log(arr.reverse())
}

console.log(reverseArray(['a', 'b', 'c']))
```

</li>

<li>
Modifying an array Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and returns the array. If the array length is less than five it return ???item not found???.

```Js
const modifyArray = (arr) => {
  let newArr = []

  if (arr.length < 5) {
    newArr.push('Not Found')
  } else {
    arr.splice(4, 1, arr[4].toUpperCase())
    newArr.push(arr)
    // newArr.push(arr[0], arr[1], arr[2], arr[3], arr[4].toUpperCase(), arr[5])
  }

  return newArr
}

```

</li>
<li>
Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique

```Js
(function sevenRandomNumbers() {
  let arr = []
  while (arr.length < 8) {
    let r = Math.floor(Math.random() * 10)
    if (arr.indexOf(r) === -1) {
      arr.push(r)
    }
  }
  console.log(arr)
})()

```

</li>
<li>
Write a function which takes any number of arguments and return the sum of the arguments

```Js
const sum = (...value) => {
  return value.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3))

```

</li>

<li>
Write a function which removes items from the middle of an array and replace with three items.

```Js
const removeMiddleItem = (arr, ...value) => {
  return [arr[0], ...value, arr[arr.length - 1]]
}
console.log(removeMiddleItem([1, 2, 3], 4, 5, 6))
```

</li>
<li>
Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false . Take two strings as arguments. Determine if second string matches ending of first string. Return boolean value. Example

yourFunc("integrity", "ity")
// true
yourFunc("integration", "tio")
// false
yourFunc("connection", "sion")
// false
yourFunc("connection", "tion")
// true

```Js
const yourFunc = (word, endWrd) => {
  let result = word.endsWith(endWrd)
  console.log(result)
}

console.log(yourFunc('connection', 'tion'))

```

</li>
<li>
Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph.

```Js
const paragraph =
  'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.'

const countWords = (para, word1, word2) => {
  return para.split(word1).length > para.split(word2).length
    ? `The word ${word1} more frequently occured than ${word2}`
    : `The word ${word2} more frequently occured than ${word1}`
}

console.log(countWords(paragraph, 'love', 'you'))
//The word love more frequently occurred than you.

```

</li>
<li>
Write a function which takes an array parameter and returns an array of the data types of each item:

```Js
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
```

</li>

<li>
Create a function which filter ages greater than 18 and Write a function which calculate the average age of the group.

```Js
const ages = [35, 30, 17, 18, 15, 22, 16, 20]

const agesGreaterEighteen = (num) => {
  return num.filter((value) => value > 18)
}

console.log(agesGreaterEighteen(ages))
//[35, 30, 22, , 20];
```

```Js
const ages = [35, 30, 17, 18, 15, 22, 16, 20]
const averageAge = (num) => {
  return Math.round(num.reduce((a, b) => a + b) / num.length)
}

console.log(averageAge(ages))
//22
```

</li>
<li>
Write a function named shuffle, it takes an array parameter and it returns a shuffled array.

```Js
let arr = [1, 2, 3, 4, 5]

function shuffle(array) {
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

console.log(shuffle(arr))
```

```Js
let arr = [1, 2, 3, 4, 5]

function shuffle(array) {
  let newArr = array.sort(() => Math.random() - 0.5)
  return newArr
}

console.log(shuffle(arr))
```

</li>

<li>
Write a function which can generate a random Finnish car code.

console.log(genCarPlateNum())
AFG-205
console.log(genCarPlateNum())
JCB-586

```Js
function genCarPlateNum() {
  let alphabet = [
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
  ]

  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let AlphArr = []
  let numArr = []
  let newArr = alphabet.sort(() => Math.random() - 0.5)
  let newNum = num.sort(() => Math.random() - 0.5)
  numArr.push(newNum[0], newNum[1], newNum[2])
  AlphArr.push(newArr[0], newArr[1], newArr[2])

  return `${AlphArr.join('')} - ${numArr.join('')}`
}

console.log(genCarPlateNum())

```

</li>

<li>
The following shopping cart has four products. Create an addProduct, removeProduct ,editProduct , removeAll functions to modify the shopping cart.

```Js
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

function addProduct(product) {
  shoppingCart.push(product)
  return shoppingCart
}

addProduct('Meat')
// ["Milk", "Coffee", "Tea", "Honey", "Meat"]

function editProduct(position, product) {
  shoppingCart.splice(position, 1, product)
  return shoppingCart
}

editProduct(3, 'Sugar')
// ["Milk", "Coffee", "Tea", "Sugar", "Meat"]

function removeProduct(num) {
  shoppingCart.splice(num, 1)
  return shoppingCart
}

removeProduct(0)
// ["Coffee", "Tea", "Sugar", "Meat"]

removeProduct(3)
// ["Coffee", "Tea", "Sugar"]

```

</li>

<li>
The following todoList has three tasks. Create an addTask, removeTask, editTask, toggleTask, toggleAll, removeAll functions to modify the todoList.

const todoList = [
{
task:'Prepare JS Test',
time:'4/3/2019 8:30',
completed:true
},
{
task:'Give JS Test',
time:'4/3/2019 10:00',
completed:false
},
{
task:'Assess Test Result',
time:'4/3/2019 1:00',
completed:false
}]

```Js
const addTask = (task, time, complete) => {
  const entries = new Map([
    ['task', task],
    ['time', time],
    ['completed', complete],
  ])

  const obj = Object.fromEntries(entries)
  todoList.push(obj)
  return todoList
}
```

```Js
const editTask = (taskNum, newTask, newTime, bool) => {
  todoList[taskNum].task = newTask
  todoList[taskNum].time = newTime
  todoList[taskNum].completed = bool
  return todoList
}

console.log(editTask(0, 'Complete Js Test', '11-02-2022 12.00', false))
```

</li>
<li>
Write a function which check if items of an array are unique?

```Js
const arrOne = [1, 4, 6, 2, 1]
const arrTwo = [1, 4, 6, 2, 3]

function checkUniqueness(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        if (arr[i] == arr[j]) {
          return true
        }
      }
    }
  }
  return false
}

console.log(checkUniqueness(arrOne))
//false
console.log(checkUniqueness(arrTwo))
//true
```

</li>

<li>
Write a function which filter users who has scoresGreaterThan85, Write a function which addUser to the user array only if the user does not exist. Write a function which addUserSkill which can add skill to a user only if the user exist. Write a function which editUser if the user exist in the users array.

```Js
const users = [
{
name:'Brook',
scores:75,
skills:['HTM', 'CSS', 'JS'],
age:16
},
{
name:'Alex',
scores:80,
skills:['HTM', 'CSS', 'JS'],
age:18
},
{
name:'David',
scores:75,
skills:['HTM', 'CSS'],
age:22
},
{
name:'John',
scores:85,
skills:['HTM'],
age:25
},
{
name:'Sara',
scores:95,
skills:['HTM', 'CSS', 'JS'],
age: 26
},
{
name:'Martha',
scores:80,
skills:['HTM', 'CSS', 'JS'],
age:18
},
{
name:'Thomas',
scores:90,
skills:['HTM', 'CSS', 'JS'],
age:20
}
];
```

```Js

function scoresGreaterThan85(user) {
  let newArr = []
  for (let i = 0; i < user.length; i++) {
    if (user[i].scores > 85) {
      newArr.push(user[i])
    }
  }
  console.log(new Arr())
}

scoresGreaterThan85(users)
```

```Js
function addUser(user, name, score, skill, age) {
  let nameArr = []
  let newObj = {}
  user.forEach((element) => {
    nameArr.push(element.name)
  })
  if (!nameArr.includes(name)) {
    newObj.name = name
    newObj.score = score || 0
    newObj.skill = skill || `NONE`
    newObj.age = age || 0
  } else {
    return `User Already exist`
  }
  user.push(newObj)
  return user
}

console.log(addUser(users, 'Raja', 76, ['HTM', 'CSS', 'JS'], 28))
```

```Js

function addUserSkill(user, name, skill) {
  let newName = []
  user.forEach((element) => newName.push(element.name))
  if (newName.includes(name)) {
    for (let property in user) {
      if (user[property].name == name) {
        user[property].skills = skill
      }
    }
  } else {
    return `${name} user does not exist`
  }
  return user
}

console.log(addUserSkill(users, 'Raja', ['React', 'Js']))
```

</li>

<li>
<ol type='1'>
<li>
Print the following pattern using loop and console.log(). (2.5 pts)

```Md
#
##
###
####
#####
######
#######
```

```Js
for(let i='#';i.length<8;i+='#'){
  console.log(i)
}
```

</li>
<li>
Print the following pattern using loop and console.log(). (2.5 pts)

```Md
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
```

```Js
for (var input = 0; input <= 10; input++) {
  console.log(`${input}??${input}=${input * input}`)
}

//Another Method

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num.forEach((element) =>
  console.log(`${element}??${element}=${element * element}`)
)
```

</li>
<li>
Print the following pattern using loop and console.log(). (2.5 pts)

```Md
i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000
```

```Js
for (let index = 0; index < 10; index++) {
  console.log(`${index}   ${index * index}   ${index * index * index}`)
}
```

</li>
<li>
Given an array of integers, and a number ???sum???, find the number of pairs of integers in the array whose sum is equal to ???sum???.

```Js
let arr = [1, 5, 7, -1]

const sumUpToNum = (arr, total) => {
  let bool
  arr.reduce((prevValue, currValue) => {
    if (prevValue + currValue == total) {
      bool = true
    }
  })
  return bool || false
}

console.log(sumUpToNum(arr, 9))
```

```Js
// By checking all pairs (brute force solution):

// Time complexity: O(n???)
// Space complexity: O(1)

let arr = [1, 5, 7, -1]
function findPair(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == k) return true
    }
  }
  return false
}

console.log(findPair(arr, 9))
```

</li>
</ol>
</li>
<li>
Find the first repeated character in a string

```Js
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
```

</li>
</ol>
