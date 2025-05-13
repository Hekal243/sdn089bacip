// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const now = new Date();
const hour = now.getHours();
const day = now.getDay();

// Inside
hamburgerMenu.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// Outside
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

let isOpen = false;
if (day >= 1 && day <= 6 && hour >= 7 && hour < 16) isOpen = true;

const statusEl = document.getElementById("open-status");

if (isOpen) {
  statusEl.textContent = "[Open]";
  statusEl.classList.add("buka");
} else {
  statusEl.textContent = "[Closed]";
  statusEl.classList.add("tutup");
}

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
