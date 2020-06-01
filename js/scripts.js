const add = function(number1, number2) {
  return number1 + number2;
};
const sub = function(number1, number2) {
  return number1 - number2;
};
const mult = function(number1, number2) {
  return number1 * number2;
};
const div = function(number1, number2) {
  return number1 / number2;
};
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result1 = add(number1, number2);
alert("Addition: " + result1);
const result2 = sub(number1, number2);
alert("Subtraction: " + result2);
const result3 = mult(number1, number2);
alert("Multiplication: " + result3);
const result4 = div(number1, number2);
alert("Division: " + result4);