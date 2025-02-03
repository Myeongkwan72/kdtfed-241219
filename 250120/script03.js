// 사용자에게 교통비, 식비, 음료비 이상 3개의 값을 전달받아서 3개의 총합이 적정지출비용을 초과하는 경우, "00원 초과, 지출을 줄여주세요!", 만약 적정지출비용을 초과하지 않은 경우, "00월 유지, 축하드립니다!" 메세지가 콘솔창에 출력되도록 해주세요.

// 적정지출비용은 10,000원

// const travleCost = prompt("당신의 교통비를 입력해주세요.");
// const foodCost = prompt("당신의 식비를 입력해주세요.");
// const drinkCost = prompt("당신의 음료비를 입력해주세요.");

// const cost = travleCost + foodCost + drinkCost;

// let result = cost <= 10000 && cost >= 10000;

// result = result ? `적정` : `초과`;

// console.log(result);

let traffic = parseInt(prompt("교통비를 입력하세요."));
let food = parseInt(prompt("식비를 입력하세요."));
let drink = parseInt(prompt("음료비를 입력하세요."));

let total = traffic + food + drink;
let result = total < 10000;

const plus = total - 10000;
const minus = 10000 - total;

result = result
  ? `${minus}원 유지, 축하드립니다!`
  : `${plus}원 초과, 지출을 줄여주세요!`;

console.log(result);
