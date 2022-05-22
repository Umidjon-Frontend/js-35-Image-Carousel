const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let interval = setInterval(run, 2000);

let index = 0;

function run() {
  index++;

  runCarousel();
}

function runCarousel() {
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }

  imgs.style.transform = `translateX(${-index * 600}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

prev.addEventListener("click", () => {
  index--;
  runCarousel();
  resetInterval();
});

next.addEventListener("click", () => {
  index++;
  runCarousel();
  resetInterval();
});
