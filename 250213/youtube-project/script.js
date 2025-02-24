// // hashlist sticky event
// window.addEventListener("scroll", () => {
//   const hashlist = document.querySelector(".hashlist");
//   const scrollY = window.scrollY;
//   if (scrollY > 270) {
//     hashlist.classList.add("active");
//   } else {
//     hashlist.classList.remove("active");
//   }
// });

// touch event
// 스크롤 컨텐츠 너비 546
// 여백 공간 210
// 전체공간 756

const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 210;

let startX = 0;
let nowX = 0;
let endX = 0;
let listX = 0;

const getClientX = (e) => {
  return e.getClientX ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX${x}px`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};
console.log(onScrollMove);

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }
  hashContent.addEventListener("touchstart", onScrollStart);
  hashContent.addEventListener("mousedown", onScrollStart);
};

const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);

  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);
