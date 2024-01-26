const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
console.log(items);

let futureDate = new Date(2024, 3, 8, 20, 30, 0);
console.log(futureDate);

let month = futureDate.getMonth();
month = months[month];

let day = futureDate.getDay();
console.log(day);
day = weekdays[day];

const date = futureDate.getDate();

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();


giveaway.textContent = `Giveaway ends on ${day}, ${month} ${date} ${year} ${hours}:${minutes}pm`;

// future time in ms

const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;

  // 1 sec == 1000ms
  // 1 min == 60s
  // 1 hour == 60min
  // 1 day == 24hours

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = t/oneDay
  days = Math.floor(days);

  let hours = Math.floor((t%oneDay) / oneHour);
  let minutes = Math.floor((t%oneHour) / oneMinute);
  let seconds = Math.floor((t%oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item){
    if(item < 10){
      return item = `0${item}`
    } return item;
  }

  items.forEach(function(items, index){
    items.innerHTML = format(values[index]);
  })
}

getRemainingTime();