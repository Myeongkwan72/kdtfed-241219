// 자동 형 변환
const one = "20";
const two = 25;

const result = one - two;
console.log(typeof result);

// 수동 형 변환
// 숫자로의 형 변환 : Number // parseInt // parseFloat
const str = parseFloat("20");
console.log(typeof str);

const num99 = "17.8";

console.log(Number(num99));
console.log(parseInt(num99));
console.log(parseFloat(num99));

console.log(Number(true));
console.log(parseInt(true));

const num77 = 77;
console.log(typeof num77.toString());

// null, undefined => 문자열
console.log(typeof String(num77));

// 논리형 (bollean)으로 형 변환

console.log(Boolean("HI"));
console.log(Boolean(undefined));

// 연산자 & 제어문
