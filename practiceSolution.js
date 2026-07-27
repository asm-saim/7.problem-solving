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
  let strToArr = str.split("");
  strToArr.join("") === strToArr.reverse().join("");
  return true;
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

function findShortestWord(sentence) {
  let words = sentence.split(" ");
  console.log(words);
  let shortest = words[0];
  for (let word of words)
    if (word.length < shortest.length) {
      shortest = word;
    }

  return shortest;
}
console.log(findShortestWord("JavaScript is a fun language")); // Expected: "a"

// Task 13-6A: Find the Second Smallest Number
// Problem Statement:
// Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value.
// Input                Output
// [10, 5, 8, 20, 15]   8

// Starter Snippet:
// // Input: an array of numbers
// // Output: the second smallest number
// // Returns: a number

function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  // TODO: loop through and update smallest/secondSmallest correctly

  for (const number of numbers) {
    if (number < smallest) {
      smallest = number;
    }
  }
  for (const second of numbers) {
    if (second !== smallest && second < secondSmallest) {
      secondSmallest = second;
    }
  }
  return secondSmallest;
}

console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8
console.log(findSecondSmallest([5, 8, 10])); // Expected: 8
console.log(findSecondSmallest([2, 1, 3])); // Expected: 2

// Task 13-6B: Count Multiples of Three
// Problem Statement:
// Write a function countMultiplesOfThree that takes an array of numbers and returns how many of them are divisible by 3.
// Input
// Output
// [3, 4, 6, 7, 9, 10]
// 3

// Starter Snippet:
// // Input: an array of numbers
// // Output: how many numbers are divisible by 3
// // Returns: a number

function countMultiplesOfThree(numbers) {
  let count = 0;
  // TODO: loop through and count multiples of 3

  for (let number of numbers)
    if (number % 3 === 0) {
      count += 1;
    }

  return count;
}
console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10])); // Expected: 3

// Task 13-7A: Average of All Numbers
// Problem Statement:
// Write a function averageOfArray that takes an array of numbers and returns their average.
// Input         Output
// [2, 4, 6]     4

// Starter Snippet:
// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number

function averageOfArray(numbers) {
  let total = 0;
  // TODO: loop through, sum the numbers, then divide by the count

  for (let num of numbers) {
    total += num;
  }
  return total / numbers.length;
}

console.log(averageOfArray([2, 4, 6])); // Expected: 4

// Task 13-7B: Keep Only Even Numbers
// Problem Statement:
// Write a function keepEvenNumbers that takes an array of numbers and returns a new array with only the even numbers.
// Input              Output
// [3, -5, 8, -1, 0]  [8, 0]

// Starter Snippet:
// // Input: an array of numbers
// // Output: array with only even numbers
// // Returns: an array

function keepEvenNumbers(numbers) {
  let result = [];
  // TODO: loop and push only even numbers
  for (let number of numbers)
    if (number % 2 === 0) {
      result.push(number);
    }
  return result;
}

console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // Expected: [8, 0]

// Task 13-8A: List an Object's Keys
// Problem Statement:
// Write a function listKeys that takes an object and returns an array containing its property names (keys).
// Input                                    Output
// { name: "Sam", age: 25, city: "Dhaka" }  ["name", "age", "city"]

// Starter Snippet:
// // Input: an object
// // Output: array of the object's keys
// // Returns: an array

function listKeys(obj) {
  let keys = [];
  // TODO: loop through the object and collect its keys
  for (let key in obj) {
    keys.push(key);
  }

  return keys;
}

console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));

// Expected: ["name", "age", "city"]

// Task 13-8B: Get a Value or a Default
// Problem Statement:
// Write a function getValueOrDefault that takes an object, a key name, and a default value, and returns the object's value for that key if it exists, otherwise the default value.
// Input                                Output
// person, key "age", default 0         25
// person, key "grade", default "N/A"  "N/A"

// Starter Snippet:
// // Input: an object, a key (string), a default value
// // Output: the value at that key, or the default
// // Returns: any value

function getValueOrDefault(obj, key, defaultValue) {
  // TODO: check if the key exists in the object
  let value = obj[key];
  // console.log(value)
  if (value) {
    return value;
  } else {
    return defaultValue;
  }
}

