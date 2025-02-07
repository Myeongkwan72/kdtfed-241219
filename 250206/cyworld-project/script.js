// change event

const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuMusic = document.querySelector("#menuMusic");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background:#fff; color:#000";
  menuGame.style = "background:#55b2e4; color:#fff";
  menuMusic.style = "background:#55b2e4; color:#fff";
};

const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background:#55b2e4; color:#fff";
  menuGame.style = "background:#fff; color:#000";
  menuMusic.style = "background:#55b2e4; color:#fff";
};

const musicChange = () => {
  contentFrame.setAttribute("src", "./music.html");
  menuHome.style = "background:#55b2e4; color:#fff";
  menuGame.style = "background:#55b2e4; color:#fff";
  menuMusic.style = "background:#fff; color:#000";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuMusic.addEventListener("click", musicChange);

// count event

const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = "0" + (date.getMonth() + 1);
  const day = "0" + date.getDate();
  return `${year}-${month}-${day}`;
};

const todayDate = getFormattedDate();
const dailyCookieName = `pageHit_${todayDate}`;

const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 1);
const expireDateString = expireDate.toGMTString();

const cookieVal = (cookieName) => {
  const thisCookie = document.cookie.split(", ");
  for (let i = 0; i < thisCookie.length; i++) {
    if (cookieName === thisCookie[i].split("=")[0]) {
      return thisCookie[i].split("=")[1];
    }
  }
  return 0;
};

let dailyHitCt = parseInt(cookieVal(dailyCookieName));
if (isNaN(dailyHitCt)) {
  dailyHitCt = 0;
}
dailyHitCt++;
document.cookie = `${dailyCookieName}=${dailyHitCt}; expires=${expireDateString}`;

let totalHitCt = parseInt(cookieVal("totalPageHit"));
if (isNaN(totalHitCt)) {
  totalHitCt = 0;
}
totalHitCt++;
document.cookie = `totalPageHit=${totalHitCt}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

document.querySelector(".zero").innerText = dailyHitCt;
document.querySelector(".total").innerText = totalHitCt;
