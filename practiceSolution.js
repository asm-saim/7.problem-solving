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
console.log(numberType(0));

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

// Task 13-2B: Reverse a Number
// Problem Statement:
// Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.)
// Input
// Output
// 1234
// 4321
// 7
// 7

// Starter Snippet:
// // Input: a number
// // Output: the number with digits reversed
// // Returns: a number

function reverseNumber(num) {
  let str = num.toString();
  str = str.split("").reverse().join("");
  let number = parseInt(str);
  return number;
  // TODO: build the reversed string, then convert back to a number
}

console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7)); // Expected: 7

// Task 13-3A: Product of Digits
// Problem Statement:
// Write a function productOfDigits that takes a positive whole number and returns the product of its individual digits.
// Input
// Output
// 123
// 6  (1 × 2 × 3)
// 4040
// 0

// Starter Snippet:
// Input: a number
// Output: product of its digits
// Returns: a number

function productOfDigits(num) {
  let str = num.toString();
  str = str.split("");
  let total = 1;
  for (let number of str) {
    total = parseInt(total) * number;
  }
  //  TODO: loop through each character, convert to number, and multiply

  return total;
}

console.log(productOfDigits(123)); // Expected: 6
console.log(productOfDigits(4040)); // Expected: 0

// Task 13-3B: Odd Numbers Up To N
// Problem Statement:
// Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).
// Input
// Output
// 10
// [1, 3, 5, 7, 9]

// Starter Snippet:
// // Input: a number
// // Output: array of odd numbers from 1 to n
// // Returns: an array

function getOddNumbers(n) {
  let odds = [];
  // TODO: write your loop here
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      odds.push(i);
    }
  }
  return odds;
}

console.log(getOddNumbers(10));
// // Expected: [1, 3, 5, 7, 9]

// Task 13-4A: Count Vowels
// Problem Statement:
// Write a function countVowels that takes a string and returns how many vowels it contains. Assume the string only contains lowercase letters, no spaces.
// Input
// Output
// "javascript"
// 3

// Starter Snippet:
// // Input: a string (lowercase letters only)
// // Output: count of vowels
// // Returns: a number

function countVowels(str) {
  let vowels = "aeiou";

  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count = count + 1;
    }
  }

  return count;
}

console.log(countVowels("javascript")); // Expected: 3

// Task 13-4B: Remove First and Last Character
// Problem Statement:
// Write a function removeFirstAndLast that takes a string and returns it with the first and last character removed.
// Input    Output
// "hello"  "ell"

// Starter Snippet:
// Input: a string
// Output: the string without its first and last character
// Returns: a string

function removeFirstAndLast(str) {
  // TODO: slice out the middle portion of the string
  const sliced = str.slice(1, 4);
  return sliced;
}

console.log(removeFirstAndLast("hello")); // Expected: "ell"

// Task 13-5A: Check for a Palindrome
// Problem Statement:
// Write a function isPalindrome that takes a string and returns true if it reads the same forwards and backwards, otherwise false. Assume lowercase, no spaces.
//  Input     Output
// "level"   true
// "hello"   false

// Starter Snippet:
// // Input: a string
// // Output: true or false
// // Returns: a boolean

function isPalindrome(str) {
  // TODO: reverse the string and compare it to the original
let strToArr=str.split("");

  if (strToArr.join("") === strToArr.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("level")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false

// Task 13-5B: Find the Shortest Word in a Sentence
// Matches lesson: 13-5 (String problems — split + loops)
// Problem Statement:
// Write a function findShortestWord that takes a sentence and returns the shortest word in it.
// Input
// Output
// "JavaScript is a fun language"
// "a"

// Starter Snippet:
// // Input: a sentence (string)
// // Output: the shortest word
// // Returns: a string

// function findShortestWord(sentence) {
//   let words = sentence.split(" ");
//   let shortest = words[0];
//   // TODO: loop through words and compare lengths

//   return shortest;
// }

// console.log(findShortestWord("JavaScript is a fun language")); // Expected: "a"
