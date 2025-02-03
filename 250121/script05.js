// for (let i = 1; i <= 10; i++) {
//   if (i === 6) break;
//   document.write(i, "<br/>");
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) continue;
//   document.write(i, "<br/>");
// }

// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열`, "<br/>");
//   }
//   document.write("<br/>");
// }

const marvels = ["ironman", "hulk", "captain", "stranger"];

// 콜백 함수 = 함수 안의 함수

marvels.forEach(function (marvel, index, Array) {
  console.log(marvel, index, Array);
});
