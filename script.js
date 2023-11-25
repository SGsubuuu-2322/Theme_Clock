// This is the script file for the project written in Vanilla Js. ...
// This is some HTML elements captured in Js constants...
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");

// This is some utility arrays used in further project...
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// This is for toggle button...
toggleEl.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.value = "Dark-Mode";
  } else {
    html.classList.add("dark");
    e.target.value = "Light-Mode";
  }
});

// This is for setting the time for the clock...
function setTime() {
  const time = new Date();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hoursForClock >= 12 ? "PM" : "AM";

  // This is for rotating the needles dynamically in the clock...
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  // This is for time...
  timeEl.innerHTML = `${hoursForClock} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;

  // This is for date...
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// This is a utility method for converting a range of numbers into another range of numbers...
// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// This is for running the clock dynamically...
setTime();

setInterval(setTime, 1000);
