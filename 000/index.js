console.log("HOMEWORK");

// 1

// const firstRoll = Math.floor(Math.random() * 6 + 1);
// const secondRoll = Math.floor(Math.random() * 6 + 1);
// console.log(firstRoll, secondRoll);

// const sum = firstRoll + secondRoll;

// if (sum > 8) {
//   console.log(`Jus laimejote, nes isridenote ${firstRoll} ir ${secondRoll}`);
// } else {
//   console.log(`Jus pralaimejote, nes isridenote ${firstRoll} ir ${secondRoll}`);
// }

// 2

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
// }

// getRandomIntInclusive(3, 6);
// const pilkis = getRandomIntInclusive(3, 6);
// const murklys = getRandomIntInclusive(3, 6);

// console.log(pilkis, murklys);

// if (pilkis > murklys) {
//   console.log(
//     `Murklys sveria ${murklys} ir Pilkis sveria ${pilkis}, maziau sveria Murklys`
//   );
// }
// if (pilkis < murklys) {
//   console.log(
//     `Pilkis sveria ${pilkis} ir Murklys sveria ${murklys}, maziau sveria Pilkis`
//   );
// }
// if (pilkis === murklys) {
//   console.log(`Katinuku svoriai vienodi`);
// }

// 3

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
// }

// getRandomIntInclusive(0, 30);

// const katinai = getRandomIntInclusive(0, 30);
// const karves = getRandomIntInclusive(0, 30);
// console.log(katinai, karves);

// if (katinai > 15 || karves > 15) {
//   console.log(`Netelpa`);
// } else if (katinai < 15 && karves < 15) {
//   console.log("Telpa");
// }

// 4

// const randomNum = Math.floor(Math.random() * 6 + 1);

// console.log(randomNum);

// const result =
//   randomNum === 1 || randomNum === 5
//     ? "TV"
//     : randomNum === 3 || randomNum === 4
//     ? "Skalbykle"
//     : "Saldytuvas";

// console.log(result);

// 5

// const firstRandom = Math.floor(Math.random() * 7 + 1);
// const secondRandom = Math.floor(Math.random() * 7 + 1);
// const thirdRandom = Math.floor(Math.random() * 7 + 1);

// console.log(firstRandom, secondRandom, thirdRandom);

// const array = [];
// array.push(firstRandom, secondRandom, thirdRandom);
// const sorted = array.sort();
// console.log(sorted);

// PATIKRINIMAS 2

// 1

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
// }
// const speeds = [];
// for (let i = 0; i < 10; i++) {
//   speeds.push(getRandomIntInclusive(120, 220));

//   console.log(speeds);
// }
// const average = speeds.reduce((a, b) => a + b) / 10;

// console.log(average);

// 3

// function wilBeEnough() {
//   const isEnoughFuel = [];
//   let sum;

//   for (let i = 0; i < 10; i++) {
//     function getRandomIntInclusive(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
//     }

//     isEnoughFuel.push(getRandomIntInclusive(3, 6));
//   }
//   console.log(isEnoughFuel);
//   sum = isEnoughFuel.reduce((acc, num) => acc + num);
//   console.log(sum);

//   console.log(44 - sum > 0 ? "Enough" : "Not enougth");
// }

// wilBeEnough();

// 4

// const loops = [];
// for (let i = 0; i < 10; i++) {
//   function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
//   }
//   loops.push(getRandomIntInclusive(20, 120));
// }

// const leftRight = [];
// for (let i = 0; i < 5; i++) {
//   function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
//   }
//   leftRight.push(getRandomIntInclusive(20, 120));
// }

// console.log(loops, leftRight);

// const min = Math.min(...leftRight);
// console.log(min);

// 5

// const stabdziai = rand(0, 1);
// const vairas = rand(0, 1);
// const kengura = rand(0, 1);
// console.log(stabdziai, vairas, kengura);

// function rand(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
// }

// let km = 0;
// do {
//   km + 1;
// } while (stabdziai == true);
// console.log(km);

//  3333333333333333333

const bitGirls = ["Edita", "Lina", "Brigita", "Deimante", "Juste"];
const cats = ["Murka", "Rainius", "Meilute", "Bosas", "Dickis"];

// 1

bitGirls.unshift("Nauseda");
console.log(bitGirls);

const bitCats = [];

for (let i = 0; i < cats.length; i++) {
  const or = ["Storas", "Nestoras"];
  const fatOrNot = or[Math.floor(Math.random() * or.length)];

  bitCats.push([cats[i], fatOrNot]);

  const includes = bitCats.filter((a) => a.includes("Storas"));
  console.log(includes.length);
}

// const sorted = bitCats.sort(function (a, b) {
//   return a[1].localeCompare(b[1]);
// });

// console.log(sorted);

// const sorted = bitCats.sort(function (a, b) {
//   if (a[1] < b[1]) return -1;
//   if (a[1] > b[1]) return 1;
//   return 0;
// });

// console.log(sorted);

// const sorted = bitCats.sort((a, b) => a[1] - b[1]);

// console.log(sorted);

// 5

// const happyCats = [];

// happyCats.push([bitGirls[0], "Barsukas"]);

// for (let i = 0; i < bitCats.length; i++) {
//   const [catName] = bitCats[i];
//   happyCats.push([bitGirls[i + 1], catName]);
// }

// console.log(happyCats);
