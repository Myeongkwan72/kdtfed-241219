const board = document.querySelector(".board");
const h1 = document.createElement("h1");
const itemImg = document.createElement("img");
const resultImg = document.createElement("img");

h1.innerText = "컴퓨터와 가위바위보 한판!";

const userChoice = prompt("가위, 바위, 보 중 하나를 고르세요!");
let gameNum;

switch (userChoice) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("제대로 내세요!");
    location.reload();
}

let comChoice = Math.ceil(Math.random() * 3);
itemImg.src = `./images/math_img_${comChoice}.png`;

if (gameNum === comChoice) {
  resultImg.src = `./images/game_1.png`;
} else {
  resultImg.src = `./images/game_2.png`;
}

board.append(h1, itemImg, resultImg);
