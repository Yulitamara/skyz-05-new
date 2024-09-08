const menu = document.querySelector(".menu");
const hamburger = document.getElementById("hamburger-btn");
const navbarOverlay = document.querySelector(".navbar__overlay");
const skyzName = document.querySelector(".skyz-name");
const navbarInput = document.querySelector('.navbar-input');
const labelContainer = document.querySelector('.label-container');

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  skyzName.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (!menu.contains(targetElement) && !hamburger.contains(targetElement)) {
    menu.classList.add("active");
    skyzName.classList.add("active");
  }
});

navbarInput.addEventListener('click', function() {
  labelContainer.classList.remove('active');
  
  navbarInput.classList.add('search-input-clicked');
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (!navbarInput.contains(targetElement)) {
    labelContainer.classList.add('active');
  
  navbarInput.classList.remove('search-input-clicked');
  }
});