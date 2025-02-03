// const btn = document.querySelector("#toggle-btn");
// const content = document.querySelector("#contents");

// console.log(btn);

// btn.addEventListener("click", () => {
//   if (!content.classList.contains("active")) {
//     content.classList.add("active");
//   } else {
//     content.classList.remove("active");
//   }
// });

// btn.addEventListener("click", () => {
//   if (!btn.classList.contains("active")) {
//     btn.classList.add("active");
//     btn.innerText = "라이트모드로 바꾸기";
//     btn.style.borderRadius = "8px";
//     btn.style.padding = "8px";
//   } else {
//     btn.classList.remove("active");
//     btn.innerText = "다크모드로 바꾸기";
//     btn.style.border = "1px, solid, #000";
//     btn.style.borderRadius = "8px";
//     btn.style.padding = "8px";
//   }
// });

const toggleBtn = document.querySelector("button");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (!document.body.classList.contains("dark")) {
    toggleBtn.innerText = "다크모드로 바꾸기";
  } else {
    toggleBtn.innerText = "라이트모드로 바꾸기";
  }
});
