let data = "coding bootcamp joyful jasper";

const fs = require("fs");
fs.writeFile("joyfull.txt", data, (err) => {
  if (err) {
    console.log;
  }
});

// const proses = require("process");
// const env = process.env;

// console.log(env);

// function countLength(num1, num2) {
//   return num1 + num2;
// }
// console.log(countLength(10, 20));

// const countLength2 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(countLength2(20, 30));
