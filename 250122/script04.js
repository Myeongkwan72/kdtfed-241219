// 전역 스코프

// 1)
// var hi = "hello";

// function greeting() {
//   console.log(hi);
// }

// greeting();

// 2)
// var hi = "hello";

// function greeting() {
//   hi = "bye";
// }

// greeting();

// 3)
// function greeting() {
//   hi = "hello";
// }

// greeting();

// console.log(hi);

// 블록 스코프
// const factor = 5;

// function calc() {
//   return num * factor;
// }

// const num = 10;
// let result = calc();
// console.log(`result : ${result}`);

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

var num = 5;

console.log(`1부터 ${num}까지 더한 값은 ${calcSum(num)}입니다.`);
