// 변수 안에 담을 수 있는 값 =자료형

// 원시타입 = Primimive type
// number =숫자
// string = 문자열
// boolean = 논리형
// > truthy한 값

// template literal = 변수와 문자열 동시 사용할 때 연산자를 사용하지 않게 해주는 문법

// undifined = 미정
// > falsy한 값

// null = 유효하지 않은 값
// > 아예 값을 주지 않은 것을 정의할 때

// symbol = 유일무이한 값

// 참조타입 = Reference type
// array = 배열
// function = 함수
// object = 객체

// regexp = 정규표현식
// map = 맵 데이터
// set = 셋 데이터

const num = 7;
const str = "7";
const bool = true;
const bool02 = false;

console.log(typeof bool);
console.log(typeof bool02);

const userName = "현빈";
const movieTitle = "하얼빈";

const result = `${userName}이 출연한 최근 영화는 ${movieTitle}입니다.`;

console.log(result);

let hobby;

console.log(hobby);

let weekend = null;

console.log(weekend);

const only01 = Symbol();
const only02 = Symbol();

console.log(only01 === only02);

let id = Symbol();

const member365 = {
  name: "jack",
  [id]: "ezen",
};

console.log(member365);

let arr = [1, 2, 3];
const strarr = ["park", "kim", "lee"];
const boolarr = [true, false];

console.log(arr);
console.log(`${arr[1]}은 arr 배열의 ${arr.length}번째 값입니다.`);
console.log(typeof arr);

arr[3] = 7;

console.log(arr);

// 실력의 차이는 iterable 객체 & 반복문을 누가 더 자유자재로 사용하는가?
// [대괄호는 배열], {중괄호는 객체}

const obj = {
  firstNumber: 1,
  secondNumber: 2,
  finalNumber: 3,
};

console.log(obj);

// 객체의 형태
// (key : value) = property = 속성

const frontendClass = {
  tutor: "David",
  students: 16,
  major: "language",
};

// 온점 표기법
console.log(frontendClass.tutor);

// 대괄호 표기법
console.log(frontendClass["students"]);

frontendClass.attitude = "the best";

console.log(frontendClass);

// 초창기 JS 함수 구현

// 선언 & 호출
function hello() {
  console.log("Hello");
}

console.log(typeof hello);
