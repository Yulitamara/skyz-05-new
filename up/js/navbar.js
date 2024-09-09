const menu = document.querySelector(".menu");
const hamburger = document.getElementById("hamburger-btn");
const navbarOverlay = document.querySelector(".navbar__overlay");
const skyzName = document.querySelector(".skyz-name");
const navbarInputs = document.querySelectorAll(".navbar-input");
const labelContainer = document.querySelector(".label-container");
const searchInput = document.getElementById("searchInput");
const createInput = document.getElementById("createInput");
const createShow = document.querySelector(".create-show");

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

searchInput.addEventListener("click", function () {
  labelContainer.classList.remove("active");
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (!searchInput.contains(targetElement)) {
    labelContainer.classList.add("active");
  }
});

createInput.addEventListener("click", function () {
  createShow.classList.remove("active");
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (
    !createInput.contains(targetElement) &&
    !createShow.contains(targetElement)
  ) {
    createShow.classList.add("active");
  }
});

navbarInputs.forEach((navbarInput) => {
  navbarInput.addEventListener("click", function () {
    navbarInput.classList.add("search-input-clicked");
  });

  document.addEventListener("click", (event) => {
    const targetElement = event.target;

    if (!navbarInput.contains(targetElement)) {
      navbarInput.classList.remove("search-input-clicked");
    }
  });
});

function handleResize() {
  if (window.innerWidth < 850) {
    document.querySelectorAll(".navbar-input").forEach((input) => {
      input.classList.add("active");
    });
    // Add event listeners only if the screen is smaller than 850px
    setupEventListeners();
  } else {
    document.querySelectorAll(".navbar-input").forEach((input) => {
      input.classList.remove("active");
    });
    // Remove event listeners if the screen is larger than 850px
    removeEventListeners();
  }
}

function setupEventListeners() {
  document
    .getElementById("create-btn")
    .addEventListener("click", createBtnClickHandler);
  document
    .getElementById("search-btn")
    .addEventListener("click", searchBtnClickHandler);
  document.addEventListener("click", documentClickHandler);
}

function removeEventListeners() {
  document
    .getElementById("create-btn")
    .removeEventListener("click", createBtnClickHandler);
  document
    .getElementById("search-btn")
    .removeEventListener("click", searchBtnClickHandler);
  document.removeEventListener("click", documentClickHandler);
}

function createBtnClickHandler(event) {
  event.stopPropagation(); // Prevents click event from propagating to document

  const createInput = document.getElementById("createInput");
  const searchInput = document.getElementById("searchInput");

  createInput.classList.toggle("active");
  searchInput.classList.add("active");
}

function searchBtnClickHandler(event) {
  event.stopPropagation(); // Prevents click event from propagating to document

  const createInput = document.getElementById("createInput");
  const searchInput = document.getElementById("searchInput");

  searchInput.classList.toggle("active");
  createInput.classList.add("active");
}

function documentClickHandler(event) {
  const createInput = document.getElementById("createInput");
  const searchInput = document.getElementById("searchInput");
  const createBtn = document.getElementById("create-btn");
  const searchBtn = document.getElementById("search-btn");

  if (
    !createInput.contains(event.target) &&
    !createBtn.contains(event.target)
  ) {
    createInput.classList.add("active");
  }

  if (
    !searchInput.contains(event.target) &&
    !searchBtn.contains(event.target)
  ) {
    searchInput.classList.add("active");
  }
}

window.addEventListener("resize", handleResize);

// Initial check to set up event listeners if necessary
handleResize();

// Select all elements with the class 'hover-text'
const hoverTextElements = document.querySelectorAll(".hover-text");

hoverTextElements.forEach(function (hoverTextElement) {
  hoverTextElement.addEventListener("mouseover", function () {
    document.querySelectorAll(".hover-example").forEach(function (el) {
      el.classList.add("hover-text");
    });
  });

  // hoverTextElement.addEventListener("mouseout", function () {
  //   // When mouse leaves, remove 'hover-text' class from all elements with 'hover-example'
  //   document.querySelectorAll(".hover-example").forEach(function (el) {
  //     el.classList.remove("hover-text");
  //   });
  // });
});
