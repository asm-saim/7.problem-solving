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
console.log(numberType(0))


// Task 13-2A: Hot, Cold, or Normal
// Problem Statement:
// Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise.
// Input
// Output
// 35
// "Hot"
// 10
// "Cold"
// 20
// "Normal"
function tempChecker(value) {
  if (value > 30) {
    return "Hot";
  } else if (value < 15) {
    return "Cold";
  }
  return "Normal";
}
console.log(tempChecker(20));
