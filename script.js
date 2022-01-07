const imgs = document.getElementById('images');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const img = document.querySelectorAll('#images img');

let idx = 0;

let interval = setInterval(run, 2000);

leftBtn.addEventListener('click', slideLeft);
rightBtn.addEventListener('click', slideRight);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if(idx > img.length - 1) {
    idx = 0;
  } else if(idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

function slideLeft() {
  idx--;
  changeImage();
  resetInterval();
}

function slideRight() {
  idx++;
  changeImage();
  resetInterval();
}

