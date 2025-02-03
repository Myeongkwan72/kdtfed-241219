// 반복문 => Iterable한 객체 => 배열
// for문 & forEach문 & for ~of문 & for ~in 문

// for ~of문

// const marvels = ["Ironman", "Spiderman", "Thor", "Stranger"];

// for (let marvel of marvels) {
//   console.log(marvel);
// }

// for ~in문

// const jsBook = {
//   title: "재미있는 자바스크립트",
//   pubDate: "2025-03-01",
//   pages: 270,
//   finished: true,
//   review: function () {
//     console.log("재밌어요!");
//   },
// };

// for (let key in jsBook) {
//   console.log(`${key} : ${jsBook[key]}<br/>`);
// }

let stars = parseInt(prompt("별의 개수: "));

// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

do {
  document.write("*");
  stars--;
} while (stars > 0);
