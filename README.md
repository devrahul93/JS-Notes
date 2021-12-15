"# JS-Notes"

The first JavaScript engine was created by Brendan Eich in 1995 for the Netscape Navigator web browser.

a = b \* 2;

here it tells the computer roughly to get a current stores value of variable b ,multiply by the value 2, then store the result back into another variable we call a. a and b are variables ,\* and = is and operator. "=" is known as assignment operator.

a = b \* 2;
This is a **statement**.This statement is made up of four **expressions** .

- 2 is a _literal value expression_.
- b is a _variable expression_.which means to retrive its current value.
- b \* 2 is an _arithmetic expression_. which means do multiplication.
- a = b \* 2 is an _assignment expression_.which means to assign the result of b \*2 expression to a variable a.

This expression is then translated (compiled or interperated) into computer language. Interperating the code means executing the code from top to bottom . but Javascript is a compiled language,the translation is done ahead of time.The javascript engine actually compile the program on the fly and then immediately runs the compiled code. All relevant modern engines use just-in-time compilation for improved performance.
**common operator in javascript**

- _Assignment_ =>
  =
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
