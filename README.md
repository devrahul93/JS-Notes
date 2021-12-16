"# JS-Notes"

The first JavaScript engine was created by Brendan Eich in 1995 for the Netscape Navigator web browser.

a = b \* 2;

here it tells the computer roughly to get a current stores value of variable b ,multiply by the value 2, then store the result back into another variable we call a. a and b are variables ,\* and = is and operator. "=" is known as assignment operator.

# _TransPiler(Babel)_ =>

Javascript is not a forward compatible language means a code written in 2019 can not run in program of 2016. whereas HTML and CSS are forward compatible it will skip over the new syntax and runs the code. thats why we use _*transpiler*_ like _Babel_ that converts newer JS syntax to older JS syntax.

<h1>Three pillar of JS</h1>

- Types/Coercion
- Scope/Closure
- this/prototypes

<h2 style="color:red;">Types & Coercion</h2>

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

<h1>Programming Piller(in JS)</h1>

- Values
- Operation
- Variable
- Expression and Statement
- Decision
- Loops
- Function

**Operation** =>
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

**Expression and Statement** =>
a = b \* 2;
This is a _statement_.This statement is made up of four _expressions_ .

1. 2 is a _literal value expression_.
2. b is a _variable expression_.which means to retrive its current value.
3. b \* 2 is an _arithmetic expression_. which means do multiplication.
4. a = b \* 2 is an _assignment expression_.which means to assign the result of b \*2 expression to a variable a.
   /n

- note:- This expression is then translated (compiled or interperated) into computer language. Interperating the code means executing the code from top to bottom . but Javascript is a compiled language,the translation is done ahead of time.The javascript engine actually compile the program on the fly and then immediately runs the compiled code. All relevant modern engines use just-in-time compilation for improved performance.
