const menu = document.querySelector(".menu");
const hamburger = document.getElementById("hamburger-btn");
const navbarOverlay = document.querySelector(".navbar__overlay");
const skyzName = document.querySelector(".skyz-name");
const navbarInputs = document.querySelectorAll(".navbar-input");
const searchInput = document.getElementById("searchInput");
const createInput = document.getElementById("createInput");
const createShow = document.querySelector(".create-show");
const addMenuBtn = document.getElementById("addMenuBtn");

const searchMenu = document.querySelector(".search-menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  skyzName.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (
    !menu.contains(targetElement) &&
    !hamburger.contains(targetElement) &&
    !skyzName.contains(targetElement)
  ) {
    menu.classList.add("active");
    skyzName.classList.add("active");
  }

  if (targetElement === createInput || targetElement === addMenuBtn) {
    skyzName.classList.add("active");
  }
});

searchInput.addEventListener("click", function () {
  searchMenu.classList.remove("active");
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (
    !searchInput.contains(targetElement) &&
    !searchMenu.contains(targetElement)
  ) {
    // If the click is outside both searchInput and searchMenu, add 'active' to searchMenu
    searchMenu.classList.add("active");
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
  createShow.classList.remove("active");
  searchMenu.classList.add("active");
}

function searchBtnClickHandler(event) {
  event.stopPropagation(); // Prevents click event from propagating to document

  const createInput = document.getElementById("createInput");
  const searchInput = document.getElementById("searchInput");
  searchInput.classList.toggle("active");
  createInput.classList.add("active");
  searchMenu.classList.remove("active");
  createShow.classList.add("active");
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

handleResize();



document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("search-btn");
  const createBtn = document.getElementById("create-btn");
  const searchDiv = document.querySelector(".navbar__main--search");
  const createDiv = document.querySelector(".navbar__main--create");

  // Store the original parent and sibling positions of searchDiv and createDiv
  const searchOriginalParent = searchDiv.parentNode;
  const searchOriginalNextSibling = searchDiv.nextElementSibling;
  const createOriginalParent = createDiv.parentNode;
  const createOriginalNextSibling = createDiv.nextElementSibling;

  let currentElement = null;

  function moveToTarget(targetElement) {
    if (currentElement) {
      currentElement.classList.remove("margin-adjustment");
      restoreOriginalPosition(currentElement);
    }
    targetElement.classList.add("margin-adjustment");
    currentElement = targetElement;
  }

  function restoreOriginalPosition(element) {
    if (element === searchDiv) {
      searchOriginalParent.insertBefore(searchDiv, searchOriginalNextSibling);
    } else if (element === createDiv) {
      createOriginalParent.insertBefore(createDiv, createOriginalNextSibling);
    }
  }

  function handleClickOutside(event) {
    if (currentElement && !currentElement.contains(event.target)) {
      currentElement.classList.remove("margin-adjustment");
      restoreOriginalPosition(currentElement);
      currentElement = null;
    }
  }

  searchBtn.addEventListener("click", function () {
    moveToTarget(searchDiv);
  });

  createBtn.addEventListener("click", function () {
    moveToTarget(createDiv);
  });

  document.addEventListener("click", function (event) {
    handleClickOutside(event);
  });

  window.addEventListener("resize", function () {
    // Restore elements when screen is resized, if needed
    if (currentElement) {
      currentElement.classList.remove("margin-adjustment");
      restoreOriginalPosition(currentElement);
      currentElement = null;
    }
  });
});
