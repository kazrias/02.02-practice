/*
Create functions for the Calculator class that can do the following:
Add two numbers.
Subtract two numbers.
Multiply two numbers.
Divide two numbers.
*/
function Calculator() {
  this.add = function (num1, num2) {
    return num1 + num2;
  };
  this.subtract = function (num1, num2) {
    return num1 - num2;
  };
  this.multiply = function (num1, num2) {
    return num1 * num2;
  };
  this.divide = function (num1, num2) {
    return num1 / num2;
  };
}
let calc=new Calculator();
console.log(calc.add(1,2));
console.log(calc.subtract(1,2));
console.log(calc.multiply(1,2));
console.log(calc.divide(1,2));



