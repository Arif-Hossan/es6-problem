//Accessing object element

const student = {
  name: "Freddie",
  age: 26,
};

// const ageOfStudent=student.age;
const ageOfStudent = student["age"];
console.log(ageOfStudent);

let data = {
  location: [
    {
      latitude: "34.5,37.8",
      longitude: "98.77,58.7",
      city: "Hydrabad",
      country: "India",
    },
  ],
};

// let city = data.location[0].city;
let City = data.location[0]["city"];
console.log(City);

//json data
let user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

let email = user.email;
console.log("email = ", email);

let street = user.address?.street;
let suite = user.address?.suite;
console.log(`address = ${suite}, ${street}`);

let city = user["address"]["city"]; //bracket notation
console.log(`city = ${city}`);

let lat = user["address"]["geo"]["lat"];
console.log(`latitude = ${lat}`);

let companyName = user.company.name; //dot notation
console.log(`company name = ${companyName}`);
