const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const btn = document.querySelector("#btn");

console.log(birthYear, birthMonth, birthDate);

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const age = document.querySelector("#age");

const today = new Date();

current.innerText = `현재 시간 ${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 ⏰`;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );

  const passed = today.getTime() - birthDay.getTime();
  const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedHours = Math.floor(passed / (60 * 60 * 1000));
  const passedAge = Math.floor(passed / (365 * 24 * 60 * 60 * 1000));

  resultDays.innerText = `${passedDays.toLocaleString()}일이 흐르고`;
  resultHours.innerText = `${passedHours.toLocaleString()}시간이 지났습니다.`;
  age.innerText = `${passedAge}살이 되었네요 📅`;
});

console.log(passed);
