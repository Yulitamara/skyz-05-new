const sidebar = document.querySelector(".side-nav");
const sidebarBtn = document.getElementById("sideNavBtn");
const navbarOverlay = document.querySelector(".navbar__overlay");
const skyzName = document.querySelector(".skyz-name");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  // navbarOverlay.classList.toggle("open");
  skyzName.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (!sidebar.contains(targetElement) && !sidebarBtn.contains(targetElement)) {
    sidebar.classList.add("active");
    // navbarOverlay.classList.remove("open");
  }
});
