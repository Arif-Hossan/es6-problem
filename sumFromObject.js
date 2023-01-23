const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];
//using reduce sum the all objects age in the array
const sumAge = people.reduce(
  (previousValue, currentValue) => previousValue + currentValue.age,
  0
);
console.log(sumAge);

//for loop
let sumOfAge = 0;
const lengthPeople = people.length;
function sumsOfAge(array) {
  for (let i = 0; i < lengthPeople; i++) {
    // let age = array[i]['age'];//bracket notation
    let age = array[i].age;
    sumOfAge += age;
  }
  return sumOfAge;
}
let result = sumsOfAge(people);
console.log(result);
