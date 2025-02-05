// madal
// 1개의 페이지 안에서 별도의 url을 생성하지 않은 상태로 추가 정보를 제공하는 보조페이지 구현 방법

const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const modalBox = document.querySelector("#modal-box");

openButton.addEventListener("click", function () {
  this.classList.add("btnActive");
  modalBox.classList.add("active");
});

closeButton.addEventListener("click", function () {
  openButton.classList.remove("btnActive");
  modalBox.classList.remove("active");
});
