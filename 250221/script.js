const input = document.querySelector(".btns");
const min = Number(input.getAttribute("data-min"));
const max = Number(input.getAttribute("data-max"));
const step = Number(input.getAttribute("data-step"));
let value = Number(input.getAttribute("data-value"));

const number = document.querySelector(".number");
number.innerText = value;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "add") {
      if (max) {
        if (value < max && value + step <= max) {
          value += step;
        }
      } else {
        value += step;
      }
      number.innerText = value;
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "remove") {
      if (min) {
        if (value > min && value - step <= min) {
          value -= step;
        }
      } else {
        value -= step;
      }
      number.innerText = value;
    }
  });
});
