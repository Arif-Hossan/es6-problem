let numbers = [1, 9, 17, 22];
let sum = 0;
// using for loop
let numbersLength = numbers.length;
for (let i = 0; i < numbersLength; i++) {
  let number = numbers[i];
  sum = sum + number;
}
console.log(sum);

//using reduce function
let calculatedSum=numbers.reduce((a,b)=>a+b,0);
console.log(calculatedSum);