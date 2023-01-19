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
/*
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
*/

//using map function
/*
let findEvenName = friends.map((friendName) => {
  if (friendName.length % 2 == 0) {
    return friendName;
  }
}).filter(friendName=>friendName!=undefined);
console.log(findEvenName);
*/
//using filter
/*
let evenLengthName = friends.filter((friend) => friend.length % 2 == 0);
console.log(evenLengthName);
*/

//using filter find the odd length names
/*
let evenLengthName = friends.filter((friend) => friend.length % 2 !== 0);
console.log(evenLengthName);
*/
