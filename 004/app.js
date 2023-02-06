// const name11 = new Set();

// name11.add("Auriuzelis");
// name11.add("Gerdulis");
// console.log(name11);

const randomSet = new Set();
const digit = Math.floor(Math.random() * 10 + 1);
for (let i = 0; i < 10; i++) {
  randomSet.add(digit);
}

console.log(randomSet);

const obj = {
  name: "Si",
  surname: "Pi",
};

const objJson = JSON.stringify(obj);

console.log(objJson);

const objtoStr = JSON.parse(objJson);

console.log(objtoStr);
