// word game

const form = document.querySelector(".word-text >form");

const gameStart = (e) => {
  e.preventDefault();
  const word = document.querySelector("#word").innerText;
  const myword = document.querySelector("#myword").value;

  const lastword = word[word.length - 1];
  const firstword = myword[0];

  if (lastword === firstword) {
    document.querySelector("#result").innerText = "🎉정답🎉";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "💣땡💣";
    document.querySelector("#myword").value = "";
  }
  console.log(myword[0]);
};

form.addEventListener("submit", gameStart);

// lotto game

const lottoButton = document.querySelector(".lotto-btn");
const result = document.querySelector(".game-lotto-number");
const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

lottoButton.addEventListener("click", startLotto);

const startLotto = () => {
  const { digitCount, maxNumber } = luckyNumber;

  let myNumber = new Set();

  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }

  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "다시~";
  }
};
