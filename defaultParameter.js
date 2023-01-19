//number2 is default if number2 argument is not passed it will take this
//default 5 and execute the function
let sum = (number1, number2 = 5) => number1 + number2;
let result = sum(23);
// let result = sum(15,1);//16
console.log(result);
