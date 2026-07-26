// Module 13: Basic Problem Solving with JavaScript
// Practice Task
// Instructions for students:
// Every task must be solved using a function that returns a value (never just console.log inside the function).
// Before writing code, write a comment with Input, Output, and Returns — as shown below.
// Test your function using the provided console.log call at the bottom of each starter snippet.
// // Example format to follow for every task:
// // Input: a number
// // Output: "Positive", "Negative", or "Zero"
// // Returns: a string

function numberType(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(numberType(-5));
