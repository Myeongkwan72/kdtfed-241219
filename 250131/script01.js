// console.log(document.querySelector("h1"));
// console.log(document.querySelector("#profile"));
// console.log(document.querySelector(".imgSrc"));
// console.log(document.querySelectorAll(".user"));

// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementById("profile"));
// console.log(document.getElementsByClassName("imgSrc"));

// 스타일시트에 보이는 텍스트만 찾아옴
// console.log(document.querySelector("#desc").innerText);

// 문서에 존재하는 텍스트를 찾아옴
// console.log(document.querySelector("#desc").textContent);

const title = document.querySelector("h1");
const userName = document.querySelectorAll("#desc>p")[0];
const pfImg = document.querySelector("#profile > img");

console.log(pfImg);
// title.onclick = () => {
//   title.innerText = "나의 프로필";
// };

title.addEventListener("click", () => {
  title.innerText = "나의 프로필";
  title.style.backgroundColor = "#000";
  title.style.color = "#fff";
});

userName.addEventListener("click", () => {
  userName.innerHTML = "본명 : <b>이지은</b>";
  pfImg.src =
    "https://i.namu.wiki/i/p0RfU-BmZdXWQZgtKpd6dliWcZY0kqyx8RYr0K5a8CGiO3utGZIqwcZyPG2utAd-qkvQ8lZ_015A0X7wl_M1FA.webp";
  if (!userName.classList.contains("active")) {
    userName.classList.add("active");
  } else {
    userName.classList.remove("active");
  }
});

// console.log(document.querySelectorAll("#desc > p")[0].classList);
