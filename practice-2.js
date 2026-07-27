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
