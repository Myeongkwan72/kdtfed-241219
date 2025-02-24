const signupButton = document.querySelector("#signup-button");
const tokenButton = document.querySelector("#token-button");
const tokenTimerConfirmButton = document.querySelector(
  "#token-timer-confirm-button"
);

let interval;

const getTokenTimer = () => {
  let timer = 180;
  interval = setInterval(() => {
    if (timer >= 0) {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;

      document.querySelector("#token-timer").innerText =
        String(minutes).padStart(2, "0") +
        " : " +
        String(seconds).padStart(2, "0");
      timer -= 1;
    } else {
      document.querySelector("#token").innerText = "000000";
      document.querySelector("#token-button").style = "";
      document.querySelector("#token-button").setAttribute("disabled", true);

      document.querySelector("#token-timer").innerText = "03:00";
      document.querySelector("#token-timer-confirm-button").style = "";
      document
        .querySelector("#token-timer-confirm-button")
        .setAttribute("disabled", true);

      clearInterval(interval);
    }
  }, 1000);
};

const signup = (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const writter = document.querySelector("#writter").value;
  const password01 = document.querySelector("#password01").value;
  const password02 = document.querySelector("#password02").value;
  const location = document.querySelector("#location").value;
  const genderMan = document.querySelector("#gender-man").checked;
  const genderWoman = document.querySelector("#gender-woman").checked;

  let isVaild = true;

  if (email.includes("@") === false) {
    document.querySelector("#error-email").innerText =
      "이메일이 올바르지 않습니다.";
    isVaild = false;
  } else {
    document.querySelector("#error-email").innerText = "";
  }

  if (writter === "" || writter === isNaN) {
    document.querySelector("#error-writter").innerText =
      "이름이 올바르지 않습니다.";
    isVaild = false;
  } else {
    document.querySelector("#error-writter").innerText = "";
  }

  if (password01 === "") {
    document.querySelector("#error-password01").innerText =
      "비밀번호를 입력해주세요.";
    isVaild = false;
  } else {
    document.querySelector("#error-password01").innerText = "";
  }

  if (password01 !== password02) {
    document.querySelector("#error-password01").innerText =
      "비밀번호가 일치하지 않습니다.";
    document.querySelector("#error-password02").innerText =
      "비밀번호가 일치하지 않습니다.";
    isVaild = false;
  }

  if (
    location !== "seoul" &&
    location !== "incheon" &&
    location !== "daejeon" &&
    location !== "gwangju" &&
    location !== "daegu" &&
    location !== "ulsan" &&
    location !== "busan" &&
    location !== "jeju"
  ) {
    document.querySelector("#error-location").innerText =
      "지역을 선택해주세요.";
    isVaild = false;
  } else {
    document.querySelector("#error-location").innerText = "";
  }

  if (genderMan === false && genderWoman === false) {
    document.querySelector("#error-gender").innerText = "성별을 선택해주세요.";
    isVaild === false;
  } else {
    document.querySelector("#error-gender").innerText = "";
  }

  if (isVaild === true) {
    alert("가입을 축하합니다.");
  }
};

signupButton.addEventListener("click", signup);

const phone01 = document.querySelector("#phone01");
const phone02 = document.querySelector("#phone02");
const phone03 = document.querySelector("#phone03");

phone01.addEventListener("keyup", () => {
  const phone01Value = phone01.value;
  if (phone01Value.length === 3) {
    document.querySelector("#phone02").focus();
  }
});

phone02.addEventListener("keyup", () => {
  const phone02Value = phone02.value;
  if (phone02Value.length === 4) {
    document.querySelector("#phone03").focus();
  }
});

phone03.addEventListener("keyup", () => {
  const p01 = document.querySelector("#phone01").value;
  const p02 = document.querySelector("#phone02").value;
  const p03 = document.querySelector("#phone03").value;

  if (p01.length === 3 && p02.length === 4 && p03.length === 4) {
    document.querySelector("#token-button").style =
      "background:#ffffff; color : #0068ff; cursor:pointer";
    document.querySelector("#token-button").removeAttribute("disabled");
  }
});

tokenButton.addEventListener("click", (e) => {
  e.preventDefault();

  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.querySelector("#token").innerText = token;

  document.querySelector("#token-button").style =
    "background:#ffffff; cursor:pointer";

  document.querySelector("#token-button").setAttribute("disabled", true);

  document.querySelector("#token-timer-confirm-button").style =
    "background : #0068ff; color : #ffffff; cursor:pointer";

  document
    .querySelector("#token-timer-confirm-button")
    .removeAttribute("disabled");

  getTokenTimer();
});

tokenTimerConfirmButton.addEventListener("click", (e) => {
  e.preventDefault();

  clearInterval(interval);
  document.querySelector("#token-timer").innerText = "03 : 00";
  document.querySelector("#token-timer-confirm-button").innerText = "인증완료";
  document
    .querySelector("#token-timer-confirm-button")
    .setAttribute("disabled", true);
  document.querySelector("#token-timer-confirm-button").style = "";
  alert("인증이 완료됐습니다.");

  document.querySelector("#signup-button").style =
    "background : #ffffff; color : #0068ff; border: 1px solid #0068ff; cursor:pointer";
  document.querySelector("#signup-button").removeAttribute("disabled");
});
