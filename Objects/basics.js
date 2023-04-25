// let userA = new Object(); // "object constructor" syntax
// let userB = {}; // "object literal" syntax

// Literals and properties
// let user = {
//   name: "John",
//   age: 30,
// };

// get fields of the object:
// console.log( user.name ); // John
// console.log( user.age ); // 30

// user.isAdmin = true;

// delete user.age;

// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true,
// };

// let user = {};
// // set
// user["likes birds"] = true;
// // get
// console.log(user["likes birds"]); // true
// // delete
// delete user["likes birds"];

// let key = "likes birds";
// // same as user["likes birds"] = true;
// user[key] = true;

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };
// console.log(bag.apple); // 5 if fruit="apple"

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
// };
// console.log(obj.for + obj.let + obj.return);
// // 6

// let obj = {};
// obj.__proto__ = 5;
// console.log(obj.__proto__); // [object Object], didn't work as intended

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }
// let user = makeUser("John", 30);
// console.log(user.name); // John


// let user = {}
// console.log(user.noSuchProperty === undefined);

// let user = {
//   name: "John",
//   age: 30
// }

// console.log("age" in user);
// console.log("blabla" in user);
// console.log("John" in user);

// let obj = {
//   test: undefined
// }

// console.log(obj.test);
// console.log("test" in obj);

// for..in loop

// for(key in object){
//   // code to execute
// }

let user = {
  name: "John",
  age: 30,
  isAdmin: true
}

for(let key in user){
  console.log(key, ":", user[key]);
  // console.log(user[key]);
}