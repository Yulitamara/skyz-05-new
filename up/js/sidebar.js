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

// window.addEventListener("resize", handleResize);
// window.addEventListener("load", handleResize);

// function handleResize() {
//   const navbarMain = document.querySelector(".navbar__main");
//   const smallScreenContainer = document.querySelector(
//     ".small-screen-append__navbar-main"
//   );

//   if (window.innerWidth <= 985) {
//     if (navbarMain && !smallScreenContainer.contains(navbarMain)) {
//       smallScreenContainer.appendChild(navbarMain);
//     }
//   } else {
//     const originalContainer = document.querySelector(".navbar__main-container"); // Replace with the original container
//     if (navbarMain && !originalContainer.contains(navbarMain)) {
//       originalContainer.appendChild(navbarMain);
//     }
//   }
// }
