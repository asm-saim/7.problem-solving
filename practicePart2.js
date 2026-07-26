//Sum of range of numbers for 1 to n

let sum = 0;
function sumRange(number) {
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumRange(4));
