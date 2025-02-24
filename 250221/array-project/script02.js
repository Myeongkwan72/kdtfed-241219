// 배열을 생성하는 방법

const season = [];
season[0] = "spring";
season[1] = "summer";

const pets = ["dog", "cat", "bird"];

const fruits = new Array("apple", "peach", "melon");

// 배열의 아이템에 접근 후 값 변경
pets[2] = "fish";
console.log(pets);

// for문
const colors = ["red", "green", "blue", "white", "black"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// forEach문
// 콜백함수 내 인자값이 1~3개까지 입력
// 1개 : 배열 내 개별 아이템
// 2개 : 개별 아이템, 인덱스
// 3개 : 개별 아이템, 인덱스, 배열 그 자체

const animals = ["lion", "tiger", "bear"];

animals.forEach((animal, index, array) => {
  console.log(`[${array}][${index}] : ${animal}`);
});

// 배열이 가지고 있는 주요 함수

// 1. concat() : 서로 다른 배열 혹은 유사배열을 하나의 배열로 합칠 때 사용
const vegetable = ["양상추", "토마토", "피클"];
const meat = ["불고기"];

const meatBurger = vegetable.concat(meat);
console.log(meatBurger);

// 2. reverse() : 현재의 배열 순서를 역순으로 배치할 때 사용
const numbers = [6, 9, 3, 21, 18];
console.log(numbers);
console.log(numbers.reverse());

// 3. sort() : 배열 안에 있는 아이템들의 값을 오름차순으로 정렬할 때 사용
const week = ["sun", "mon", "tue"];
console.log(week.sort());

const values = [5, 20, 3, 11, 4, 15];
console.log(
  values.sort((a, b) => {
    // if (a > b) return 1;
    // if (a < b) return -1;
    // if (a === b) return 0;
    return a - b;
  })
);

// 4. pop(), push() : 배열의 맨 뒤쪽부터 값을 제거하거나 추가할 때 사용
const phones = ["iphone", "samsung", "shaomi"];
console.log(phones);

phones.pop();
console.log(phones);

phones.push("lg");
console.log(phones);

// 5. shift(), unshift() : 배열의 맨 앞쪽부터 값을 제거하거나 추가할 때 사용
phones.shift();
console.log(phones);

phones.unshift("etc");
console.log(phones);

// 6. splice() : 배열 안에 특정 위치에 있는 아이템의 값을 수정할 때 사용
// splice(위치, 개수)
const subjects = ["html", "css", "js", "ts", "react"];

console.log(subjects.splice(2));

const test = subjects.splice(2, 2);

console.log(test);
console.log(subjects);

// 7. slice() :
