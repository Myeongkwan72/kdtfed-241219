// // 함수선언식
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 20));

// // 익명함수 표현식
// const num = function (a, b) {
//   return a + b;
// };

// console.log(num(10, 20));

// // 화살표 함수 표현식
// const num1 = (a, b) => {
//   return a + b;
// };

// console.log(num01(10, 20));

// // 즉시 실행 함수
// (function (a, b) {
//   let result = a + b;
//   console.log(`함수 실행 결과값 :${result}`);
// })(100, 200);

// const hi = () => "안녕하세요.";

// 자유롭게 호출의 제어를 하는 함수와 받는 함수 (call back 함수)

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   console.log("클릭");
//   return () => {
//     console.log("클클릭");
//     return () => {
//       console.log("클클클릭");
//       return () => {
//         console.log("클클클클릭");
//         return () => {
//           console.log("그만");
//         };
//       };
//     };
//   };
// });

// const showData = (name, age) => {
//   alert(`안녕하세요. ${name}님 나이가 ${age}살 이시네요.`);
// };

// const getData = (callback) => {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이를 입력하세요");
//   callback(userName, userAge);
// };

// getData(showData);

// 변수에 함수를 담을 수 있음 / 기존 선언식으로 함수를 호출하던 방식에서 익명 함수의 등장으로 작성이 편리해짐

// 다른 함수의 매개 변수로 등장할 수 있음 = 콜백 함수라는 스타일 형식 창조

// 다른 함수의 반환값(return)으로 함수가
