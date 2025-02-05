// window.onload = alert("안녕");

// const button = document.querySelector("button");

// button.onclick = () => {
//   document.body.style.backgroundColor = "green";
// };

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

document.body.addEventListener("keydown", (event) => {
  document.querySelector(
    "#result"
  ).innerText = `code : ${event.code}, key : ${event.key}`;
});
