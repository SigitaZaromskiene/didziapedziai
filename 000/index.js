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

// const bitGirls = ["Edita", "Lina", "Brigita", "Deimante", "Juste"];
// const cats = ["Murka", "Rainius", "Meilute", "Bosas", "Dickis"];

// // 1

// bitGirls.unshift("Nauseda");
// console.log(bitGirls);

// const bitCats = [];

// for (let i = 0; i < cats.length; i++) {
//   const or = ["Storas", "Nestoras"];
//   const fatOrNot = or[Math.floor(Math.random() * or.length)];

//   bitCats.push([cats[i], fatOrNot]);

//   const includes = bitCats.filter((a) => a.includes("Storas"));
//   console.log(includes.length);
// }

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

// 444444444444444444444444

// const btn = document.querySelector(".button");

// const h1 = document.querySelector(".h1");

// const h2 = document.querySelector(".h2");

// btn.addEventListener("click", function () {
//   function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
//   }
//   h1.innerText = rand(1, 6);
//   h2.innerText = rand(1, 6);

//   if (h1.innerText === h2.innerText) {
//     h1.style.color = "red";
//     h2.style.color = "red";
//   }
// });

// 2

// const btn = document.querySelector("button");
// const h3 = document.querySelector("h3");

// const num = [];

// btn.addEventListener("click", function () {
//   function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
//   }

//   num.push(rand(1, 10));

//   console.log(num);

//   const all = num.reduce((acc, num) => acc + num);
//   console.log(all);
// });

//

// 3

// const africa = ["Zebras", "Raganosis", "Begemotas"];

// const ul = document.querySelector("ul");

// for (let i = 0; i < africa.length; i++) {
//   const new1 = document.createElement("li");
//   new1.innerHTML = africa[i];
//   ul.appendChild(new1);
// }

// 4

// const input1 = document.querySelector(["input"]);
// const input2 = document.querySelector(".input2");
// const plus = document.querySelector(".plus");
// const minus = document.querySelector(".minus");
// const text = document.querySelector(".la");

// plus.addEventListener("click", function () {
//   text.innerHTML = Number(input1.value) + Number(input2.value);
// });

// minus.addEventListener("click", function () {
//   text.innerHTML = Number(input1.value) - Number(input2.value);
// });

// 5

// const australia = ["Kengura", "Dingo", "Strutis", "Atsirado"];

// const ul = document.querySelector("ul");

// let newStr = "";
// for (let i = 0; i < australia.length; i++) {
//   const newEl = document.createElement("li");
//   newEl.innerHTML = australia[i];

//   newStr += australia[i] + " ";
//   console.log(newEl);

//   ul.innerHTML = newStr;

//   //   newStr[1].style.background = "blue";
// }

// const balls = [];

// class ColorBall {
//   constructor(color, number) {
//     this.color = color;
//     this.number = number;
//   }
// }

// const try1 = new ColorBall("green", 22);
// balls.push(try1);

// const try2 = new ColorBall("red", 22);
// balls.push(try2);

// console.log(balls);

// const color = document.querySelector(".color");
// const number = document.querySelector(".number");
// const create = document.querySelector(".create");
// const dlt = document.querySelector(".delete");

// create.addEventListener("click", function () {
//   this.color = color.value;
//   this.number = number.value;

//   const try3 = new ColorBall(color.value, number.value);
//   console.log(try3);
//   balls.push(try3);
//   console.log(balls);

//   const header = document.querySelector("header");

//   const domEl = document.createElement("li");
//   domEl.innerHtml = balls;

//   header.appendChild(domEl);
//   const { color } = balls;
//   domEl.style.color = color;
// });

// console.log(balls);
// dlt.addEventListener("click", function () {
//   balls.shift();
//   console.log(balls);
// });

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const products = [
  "Fenas",
  "Dviratis",
  "Maike",
  "agurkas",
  "Labas",
  "Kurmis",
  "Namas",
  "Robotas",
  "Stalas",
];

// const numbers = [];
// const everyArray = [];
// const randomProductsArr = [];
// const randomPrice = [];
// const randomAmount = [];

// const pad = i + 1;
// const numberStart = "INV" + pad;
// numbers.push(numberStart);

// const randomArr = Math.floor(Math.random() * 10 + 1);
// everyArray.push(randomArr);

// const randomProduct = products[Math.floor(Math.random() * products.length)];
// randomProductsArr.push(randomProduct);
// console.log(randomProductsArr);

// const random = rand(1, 100);

// randomAmount.push(random);

// const randomToFixed = rand(1, 100).toFixed(2);
// randomPrice.push(randomToFixed);

// const sum = randomToFixed * products.amount;

// const saskaitos = [...new Array(100)].map((_, i) => {
//   const number = `INV${i < 9 ? "00" : i < 99 ? "0" : ""}${i + 1}`;
//   const productsBought = [...Array(rand(1, 10))].map((_) => {
//     const title = products[rand(0, products.length - 1)];
//     const price = rand(100, 10000) / 100;
//     const amount = rand(1, 20);
//     const total = Number((price * amount).toFixed(2));
//     return { title, price, amount, total };
//   });
//   const total = productsBought.reduce((acc, cur) => acc + cur.total, 0);
//   const vat = Number((total * 0.21).toFixed(2));
//   const grandTotal = total + vat;
//   return { number, productsBought, total, vat, grandTotal };
// });

// console.log(saskaitos);

// const masyvasSaskaitos = [...new Array(100)].map((e, i) => {
//   const number = `INV${i < 9 ? "00" : i < 99 ? "0" : ""}${i + 1}`;
//   const productsArr = [...new Array(rand(1, 10))].map((e, i) => {
//     const title = products[rand(0, products.length)];
//     const price = rand(100, 1000) / 100;
//     const amount = rand(1, 20);
//     const total = Number((price * amount).toFixed(2));

//     return { total, title, amount, price };
//   });
//   const total = productsArr.reduce((acc, a) => acc + a.total, 0);

//   const vat = Number((total / 21) * 100).toFixed(2);
//   const grandTotal = vat + total;
//   return { number, productsArr, total, vat, grandTotal };
// });

// console.log(masyvasSaskaitos);

// const grandTotalAll = masyvasSaskaitos.reduce(
//   (acc, cur) => acc + cur.grandTotal,
//   0
// );
// console.log(grandTotalAll.toFixed(2));

// const productsBoughtAll = products.map((product) => {
//   const amount = saskaitos.reduce(
//     (acc, cur) =>
//       acc +
//       cur.productsBought
//         .filter((p) => p.title === product)
//         .reduce((acc, cur) => acc + cur.amount, 0),
//     0
//   );
//   const total = saskaitos.reduce(
//     (acc, cur) =>
//       acc +
//       cur.productsBought
//         .filter((p) => p.title === product)
//         .reduce((acc, cur) => acc + cur.total, 0),
//     0
//   );
//   return product + " " + amount + " " + total.toFixed(2);
// });

// productsBoughtAll.forEach((product, index) => console.log(index + 1, product));
