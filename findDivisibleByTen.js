//find numbers divisible by 10 using filter
// difference is in filter it returns array on the other hand find returns a single number
let numbers = [33, 50, 79, 78, 90, 101, 30];
let divisibleByTenNumbers = numbers.filter((x) => x % 10 == 0);
console.log(divisibleByTenNumbers);
//find numbers divisible by 10 using find
let divisibleByTen = numbers.find((x) => x % 10 == 0);
console.log(divisibleByTen);
