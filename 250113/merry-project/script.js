// 제어하고자 하는 내용이 무엇인지 먼저 작성해보기 //

// 구현하고자 하는 기능을 말로 표현하지 못하면 코딩은 완성되지 않는다 //

// const : 변수 선언 //

const circle = document.querySelector("#circle");
const articles = circle.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
});

articles.forEach((article) => {
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
