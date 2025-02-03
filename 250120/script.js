// 연산자 & 제어문

// 1) 산술연산자
// +, -, *, / 사칙연산
// % => 나머지 값을 구하는 연산자 (짝수와 홀수 구분)

// const x = 10;
// const y = 4;

// let result;

// result = x / y;
// console.log(result);

// result = x % y;
// console.log(result);

// 2) 증감연산자
// ++, --
// 피연산자와의 입력 위치에 따라 연산 순서를 정의

// let a = 10;

// console.log(a);

// a = ++a;

// console.log(a);

// a = --a;

// console.log(a);

// let a = 10;
// let y = 4;
// let result;

// let x = 10,
//   y = 4,
//   result;

// result = x + y--;

// console.log(result);
// console.log(y);

// 3) 비교연산자
// ==, ===, !=, !==
// 얕은 비교는 값만 비교, 깊은 비교는 type까지 비교

// console.log(3 == "3");
// console.log(3 === "3");

// console.log(3 != "3");
// console.log(3 !== "3");

// 4) 복합대입연산자
// += 특정한 값에 다른 값을 더하여 값을 산출
// -+ 특정한 값에 다른 값을 제하여 값을 산출

// let x = 3,
//   y = 3;

// y = x + 3;
// y += x;
// y *= x;
// y %= x;
// console.log(y);

// let str = "<table border='1'>";
// str += "<tr>";
// str += "<td>1</td><td>2</td><td>3</td>";
// str += "</tr>";
// str += "</table>";

// document.write(str);

// 5) 논리연산자
// !, && (and), || (or)

// let a = 10,
//   b = 20;

// console.log(a > 10 || b > 20);
// console.log(a <= 10 || b > 20);
// console.log(a <= 10 && b > 20);

// 6) 연결연산자
// "문자열"+"문자열"

// const actor = "현빈";
// const movie = "하얼빈";

// const result = `${actor}은 ${movie}에 출연했습니다.`;

// console.log(result);

// 7) 삼항조건연산자
// 1항 : 조건식 / 2항 : 참일 경우 / 3항 : 부정일 경우

// let a = 10,
//   b = 3;

// let result = a < b ? "JavaScript" : "TypeScript";

// console.log(result);
