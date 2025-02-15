const button = document.querySelector("#btn");

const showPrice = () => {
  const originPrice = Number(document.querySelector("#product").value);
  const rate = Number(document.querySelector("#rate").value);

  const savedPrice = originPrice * (rate / 100);
  const resultPrice = originPrice - savedPrice;

  document.querySelector(
    "#result"
  ).innerText = `할인된 가격은 ${resultPrice}원 입니다.`;
};

button.addEventListener("click", showPrice);
