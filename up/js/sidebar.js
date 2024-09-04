const sidebar = document.querySelector(".side-nav");
const sidebarBtn = document.getElementById("sideNavBtn");
const navbarOverlay = document.querySelector(".navbar__overlay");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  // navbarOverlay.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (!sidebar.contains(targetElement) && !sidebarBtn.contains(targetElement)) {
    sidebar.classList.add("active");
    // navbarOverlay.classList.remove("open");
  }
});

// const acountsCollapse = document.getElementById("acountsCollapse");
// const acountsBtn = document.querySelector(".btn-actions-menu");

// acountsBtn.addEventListener("click", () => {
//   const sideBarItem = acountsBtn.closest(".side-nav__content--list__item");

//   if (sideBarItem) {
//     acountsCollapse.classList.toggle("active");
//     if (acountsCollapse.classList.contains("active")) {
//       acountsBtn.innerHTML = "expand_more";
//       sideBarItem.style.background = "";
//     } else {
//       acountsBtn.innerHTML = "close";
//       sideBarItem.style.background = "var(--color-permanent-bg)";
//     }
//   }
// });
