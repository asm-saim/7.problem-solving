//Sum of range of numbers for 1 to n

let sum = 0;
function sumRange(number) {
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumRange(4));

//factorial: factorial of a number

function fact(number) {
  let res = 1;
  for (let i = number; i >= 1; i--) {
    res *= i;
  }
  return res;
}

const value1 = 5;
console.log(fact(value1));

//type:2
function fact2(value) {
  let num = 1;
  for (let i = 1; i <= value; i++) {
    num *= i;
  }
  return num;
}

console.log(fact2(4));

//Problem:4FizBuzz(1 to n)
// loop through numbers from 1 to n.

// loop the number from 1 to navigation,
// if the number is divisible by 3, print Fixx
// if divisible by 5, print buzz.buzz
// if divisible by 3 and 5 print FixxBuzz.
// else print "Dump"

function numGenerator(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, "FixxBuz");
    }
    if (i % 3 === 0) {
      console.log(i, "Fizz");
    } else if (i % 5 === 0) {
      console.log(i, "Buzz");
    } else {
      console.log(i, "Dump");
    }
  }
}
numGenerator(15);

//reverse a string:
let str = "programming";

str = str.split("").reverse().join("");
console.log(str);

//reverse in another way:
function str2(value) {
  let reverse = "";

  for (let i = value.length - 1; i >= 0; i--) {
    // console.log(value[i]);
    reverse += value[i];
  }
  return reverse;
}
console.log(str2("Bangladesh"));

//vowel count:
function vowelCount(value2) {
  let vowel = "aeiou";
  let count = 0;
  for (let i = 0; i <= value2.length; i++) {
    if (vowel.includes(value2[i])) {
      count += 1;
    }
  }

  return count;
}
console.log(vowelCount("Programming Hero"));

//plendrome checker:

function isPalindrome(value) {
  let str = "";
  for (let i = value.length - 1; i >= 0; i--) {
    str += value[i];
  }
  if (value === str) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("level"));

//count words in a sentence:
function wordCount(sentence) {
  let word = sentence.split(" ").length;

  return word;
}

console.log(wordCount("I am a coder"));

//Largest and smallest:
function largest(array) {
  let largest = array[0];

  for (let i of array) {
    if (largest < i) {
      largest = i;
    }
  }
  return largest;
}
console.log(largest([23, 55, 3, 55, 1112, 455, 2223]));

//smallest:
function smallest(value) {
  let smallestNum = value[0];
  for (let i of value)
    if (i < smallestNum) {
      smallestNum = i;
    }

  return smallestNum;
}

console.log(smallest([56, 22, 788, 432, 1, 123, 68]));
