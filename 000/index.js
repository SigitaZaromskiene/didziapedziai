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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
const speeds = [];
for (let i = 0; i < 10; i++) {
  speeds.push(getRandomIntInclusive(120, 220));

  console.log(speeds);
}
const average = speeds.reduce((a, b) => a + b) / 10;

console.log(average);
