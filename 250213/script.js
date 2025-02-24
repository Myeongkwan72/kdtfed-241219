// 원의 넒이 = PI * R²
// 원의 둘레 = 2 * PI * r
// r = 반지름

const radius = prompt("반지름의 길이는?");

const area = (r) => {
  return Math.PI * r * r;
};

const circum = (r) => {
  return 2 * Math.PI * r;
};

const result = document.querySelector("#result");

result.innerText = ` 
반지름 : ${radius}
원의 넓이 : ${area(radius).toFixed(3)}
원의 둘레 : ${circum(radius).toFixed(3)}`;
