/*
Create functions for the Calculator class that can do the following:
Add two numbers.
Subtract two numbers.
Multiply two numbers.
Divide two numbers.
*/
function Calculator() {

}

Calculator.prototype.add = function (num1, num2) {
  return num1 + num2;
}
Calculator.prototype.substract = function (num1, num2) {
  return num1 - num2
}
Calculator.prototype.multiply = function (num1, num2) {
  return num1 * num2
}
Calculator.prototype.divide = function (num1, num2) {
  return num1 / num2
}



