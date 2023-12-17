/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
constructor(){
  this.result = 0;
}
// add 
add(value) {
  this.result+=value;
}

//subtract
subtract(value){
  this.result-=value;
}

//multiply
multiply(value){
  this.result*=value;
}

//divide
divide(value){
  if (value !== 0) {
    this.result /= value;
} else {
    throw Error("Cannot divide by zero!");
}
}

//clear
clear(){
  this.result=0;
}

//getresult
getResult(){
  return this.result;
}

// Expression evaluation
calculate(expression) {
  // Remove extra spaces and validate expression
  const cleanedExpression = expression.replace(/\s+/g, ' ').trim();
  if (!/^[0-9+\-*/(). ]+$/.test(cleanedExpression)) {
    throw new Error("Invalid characters in the expression");
  }

  // Evaluate the expression
  try {
    this.result = eval(cleanedExpression);

    // Check for division by zero
    if (!isFinite(this.result)) {
      throw new Error("Division by zero");
    }
  } catch (e) {
    throw new Error("Invalid expression");
  }
}

}


module.exports = Calculator;
