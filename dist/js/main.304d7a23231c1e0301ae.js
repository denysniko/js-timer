/******/ (function() { // webpackBootstrap
/******/ 	"use strict";


document.addEventListener('DOMContentLoaded', () => {
  const deadline = '2024-09-12';

  // Function that calculates the time difference between the current date and the deadline date
  const сalculateTimeDifference = timeisover => {
    const time = Date.parse(timeisover) - Date.parse(new Date());
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hour = Math.floor(time / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(time / 1000 / 60 % 60);
    let seconds = Math.floor(time / 1000 % 60);
    return {
      time,
      days,
      hour,
      minutes,
      seconds
    };
  };

  // Function that adds zero
  const addZeroTimer = num => {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else if (num < 0) {
      return '00';
    } else {
      return num;
    }
  };

  // Function that initialises the timer and updates the values on the page
  const setTimer = (selector, timeisover) => {
    const getTimer = document.querySelector(selector),
      days = getTimer.querySelector('#days'),
      hours = getTimer.querySelector('#hours'),
      min = getTimer.querySelector('#minutes'),
      sec = getTimer.querySelector('#seconds');
    const timeInterval = setInterval(updateTimer, 1000);
    updateTimer();

    // Function that updates timer values on the page
    function updateTimer() {
      // Calculate the remaining time left in this sec
      const remainingTime = сalculateTimeDifference(timeisover);
      days.innerHTML = addZeroTimer(remainingTime.days);
      hours.innerHTML = addZeroTimer(remainingTime.hour);
      min.innerHTML = addZeroTimer(remainingTime.minutes);
      sec.innerHTML = addZeroTimer(remainingTime.seconds);

      // If the time has expired, stop the timer
      if (remainingTime.time <= 0) {
        clearInterval(timeInterval);
      }
    }
  };
  setTimer('.timer', deadline);
});
/******/ })()
;