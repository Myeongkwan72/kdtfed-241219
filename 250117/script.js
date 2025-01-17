// 변수 = variables
// 변수 = 바구니 // 값을 담을 수 있는 그릇

// 선언 & 할당
// 선언하는 방식
// => var (*예약어) // let // const

// 모든 변수는 고유한 이름이 있음 => 변수명 // 식별자
// 변수를 선언하는 순간 => 데이터 (변수값) => 메모리 영역 할애
// 메모리가 담길 수 있는 방 생성 => 식별자
// 프로그래밍 언어는 엄격할 수록 안정성이 뛰어나다 =>위험 요소 감소

// const => 재선언 & 재할당이 불가
const num = 1;

// console => 변수 확인
console.log(num);

// let => 재선언 불가, 재할당 가능
let str = "Hello World";

console.log(str);

str = "Me too";

console.log(str);

// var => 재선언 & 재할당 가능

var bool = true;

console.log(bool);

var bool = false;

console.log(bool);

bool = "Restart";

console.log(bool);
