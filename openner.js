const btnOpen = document.getElementById("open-message");
const body = document.querySelector("body");
const openner = document.querySelector("#openner");
const receiver = document.querySelector("#receiver");
const music = document.querySelector("audio");
const musicIcon = document.querySelector(".music-icon");

musicIcon.addEventListener("click", () => {
  if (musicIcon.classList.contains("disabled")) {
    musicIcon.classList.remove("disabled");
    music.play();
  } else {
    musicIcon.classList.add("disabled");
    music.pause();
  }
});

let params = new URLSearchParams(location.search);
let name = params.get("to");

if (name) {
  receiver.innerText = name;
} else {
  receiver.innerText = "";
}

btnOpen.addEventListener("click", () => {
  body.classList.remove("overflow-hidden");
  setTimeout(() => {
    openner.remove();
  }, 500);
  openner.style.transform = "translateY(-100vh)";
  music.play();
});
