// function getNum(max) {
//   const numbers = [];
//   for (let i = 0; i < 10; i++) {
//     const mark1 = Math.floor(Math.random() * max) + 1;
//     numbers.push(mark1);
//   }

//   return numbers;
// }

// console.log(getNum(10));

// const newArray = [];

// for (let i = 0; i < 30; i++) {
//   newArray.push(Math.floor(Math.random() * 30));
// }
// console.log(newArray);

// const howMany10 = newArray.filter((num) => num > 10);
// console.log(howMany10.length);

// const biggest = Math.max(...newArray);
// console.log(biggest);

// const index = newArray.indexOf(biggest);
// console.log(index);

// let sum = 0;
// for (let i = 0; i < newArray.length; i++) {
//   if (i % 2 === 0) {
//     sum += newArray[i];
//   }
// }
// console.log(sum);

// const newA = [];

// for (let i = 0; i < newArray.length; i++) {
//   newA.push(newArray[i] - [i]);
// }

// console.log(newA);

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// for (let i = 0; i < 10; i++) {
//   newA.push(getRandomInt(5, 25));
// }

// console.log(newA);

// const evenIndex = [];
// const oddIndex = [];

// for (let i = 0; i < newA.length; i++) {
//   if (i % 2 === 0) {
//     evenIndex.push(newA[i]);
//   } else {
//     oddIndex.push(newA[i]);
//   }
// }
// console.log(evenIndex);
// console.log(oddIndex);

// console.log(newA);

// for (let i = 0; i < newA.length; i++) {
//   if (i % 2 === 0 && newA[i] > 15) {
//     console.log([i]);
//     console.log((newA[i] = 0));
//   }
// }
// console.log(newA);

// const minimum = newA.filter((a) => a > 10);

// // console.log(newA.indexOf(minimum[0]));

// // const oldL = ["A", "B", "C", "D"];

// // const alpha = Array.from(Array(200)).map((e, i) => i + 4);
// // const alphabet = alpha.map((x) => x);
// // console.log(alphabet);

// // const allArr = ["A", "B", "C", "D"];
// // const arrLong = [];

// // for (let i = 0; i < 200; i++) {
// //   arrLong.push(allArr[Math.floor(Math.random() * allArr.length)]);
// // }

// // const allA = arrLong.filter((a) => a === "A");
// // console.log(allA.length);

// // const allB = arrLong.filter((a) => a === "B");
// // console.log(allB.length);

// // const allC = arrLong.filter((a) => a === "C");
// // console.log(allC.length);

// // const allD = arrLong.filter((a) => a === "D");
// // console.log(allD.length);

// // const abc = ["A", "B", "C", "D"];

// // const newAbc1 = [];
// // const newAbc2 = [];
// // const newAbc3 = [];

// // const arrFunction = function (arr, firstArray) {
// //   for (let i = 0; i < 200; i++) {
// //     arr.push(firstArray[Math.floor(Math.random() * firstArray.length)]);
// //   }
// //   return arr;
// // };

// // console.log(arrFunction(newAbc1, abc));
// // console.log(arrFunction(newAbc2, abc));
// // console.log(arrFunction(newAbc3, abc));

// // const oneArr = [];

// // const newFunction = function (arr1, arr2, arr3) {
// //   for (let i = 0; i < 200; i++) {
// //     oneArr.push(arr1[i] + arr2[i] + arr3[i]);
// //   }
// //   return oneArr;
// // };

// // console.log(newFunction(newAbc1, newAbc2, newAbc3));

// // console.log(oneArr);

// // const unique = [];

// // for (let i = 0; i < oneArr.length; i++) {
// //   if (!unique.includes(oneArr[i])) {
// //     unique.push(oneArr[i]);
// //   }
// // }

// // console.log(unique);

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }

// const numbers = getRandomInt(100, 999);
// console.log(numbers);

// const array1 = [];
// const array2 = [];

// const twoArrays = function (arr) {
//   for (let i = 0; i < 100; i++) {
//     arr.push(getRandomInt(100, 999));
//   }
//   return arr;
// };

// console.log(twoArrays(array1));

// console.log(twoArrays(array2));

// console.log(array1, array2);

// const arrayfor6 = [];
// for (let i = 0; i < array1.length; i++) {
//   if (array1[i] !== array2[i]) {
//     arrayfor6.push(array1[i]);
//   }
// }

// console.log(arrayfor6);

// const arrayfor7 = [];
// for (let i = 0; i < array1.length; i++) {
//   if (array1[i] === array2[i]) {
//     arrayfor7.push(array1[i]);
//   }
// }

// console.log(arrayfor7);
// // kaip????
// // const arrayFor8 = [];

// // for (let i = 0; i < array2.length; i++) {
// //   for (let i = 0; i < array1.length; i++) {
// //     arrayFor8.push(array2[array1[i]]);
// //   }
// // }

// // console.log(arrayFor8);

// let tenArray = [];
// for (let i = 0; i < 2; i++) {
//   tenArray.push(getRandomInt(5, 25));
// }
// console.log(tenArray);
// for (let i = 0; i < 10; i++) {
//   tenArray.push(tenArray[i] + tenArray[i + 1]);
// }

// console.log(tenArray);
