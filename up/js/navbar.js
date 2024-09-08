const menu = document.querySelector(".menu");
const hamburger = document.getElementById("hamburger-btn");
const navbarOverlay = document.querySelector(".navbar__overlay");
const skyzName = document.querySelector(".skyz-name");
const navbarInputs = document.querySelectorAll('.navbar-input');
const labelContainer = document.querySelector('.label-container');
const searchInput = document.getElementById("searchInput");
const createInput = document.getElementById("createInput");
const createShow = document.querySelector(".create-show")


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

searchInput.addEventListener('click', function() {
  labelContainer.classList.remove('active');
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (!searchInput.contains(targetElement)) {
    labelContainer.classList.add('active');
  }
});

createInput.addEventListener('click', function() {
  createShow.classList.remove('active');
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (!createInput.contains(targetElement) &&  !createShow.contains(targetElement)) {
    createShow.classList.add('active');
  }
});

navbarInputs.forEach((navbarInput) => {
  navbarInput.addEventListener('click', function() {

    navbarInput.classList.add('search-input-clicked');
  });

  document.addEventListener("click", (event) => {
    const targetElement = event.target;

    if (!navbarInput.contains(targetElement)) {
      navbarInput.classList.remove('search-input-clicked');
    }
  });
});

function handleResize() {
  if (window.innerWidth < 850) {
      document.querySelectorAll('.navbar-input').forEach(input => {
          input.classList.add('active');
      });
  } else {
      document.querySelectorAll('.navbar-input').forEach(input => {
          input.classList.remove('active');
      });
  }
}

document.getElementById('create-btn').addEventListener('click', function() {
  document.getElementById('createInput').classList.toggle('active');
});

document.getElementById('search-btn').addEventListener('click', function() {
  document.getElementById('searchInput').classList.toggle('active');
});

window.addEventListener('resize', handleResize);

handleResize();
