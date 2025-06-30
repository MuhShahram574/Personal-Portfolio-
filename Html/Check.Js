console.log("This is my JavaScript Practice File");
function sum(a, b) {
  return a + b;
}
console.log(sum(120, 210));
///////////////////////////////
(a, b) => {
  return a * b;
};

function vowels(str) {
  let num = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      num++;
    }
  }

  return num;
}

const Arrow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
};
Arrow("papa g mana collagr jana ha");

// FOR EACH LOOP

let Arr = [1, 2, 3, 4, 5];
Arr.forEach((num) => {
  console.log(num ** 2);
});

function printhello() {
  console.log("hello");
}

let Above90 = [39, 39, 99, 349, 498, 33];
const Output = Above90.filter((num) => {
  return num > 90;
});
console.log(Output);


let n = prompt("Enter a Number");
let shah = [];
for (let i = 1; i <= n; i++) {
  Array[i - 1] = i;
}
console.log(shah);
