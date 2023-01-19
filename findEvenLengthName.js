let friends = [
  "John",
  "Susan",
  "Tomy",
  "Peter",
  "Amelia",
  "Elisabeth",
  "Andrew",
];
let evenNameFriend = [];

let findEvenName = (names) => {
  for (let i = 0; i < names.length; i++) {
    //assign each single friend name
    let friendName = names[i];
    //calculate friend name length
    let nameLength = friendName.length;
    //check even length name
    if (nameLength % 2 == 0) {
      //push even length name to evenNameFriend
      evenNameFriend.push(friendName);
    }
  }
  return evenNameFriend;
};

let result = findEvenName(friends);
console.log(result);
