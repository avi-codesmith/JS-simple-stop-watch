"use strict";

let start = document.querySelector(".start-wrapper");
let stop = document.querySelector(".start");
let reset = document.querySelector(".reset-wrapper");
let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let mSec = document.querySelector(".msec");
const moon = document.querySelector(".moon");

let mSecN = Number(mSec.textContent);
let secN = Number(sec.textContent);
let hrsN = Number(hrs.textContent);
let clickmoon = false;
let minN = Number(min.textContent);
let pause = true;

let intervalId;
let intervalTime = 10;
let click = true;

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

moon.addEventListener("click", () => {
  clickmoon = !clickmoon;

  if (clickmoon) {
    document.querySelector(".body").style.backgroundColor = "#ddd";
    document.querySelector(".min").style.color = "#111";
    document.querySelector(".sec").style.color = "#111";
    document.querySelector(".msec").style.color = "#111";
    document.querySelector(".hrs").style.color = "#111";
    document.querySelector(".change").style.color = "#111";
    document.querySelector(".change2").style.color = "#111";
    document.querySelector(".change3").style.color = "#111";
    document.querySelector(".start").classList.add("blackc");
    document.querySelector(".reset").classList.add("blackc");
    document.querySelector(".moon").classList.add("blackc");
    start.style.border = "2px solid #111";
    reset.style.border = "2px solid #111";
  } else {
    document.querySelector(".body").style.backgroundColor = "#111";
    document.querySelector(".min").style.color = "#fff";
    document.querySelector(".sec").style.color = "#fff";
    document.querySelector(".msec").style.color = "#fff";
    document.querySelector(".hrs").style.color = "#fff";
    document.querySelector(".change").style.color = "#fff";
    document.querySelector(".change2").style.color = "#fff";
    document.querySelector(".change3").style.color = "#fff";
    document.querySelector(".start").classList.remove("blackc");
    document.querySelector(".reset").classList.remove("blackc");
    moon.classList.remove("blackc");
    start.style.border = "2px solid #fff";
    reset.style.border = "2px solid #fff";
  }
});
