// 사용자가 스크롤을 내렸을 때, header 배경컬러 // bannerheight를 변경 => 가상 클래스 정용

// 1. 스크롤을 내림

// 스크롤은 브라우저의 요소
//

// 2. header는 html 문서의 header 태그 요소

// 3.

// 4. 가상 클래스 active를 header에 적용

// 첫 번째 이벤트와 두 번째 이벤트가 상이하게 작동하도록 제어
// 가급적 전역변수 사용을 최소화

// window는 브라우저의 내장 객체
// document는 문서의 객체

/* scroll event */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
    document.querySelector(".gototop").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
    document.querySelector(".gototop").classList.remove("active");
  }
});

/* slick slider */
$(document).ready(function () {
  $(".myslider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 300,
          dots: true,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          dots: true,
          infinite: false,
        },
      },
    ],
  });
});

/* trigger event */
const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".gnb").classList.toggle("active");
});

/* menu */
const menus = document.querySelectorAll(".gnb a, .gototop");
menus.forEach((menu) => {
  menu.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
