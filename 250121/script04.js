// 반복문

// 시간복잡도 => 자료 구조 및 알고리즘이 해당 문제를 해결하는데 걸리는 시간
// 빅오 / 빅세타 /빅오메가

// 기본형 반복문
// for문
// JavaScript 내 Iterable 객체만 사용가능

// for (초기값; 조건식; 증감문) {
//   반복문 실행;
// }

// const students = ["Park", "Kim", "Lee"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 !== 0) {
    document.write("<p class='red'>" + i + "</p>");
  } else if (i % 5 !== 0 && i % 7 === 0) {
    document.write("<p class='green'>" + i + "</p>");
  } else if (i % 5 === 0 && i % 7 === 0) {
    document.write("<p class='aqua'>" + i + "</p>");
  }
}

const reds = document.querySelectorAll(".red");
reds.forEach((red) => {
  red.style.color = "red";
});

const greens = document.querySelectorAll(".green");
greens.forEach((green) => {
  green.style.color = "green";
});

const aquas = document.querySelectorAll(".aqua");
aquas.forEach((aqua) => {
  aqua.style.color = "aqua";
});
