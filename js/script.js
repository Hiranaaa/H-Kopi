// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const slider = document.getElementById("menu-slider");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

rightBtn.onclick = () => {
  slider.scrollLeft += 320;
};

leftBtn.onclick = () => {
  slider.scrollLeft -= 320;
};

const newsSlider = document.getElementById("news-slider");
const newsLeft = document.getElementById("news-left");
const newsRight = document.getElementById("news-right");

newsRight.onclick = () => {
  newsSlider.scrollLeft += 400;
};

newsLeft.onclick = () => {
  newsSlider.scrollLeft -= 400;
};
