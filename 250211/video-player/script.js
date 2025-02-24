const playButton = document.querySelector(".play-pause");
const player = document.querySelector("#music-player");
const video = document.querySelector("video");
const proressCover = document.querySelector(".progress");
const volumeBar = document.querySelector("input[type='range']");
const fullScreen = document.querySelector(".full");
const rateButtons = document.querySelectorAll(".rate");

const play = () => {
  playButton.innerText = "II";
  video.play();
};

const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

const formatting = (time) => {
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : `${sec}`;
  min = min < 10 ? `0${min}` : `${min}`;
  hour = hour < 10 ? `0${hour}` : `${hour}`;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration;
  const currentTime = video.currentTime;

  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  const progressBarWidth = proressCover.clientWidth;
  const newPosition = (currentTime / duration) * progressBarWidth;
  progressPointer.style.left = `${newPosition}px`;
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const setRate = (e) => {
  const { rate } = e.target.dataset;
  video.playbackRate = rate;
};

const videoPoint = (e) => {
  const mouseX = e.pageX - player.offsetLeft;
  const progressBarWidth = proressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / progressBarWidth) * duration;
  video.currentTime = clickedTime;
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("pointerdown", togglePlay);
video.addEventListener("timeupdate", updateTime);
proressCover.addEventListener("click", videoPoint);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
rateButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});

fullScreen.addEventListener("click", () => {
  video.requestFullscreen();
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    document.addEventListener("pointerdown", togglePlay);
  } else {
    document.removeEventListener("pointerdown", togglePlay);
  }
});
