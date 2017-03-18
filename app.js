/*
* What do these expressions evaluate to? 
* Run your program in the terminal using the command `node app.js`
* Check your answers using console.log();
*/

/*
* Arithmetic Operators
*/

// Addition (+)
console.log(5 + 9);//14


console.log("one" + "one");//'oneone'

// Subtraction (-)
console.log(8 - 20);//-12

// Multiplication (*)
2 * 0;//0

// Division (/)
15/50;//0.3

// Modulus (%)
5 % 2;//1

// Increment (++)
//2++;
var a = 2;
a++;
console.log("Increment", a);
-1++;
var b = -1;
b++;
console.log(b);
// Decrement (--)
5--;
var c = 5;
c--;
console.log(c);

/*
* Comparison Operators (These return a boolean value of true or false)
* For those with the boolean answer false, change the expression to evaluate to true
*/

// Strict Equal (===)
5 === "five";//false
5 === 5//true
// Not Equal (!==)
5!== "five";//true

// Greater Than (>)
5 > 10;//false
5 < 10;//true
// Less Than (<)
"20" < 20;//false
20 == 20;//true
// Greater than or Equal to (>=)
undefined >= null;//false

// Less than or Equal to (<=)
null <= null; //true

/*
* Logical (or Relational) Operators
*/

// And (&&) - If both the operands satisfy the statment, then the condition becomes true
1 > 0 && 1 < 0;//false

// Or (||) - If any of the two operands satisfy the statement, then the condition becomes true.
2 > 0 || 2 > 20;//true

// Not (!) - Reverses the logical state of its operand.
!true;//false

/*
* Conditionals
* Using the variables given to you, create if, else, and else if statements
*/
var a = "apple";//'apple'
var b = 2;//2