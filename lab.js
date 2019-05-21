/* Create window.prompt for users to input their first name into my lab calculator
   webpage. */
var userName = window.prompt("Please enter your first name:");


/* Modify the contents, so my greetingParagraph user's name is appended to the 
   ending of the 'Welcome to Arithmetic Operations are Fun.' */
var greetingpParagraph = document.getElementById("greeting-container1");
greetingpParagraph.innerHTML += ", " + userName;

/* Prompt the user to enter the first (1st) and second (2nd) number and store the
operandOne and operandTwo variables names to an integer values using 'parseint function'
in order to read using input, as a number and not a string.*/
var operandOne = parseInt(window.prompt("Please enter your first (1st) number:"));

var operandTwo = parseInt(window.prompt("Please enter your second (2nd) number:"));

/* */

var operand1 = document.getElementById("operand-container1");
operand1.innerHTML += operandOne;

var operand2 = document.getElementById("operand-container2");
operand2.innerHTML += operandTwo;

/* */

var total1 = operandOne + operandTwo;
var total2 = operandOne - operandTwo;
var total3 = operandOne * operandTwo;
var total4 = operandOne / operandTwo;
var total5 = operandOne % operandTwo;

/*var sum = document.getElementById("addition");
sum.innerHTML += total1;*/

document.getElementById("addition").innerHTML = "The sum of " + operandOne + " plus (+)" + operandTwo + " is " + total1 + ".";

/*var difference = document.getElementById("subtraction");
difference.innerHTML += total2;*/
document.getElementById("subtraction").innerHTML = "The difference between " + operandOne + " minus (-) " + operandTwo + " is " + total2 + ".";

/*var product = document.getElementById("multiplication");
product.innerHTML += total3;*/
document.getElementById("multiplication").innerHTML = "The product of " + operandOne + " times (*) " + operandTwo + " is " + total3 + ".";

/*var quotient = document.getElementById("division");
quotient.innerHTML += total4;*/
document.getElementById("division").innerHTML = "The quotient of " + operandOne + " divided by (/) " + operandTwo + " is " + total4 + ".";

/*var modResult = document.getElementById("modulus");
modResult.innerHTML += total5;*/

document.getElementById("modulus").innerHTML = "The modulus or remaining when dividing (%) " + operandOne + "  by " + operandTwo + " is " + total5 + ".";







