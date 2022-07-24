const hari = document.querySelector(".hari");
const jam = document.querySelector(".jam");
const menit = document.querySelector(".menit");
const detik = document.querySelector(".detik");

function addZero(data) {
  if (data < 10) {
    return "0" + data;
  } else {
    return data;
  }
}

let countDownDate = new Date("Aug 8, 2022 00:00:00").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  hari.innerHTML = addZero(days);
  jam.innerHTML = addZero(hours);
  menit.innerHTML = addZero(minutes);
  detik.innerHTML = addZero(seconds);

  if (distance < 0) {
    clearInterval(x);
    hari.innerHTML = "00";
    jam.innerHTML = "00";
    menit.innerHTML = "00";
    detik.innerHTML = "00";
  }
}, 1000);
