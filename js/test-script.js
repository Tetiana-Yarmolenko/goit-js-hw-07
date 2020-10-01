const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// users.sort((a, b) => {
//   if (Number(b.isActive) !== Number(a.isActive)) {
//     return Number(b.isActive) - Number(a.isActive);
//   }
//   if (b.age !== a.age) {
//     return b.age - a.age;
//   }
//   return a.name.localeCompare(b.name);
// });

// console.table(users);

const arrays = ["Alex", "👧", "Mark", "👧", "Melisa", "👧"];
// const user1 = arrays.filter((item, index) => index === arrays.indexOf(item));

// console.table(user1);

// const getUsersWithAge = (array, min, max) =>
//   array
//     .filter(({ age }) => age >= min && age <= max)
//     .map(({ name, email }) => ({ name, email }));

arrays.forEach((elem, index) => `${elem} comes at ${index}`);

console.table(arrays);
// es5
var sample = [1, 2, 3];
// es6
sample.forEach((elem, index) => `${elem} comes at ${index + 1}`);

console.log(sample);

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (item, i, array) {
  array[i] = item + 1;
});

console.log(numbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
console.table(players);

const listName = players.map(({ name }) => name);
console.table(listName);

const listId = players.map(({ points }) => ({
  ...points,
  points: points * 1.5,
}));
console.table(listId);

const getTimePlayed = 80;
const chengTimePlayed = players.map(({ timePlayed }) => {
  console.log(timePlayed);
  if (getTimePlayed === timePlayed) {
    return { ...timePlayed, timePlayed: timePlayed + 100 };
  }
  return timePlayed;
});
console.log(chengTimePlayed);

const filterPlayers = players.filter(({ points }) => {
  return points < 70;
});
console.table(filterPlayers);

const filterOnline = players.filter(({ online }) => online);
// .map(({ name }) => name);
console.table(filterOnline);
