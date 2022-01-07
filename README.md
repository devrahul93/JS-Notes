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
<ul>
<li>
```Javascript
  const names = [
'Pradip',
'Van',
'Thanh',
'Thanh',
'Ca',
'Joshua',
'Devendra',
'Anzhelika'
]
console.log(greetStudents(names))
    Hi Angelica, nice to meet you. I am Asabeneh. Welcome to Integrify.
    ...
```
</li>
<li>
1. Write a function called greet which take name and role as parameters. Use your function to greet all the your classmates.
Answer:```JavaScript
const greet=(name,role)=>{
  return `Hi Angelica,nice to meet you I am ${name} and i am ${role||'student'}`
}
console.log(greet('Raja'))
```

</li>
</ul>
