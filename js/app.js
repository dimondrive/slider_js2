const img = document.querySelector(".slider__image");

const imgArr = ["img/228510.jpg", "img/228511.jpg", "img/228512.jpg"];

const dots = document.querySelectorAll(".slider__dot");

let currentIndex = 0;

function changeIndex(ind) {
  currentIndex = ind;
  slide(currentIndex);
}

function nextIndex(direction) {
  currentIndex += direction;
  if (currentIndex >= imgArr.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = imgArr.length - 1;
  }
  slide(currentIndex);
}

function updateDots(index) {
  for (let dot of dots) {
    dot.classList.remove("active");
  }
  dots[index].classList.add("active");
}
function slide(index) {
  img.src = imgArr[index];
  updateDots(index);
}