let person = { name: "Sam", age: 25 };
console.log(getValueOrDefault(person, "age", 0)); // Expected: 25
console.log(getValueOrDefault(person, "grade", "N/A")); // Expected: "N/A"

// Task 13-9: Long Words Above a Length, Then Their Count
// Problem Statement:
// Write two functions:
// getWordsLongerThan — takes an array of words and a length threshold, and returns a new array containing every word whose length is greater than the threshold.
// countArray — takes an array and returns how many elements it contains.
// Then use the returned array from getWordsLongerThan as the input to countArray.
// Input
// Output
// ["cat", "elephant", "dog", "hippopotamus", "ox"], threshold 3
// Words longer than 3 → ["elephant", "hippopotamus"]
// Count → 2

// Starter Snippet:
// // Input: an array of words, a length threshold
// // Output: array of words longer than the threshold
// // Returns: an array

function getWordsLongerThan(words, minLength) {
  let longWords = [];
  // TODO: loop, check condition, push the word
  for (let word of words) {
    if (word.length > minLength) {
      longWords.push(word);
    }
  }

  return longWords;
}

// Input: an array
// Output: the number of elements in the array
// Returns: a number

function countArray(arr) {
  let count = 0;
  // TODO: write your loop here

  for (let number of arr) {
    count += 1;
  }

  return count;
}

let words = ["cat", "elephant", "dog", "hippopotamus", "ox"];
let longWords = getWordsLongerThan(words, 3);
let total = countArray(longWords);

console.log(longWords); // Expected: ["elephant", "hippopotamus"]
console.log(total); // Expected: 2

// Task 13-10: Final Homework Set
// These four tasks combine everything from Module 13. Each must be solved as a function that returns a value, with an Input/Output/Returns comment on top.
// 13-10A: Perfect Square Checker
// Problem Statement: Write a function isPerfectSquare that takes a number and returns true if it is a perfect square, otherwise false.
// Input
// Output
// 16
// true
// 20
// false

// // Input: a number
// // Output: true or false
// // Returns: a boolean

function isPerfectSquare(num) {
  // TODO: write your logic here
  return Number.isInteger(Math.sqrt(num));
}

console.log(isPerfectSquare(16)); // Expected: true
console.log(isPerfectSquare(20)); // Expected: false

// 13-10B: Reverse the Word Order
// Problem Statement: Write a function reverseWords that takes a sentence and returns it with the order of the words reversed (the letters inside each word stay the same).
// Input
// Output
// "hello world"
// "world hello"

// // Input: a sentence (string)
// // Output: sentence with word order reversed
// // Returns: a string

function reverseWords(sentence) {
  // TODO: split into words, reverse the order, and join back together
  let splited = sentence.split(" ").reverse().join(" ");

  return splited;
}

console.log(reverseWords("hello world")); // Expected: "world hello"

// 13-10C: Remove Duplicate Values from an Array
// Problem Statement: Write a function removeDuplicates that takes an array of numbers and returns a new array where each value appears only once, keeping the first occurrence.
// Input                  Output
// [1, 2, 2, 3, 4, 4, 5] [1, 2, 3, 4, 5]

// // Input: an array of numbers
// // Output: array with duplicates removed
// // Returns: an array

function removeDuplicates(numbers) {
  let unique = [];
  // TODO: write your logic here

  for (let num of numbers) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]

// 13-10D: Invert an Object
// Problem Statement: Write a function invertObject that takes an object with unique values and returns a new object where each original value becomes a key, and each original key becomes its value.
// Input
// Output
// { a: 1, b: 2, c: 3 }
// { 1: "a", 2: "b", 3: "c" }

// // Input: an object (values are unique)
// // Output: a new object with keys and values swapped
// // Returns: an object

// function invertObject(obj) {
//   let inverted = {};
//   // TODO: loop through obj and swap each key/value pair into inverted

//   return inverted;
// }

// console.log(invertObject({ a: 1, b: 2, c: 3 }));
// // Expected: { 1: "a", 2: "b", 3: "c" }
