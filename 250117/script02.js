// let a = 10;
// let b = a;

// let obj1 = {
//   c: 10,
//   d: "ddd",
// };
// let obj2 = obj1;

// b = 15;
// obj2.c = 20;

// console.log(a, b);

// console.log(obj1, obj2);

// Java, C언어는 iterable한 객체를 생성할 때, 비효율적인 공간을 생성하지 않기 위해 해당 객체에 값의 양을 정의하고 시작

// JS는 처음 그 값을 굉장히 큰 범위로 생성하거나, 매번 그 값을 추가하며 사용

// 함수

let user = {
  name: "David",
  gender: "male",
};

function copyObject(target) {
  let result = {};
  for (let props in target) {
    result[props] = target[props];
  }
  return result;
}

const user2 = copyObject(user);
user2.name = "jane";

console.log(user.name, user2.name);

// Spread Operator = 전개연산자 구문
const fruits = ["apple", "banana", "cherry"];

// 얕은 복사
//const favorite = fruits;

// 깊은 복사
const favorite = [...fruits];

favorite[1] = "grape";

console.log(fruits, favorite);
