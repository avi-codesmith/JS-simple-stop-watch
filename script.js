"use strict";

let start = document.querySelector(".start-wrapper");
let stop = document.querySelector(".start");
let reset = document.querySelector(".reset-wrapper");
let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let mSec = document.querySelector(".msec");

let mSecN = Number(mSec.textContent);
let secN = Number(sec.textContent);
let hrsN = Number(hrs.textContent);
let minN = Number(min.textContent);
let pause = true;

let intervalId;
let intervalTime = 10;

const updateTimer = () => {
  if (pause) {
    mSecN++;
  }
  mSec.textContent = mSecN.toString().padStart(2, "0");
  if (mSecN == 99) {
    mSecN = 0;
    if (pause) {
      secN++;
    }
    sec.textContent = secN.toString().padStart(2, "0");
  }
  if (secN == 60) {
    secN = 0;
    if (pause) {
      minN++;
    }
    min.textContent = minN.toString().padStart(2, "0");
  }
  if (minN == 60) {
    minN = 0;
    if (pause) {
      hrsN++;
    }
    hrs.textContent = hrsN.toString().padStart(2, "0");
  }
};

const startTimer = () => {
  clearInterval(intervalId);
  intervalId = setInterval(updateTimer, intervalTime);
};

start.addEventListener("click", () => {
  startTimer();

  setTimeout(() => {
    start.classList.add("click");
  }, 20);
  start.classList.remove("click");

  if (stop.src.includes("play.png")) {
    stop.src = "pause.png";
    start.title = "Pause";
    pause = true;
  } else if (stop.src.includes("pause.png")) {
    stop.src = "play.png";
    start.title = "Start";
    pause = false;
  }
});

reset.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalTime = 10;
  mSecN = secN = minN = hrsN = 0;
  mSec.textContent = sec.textContent = min.textContent = hrs.textContent = "00";

  setTimeout(() => {
    reset.classList.add("click");
  }, 20);
  reset.classList.remove("click");
  stop.src = "play.png";
});
