const trigger = document.querySelector(".trigger");

trigger.addEventListener("click", function () {
  this.classList.toggle("active");

  const modalGnb = document.querySelector(".modal-gnb");
  modalGnb.classList.toggle("active");
});
