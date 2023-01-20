// Calculating the average of the squares of the numbers in the array.

let numbers = [10, 12, 20, 5];
/*
let calculation = (numbers) => {
  let sums = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let square = Math.pow(number, 2);
    sums = sums + square;
  }
  // return average;
  let average = sums / numbers.length;
  return average;
};

let result = calculation(numbers);
console.log(result);
*/
// using map and reduce

let calculation = (numbers) => {
  let squares = numbers.map((number) => Math.pow(number, 2));
  let sum = squares.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  let average = sum / numbers.length;
  return average;
};
let result = calculation(numbers);
console.log(result);

// using for of
/*
let calculation = (numbers) => {
  let sum = 0;
  for (number of numbers) {
    let square = Math.pow(number, 2);
    sum = sum + square;

  }
  let average = sum / numbers.length;
  return average;
};
let result = calculation(numbers);
console.log(result);
*/

// using forEach
/*
let calculation = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    let square = Math.pow(number, 2);
    sum = sum + square;
  });
  let average = sum / numbers.length;
  return average;
};
let result = calculation(numbers);
console.log(result);
*/
