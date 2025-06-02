// * Navbar Mobile

const hamburguerMenu = document.querySelector('#hamburguer__menu');
const navList = document.querySelector('.navbar__links');

hamburguerMenu.addEventListener('click', showMenu); 

function showMenu() {
  navList.classList.toggle('active');

  if (navList.classList.contains('active')) {
    hamburguerMenu.className = "bx bx-x"
  } else {
    hamburguerMenu.className = "bx  bx-menu-wider"
  }
}

// * Slider 

const slider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".slider__dots")
let currentIndex = 0;
let interval;

slide.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("slider__dot");
  dotsContainer.appendChild(dot);

  if (index===0) {
    dot.classList.add("active")
  }

  dot.setAttribute('data-index', index);
  dot.addEventListener('click', () => {
    goToSlide(index);
  })
})

function updateSlider() {
  slider.style.transform = `translateX(${-currentIndex * 100}%)`;
  updateDots();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slide.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slide.length) % slide.length;
  updateSlider();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

function updateDots() {
  document.querySelectorAll(".slider__dot").forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  })
}