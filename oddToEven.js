//converting oddNumbers array to even Numbers array
let oddNumbers = [1, 3, 5, 7, 9];
/*
let evenNumbers = [];
//using for loop
let lengthOfOddNumbers = oddNumbers.length;
for (let i = 0; i < lengthOfOddNumbers; i++) {
  let number = oddNumbers[i];
  let addOneToNumber = number + 1;
  evenNumbers.push(addOneToNumber);
}
console.log("Even Numbers = ", evenNumbers);

*/
// using map function
let evenNumbers = oddNumbers.map((number) => number + 1);
console.log("Even Numbers",evenNumbers);
