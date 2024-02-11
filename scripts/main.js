// Mobile nav toggle
const mobileNav = document.querySelector(".header__hamburger");
const mobileList = document.querySelector(".header__mobile");
mobileNav.addEventListener("click", function () {
  mobileList.classList.toggle("mobile-nav");
  mobileList.classList.toggle("mobile-toggle");
});

const legalTimeElement = document.querySelector(".legal-time");
const legalTime = new Date().getFullYear();
legalTimeElement.textContent = legalTime;

const card = document.querySelectorAll(".process-card");

function addClick(event) {
  const cardBody = event.currentTarget.querySelector(".process-card__body");
  cardBody.classList.toggle("toggle-display-none");
  const icon = event.currentTarget.querySelector(".process-card__icon-img");

  // Check if the card body is currently visible or hidden
  const isBodyVisible = !cardBody.classList.contains("toggle-display-none");

  // Update the icon based on the current state
  icon.src = isBodyVisible
    ? `../images/icons/minus.svg`
    : `../images/icons/plus.svg`;
}

card.forEach((element) => {
  element.addEventListener("click", addClick);
});

const preloader = document.querySelector("[data-preloader]");
const html = document.querySelector("html");

window.addEventListener("load", () => {
  preloader.classList.add("remove");
  html.classList.add("preloaded");
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  // Check if the user has scrolled down at least 200 pixels
  if (window.scrollY >= 100) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
    // If the user scrolls back to the top, revert the background color
  }
});
