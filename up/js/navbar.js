const menu = document.querySelector(".menu");
const hamburger = document.getElementById("hamburger-btn");
const navbarOverlay = document.querySelector(".navbar__overlay");
const skyzName = document.querySelector(".skyz-name");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  // navbarOverlay.classList.toggle("open");
  skyzName.classList.toggle("active");
  // document.querySelector(".navbar__main--menu").style.width = "min-content";
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (!menu.contains(targetElement) && !hamburger.contains(targetElement)) {
    menu.classList.add("active");
    skyzName.classList.toggle("active");
  }
});
