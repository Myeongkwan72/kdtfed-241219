const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
    let message = "";
    let imgUrl = "";

    switch (index) {
      case 0:
        message = "별로네요...";
        imgUrl = "./img/star-lv1.png";
        break;
      case 1:
        message = "아쉬워요...";
        imgUrl = "./img/star-lv2.png";
        break;
      case 2:
        message = "평범해요.";
        imgUrl = "./img/star-lv3.png";
        break;
      case 3:
        message = "괜찮아요!";
        imgUrl = "./img/star-lv4.png";
        break;
      case 4:
        message = "최고에요!";
        imgUrl = "./img/star-lv5.png";
        break;
    }
    print.innerHTML = `<img src="${imgUrl}"> ${message}`;
  });
});
