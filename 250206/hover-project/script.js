const lis = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

lis.forEach((li) => {
  li.addEventListener("mouseenter", function () {
    const changeImg = this.getAttribute("data-image");
    photo.style.backgroundImage = `url(${changeImg})`;
  });
  li.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});
