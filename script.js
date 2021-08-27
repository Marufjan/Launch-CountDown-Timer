"use strict";

const countDown = () => {
  // Countdate
  const countDate = new Date("September 26, 2021, 18:44:58").getTime();
  //Now
  const now = new Date().getTime();
  // Gap between countdate and Now
  const gap = countDate - now;

  // How Time Works => we work with milliseonds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate the time
  const textDay = String(Math.trunc(gap / day)).padStart(2, 0);
  const textHour = String(Math.trunc((gap % day) / hour)).padStart(2, 0);
  const textMin = String(Math.trunc((gap % hour) / minute)).padStart(2, 0);
  const textSec = String(Math.trunc((gap % minute) / second)).padStart(2, 0);

  // Update Ui
  document.querySelector(".day").textContent = textDay;
  document.querySelector(".hour").textContent = textHour;
  document.querySelector(".minutes").textContent = textMin;
  document.querySelector(".seconds").textContent = textSec;

  // Clearing timer
  if (gap < 1000) {
    document.querySelector(".heading").textContent = `We launched ${Math.abs(
      textDay
    )} days, ${Math.abs(textHour)} hours ${Math.abs(textMin)} mins ago`;
    document.querySelector(".day").textContent = "00";
    document.querySelector(".hour").textContent = "00";
    document.querySelector(".minutes").textContent = "00";
    document.querySelector(".seconds").textContent = "00";
    clearInterval(timer);
  }
};

// countDown();
const timer = setInterval(countDown, 1000);
