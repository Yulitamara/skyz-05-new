const expendButtons = document.querySelectorAll(".expend-btn");

const minimizeButtons = document.querySelectorAll(".minimize");

const closeExpandButtons = document.querySelectorAll(".close-expand-new");

const kanbanContent = document.querySelectorAll(".kanban-content");


function handleExpandedClass() {
  // Get the screen width
  const screenWidth = window.innerWidth;

  expendButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const parentBox = button.closest(".box-reduced");
      closeExpandButtons[index].style.display = "block";

      const zeroExtend = parentBox.querySelector(".zero-extend");
      const firstExtend = parentBox.querySelector(".first-extend");


      if (zeroExtend.classList.contains("active")) {
        button.classList.remove("clicked");


        if (screenWidth > 1200) {
          if (!parentBox.classList.contains("expanded")) {
            parentBox.classList.add("expanded");
          } else if (screenWidth > 2000) {
            parentBox.classList.add("expanded-max");
            button.classList.add("disabled-btn");
            
          }
        }
      }

      zeroExtend.classList.add("active");
      firstExtend.classList.remove("active");

      firstExtend.classList.add("red-frame");

      setTimeout(() => {
        firstExtend.classList.remove("red-frame");
      }, 500);
    });
  });

  minimizeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const parentBox = button.closest(".box-reduced");

      const zeroExtend = parentBox.querySelector(".zero-extend");
      const firstExtend = parentBox.querySelector(".first-extend");

      if (zeroExtend.classList.contains("active")) {
        if (screenWidth > 1200) {
          if (parentBox.classList.contains("expanded")) {
            expendButtons[index].classList.remove("disabled-btn");
            parentBox.classList.remove("expanded");
          }
          if (
            screenWidth > 2000 &&
            parentBox.classList.contains("expanded-max")
          ) {
            parentBox.classList.remove("expanded-max");
            parentBox.classList.add("expanded");
            expendButtons[index].classList.remove("disabled-btn");
          }
        }
      }
      if (
        !parentBox.classList.contains("expanded") &&
        !parentBox.classList.contains("expanded-max")
      ) {
        zeroExtend.classList.remove("active");
        firstExtend.classList.add("active");
        closeExpandButtons[index].classList.add("active");
      }

      firstExtend.classList.add("red-frame");

      setTimeout(() => {
        firstExtend.classList.remove("red-frame");
      }, 500);
    });
  });

  closeExpandButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const parentBox = button.closest(".box-reduced");

      const zeroExtend = parentBox.querySelector(".zero-extend");
      const firstExtend = parentBox.querySelector(".first-extend");

      parentBox.classList.remove("expanded");
      expendButtons[index].classList.remove("disabled-btn");

      firstExtend.classList.add("active");
      zeroExtend.classList.remove("active");

      if (!zeroExtend.classList.contains("active")) {
        button.style.display = "none";
      }
    });
  });
}

function handleResize() {
  handleExpandedClass();
}

window.addEventListener("load", handleExpandedClass);
window.addEventListener("resize", handleExpandedClass);

///////////////////////////// OPEN IN NEW ////////////////////////////
const openInNewButtons = document.querySelectorAll(".open-in-new");
const smallBoxes = document.querySelectorAll(".small-box");
const fullBoxes = document.querySelectorAll(".full-box");

const smallBoxesWrapper = document.querySelector(".small-boxes-wrapper");

const cardBoxes = document.querySelector(".card__boxes");

function hideAllFullBoxes() {
  fullBoxes.forEach((fullBox) => {
    fullBox.style.display = "none";
  });
}

openInNewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cardBoxes.classList.add("active");

    smallBoxesWrapper.classList.remove("active");

    const fullBoxesContainer = document.querySelector(".full-boxes");
    fullBoxesContainer.classList.remove("active");

    // Hide all full boxes
    hideAllFullBoxes();
  });
});

smallBoxes.forEach((smallBox) => {
  smallBox.addEventListener("click", () => {
    smallBoxes.forEach((box) => {
      box.classList.remove("red-background");
    });

    smallBox.classList.add("red-background");

    const target = smallBox.getAttribute("data-target");

    hideAllFullBoxes();

    const matchingFullBox = document.querySelector(
      `.full-box[data-target="${target}"]`
    );
    if (matchingFullBox) {
      matchingFullBox.style.display = "block";
    }
  });
});

////////// GO BACK //////////////
const closeSecondExtendButtons = document.querySelector(".close-second-extend");

const hideSingleButtons = document.querySelectorAll(".hide-single");

function activateElements() {
  smallBoxesWrapper.classList.add("active");
  hideAllFullBoxes();
  cardBoxes.classList.remove("active");

  smallBoxes.forEach((box) => {
    box.classList.remove("red-background");
  });
}

closeSecondExtendButtons.addEventListener("click", () => {
  activateElements();
});

// Add a click event listener to each "hide-single" button
hideSingleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateElements();
  });
});

// MINIMIZE
minimizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const parentBox = button.closest(".box-reduced");
    const zeroExtend = parentBox.querySelector(".zero-extend");

    if (!zeroExtend.classList.contains("active")) {
      parentBox.style.transformOrigin = "bottom middle";
      parentBox.style.transitionProperty = "transform";
      parentBox.style.transitionDuration = "0.5s";
      parentBox.style.transitionTimingFunction = "ease";
      parentBox.style.transform = "scale(0)";

      setTimeout(() => {
        parentBox.classList.add("active");

        const target = parentBox.getAttribute("data-target");
        const matchingSmallBoxSecond = document.querySelector(
          `.small-box-second[data-target="${target}"]`
        );

        if (matchingSmallBoxSecond) {
          matchingSmallBoxSecond.classList.add("pop-in");

          setTimeout(() => {
            matchingSmallBoxSecond.classList.remove("active");
          }, 0);
        }

        setTimeout(() => {
          parentBox.style.transform = "scale(1)";
        }, 2000);
      }, 200);
    }
  });
});

const smallBoxSecondButtons = document.querySelectorAll(".small-box-second");
smallBoxSecondButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");
    const matchingBoxReduced = document.querySelector(
      `.box-reduced[data-target="${target}"]`
    );

    if (matchingBoxReduced) {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        matchingBoxReduced.classList.add("active");
      } else {
        button.classList.add("active");
        matchingBoxReduced.classList.remove("active");
        matchingBoxReduced.style.transformOrigin = "bottom middle";
        matchingBoxReduced.style.transitionProperty = "transform";
        matchingBoxReduced.style.transitionDuration = "0.6s";
        matchingBoxReduced.style.transitionTimingFunction = "ease";
        matchingBoxReduced.style.transform = "scale(0)";

        setTimeout(() => {
          matchingBoxReduced.style.transform = "scale(1)";
          // Scroll to the matching .box-reduced element
          scrollMatchingBoxIntoView(matchingBoxReduced);
        }, 0);
      }
    }
  });
});

// Function to scroll the element into view with an additional offset of 600 pixels
function scrollMatchingBoxIntoView(element) {
  const offset = 120;
  const scrollPosition =
    element.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
}

// Function to hide all full boxes
function hideAllFullBoxes() {
  fullBoxes.forEach((fullBox) => {
    fullBox.style.display = "none";
  });
}

// Function to remove "active" class from all .box-reduced elements
function removeActiveFromBoxReduced() {
  const boxReducedElements = document.querySelectorAll(".box-reduced");
  boxReducedElements.forEach((box) => {
    box.classList.remove("active");
  });
}

// Function to add "active" class to all .small-box-second elements
function addActiveToSmallBoxSecond() {
  const smallBoxSecondElements = document.querySelectorAll(".small-box-second");
  smallBoxSecondElements.forEach((box) => {
    box.classList.add("active");
  });
}

// Add a click event listener to each "open-in-new" button
openInNewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Add the "active" class to all .small-box-second elements
    addActiveToSmallBoxSecond();

    // Remove the "active" class from all .box-reduced elements
    removeActiveFromBoxReduced();

    // Add the "active" class to .card__boxes
    cardBoxes.classList.add("active");

    // Remove the "active" class from .small-boxes-wrapper
    smallBoxesWrapper.classList.remove("active");

    const fullBoxesContainer = document.querySelector(".full-boxes");
    fullBoxesContainer.classList.remove("active");

    // Hide all full boxes
    hideAllFullBoxes();
  });
});

/////////////// menu and mail

// Add event listener to open new mail and scroll to it
document.getElementById("new-mail-btn").addEventListener("click", function () {
  // Remove active class from new-mail-card
  document.getElementById("new-mail-card").classList.remove("active");
});

// Add event listener to close new mail and add active class
document
  .getElementById("close-new-mail-card")
  .addEventListener("click", function () {
    // Add active class to new-mail-card
    document.getElementById("new-mail-card").classList.add("active");
  });

// Add event listener to open new mail and add active class to interactions-box
document
  .getElementById("new-mail-btn-2")
  .addEventListener("click", function () {
    // Remove active class from new-mail-local
    document.getElementById("new-mail-local").classList.remove("active");

    // Add active class to interactions-box
    document.getElementById("interactions-box").classList.add("active");
  });

// Add event listener to close new mail and update classes
document
  .getElementById("close-new-mail-local")
  .addEventListener("click", function () {
    // Add active class to new-mail-local
    document.getElementById("new-mail-local").classList.add("active");

    // Remove active class from interactions-box
    document.getElementById("interactions-box").classList.remove("active");
  });

const moreVertButton = document.querySelector(".more-vert");
const pushPinButton = document.getElementById("push-pin");
const iconsMenu = document.querySelector(".icons-menu");
const displayMenu = document.getElementById("display-menu");
const openExportMenu = document.getElementById("open-export-menu");
const exportMenu = document.getElementById("export-menu");
const openDeleteMenu = document.getElementById("open-delete-menu");
const deleteMenu = document.getElementById("delete-menu");
const openMrkMenu = document.getElementById("open-mark-menu");
const markMenu = document.getElementById("mark-menu");

function addActiveClassToMenus() {
  iconsMenu.classList.add("active");
  displayMenu.classList.add("active");
  exportMenu.classList.add("active");
  deleteMenu.classList.add("active");
  markMenu.classList.add("active");
}

// Prevent click events from propagating to the document level
function stopPropagation(event) {
  event.stopPropagation();
}

document.addEventListener("click", () => {
  addActiveClassToMenus();
});

moreVertButton.addEventListener("click", (event) => {
  stopPropagation(event);
  iconsMenu.classList.remove("active");
});

pushPinButton.addEventListener("click", (event) => {
  stopPropagation(event);
  iconsMenu.classList.add("active");
  displayMenu.classList.remove("active");
});

openExportMenu.addEventListener("click", (event) => {
  stopPropagation(event);
  iconsMenu.classList.add("active");
  exportMenu.classList.remove("active");
});

openDeleteMenu.addEventListener("click", (event) => {
  stopPropagation(event);
  iconsMenu.classList.add("active");
  deleteMenu.classList.remove("active");
});

openMrkMenu.addEventListener("click", (event) => {
  stopPropagation(event);
  iconsMenu.classList.add("active");
  markMenu.classList.remove("active");
});

// scroll boxes
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".small-boxes-container");
  const leftArrow = document.querySelector(".scroll-arrow-left");
  const rightArrow = document.querySelector(".scroll-arrow-right");

  const scrollStep = 200;

  function updateArrows() {
    leftArrow.style.display =
      container.scrollLeft + container.clientWidth < container.scrollWidth
        ? "flex"
        : "none";

    rightArrow.style.display =
      container.scrollLeft + container.clientWidth < container.scrollWidth
        ? "flex"
        : "none";
  }

  leftArrow.addEventListener("click", () => {
    container.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });

  rightArrow.addEventListener("click", () => {
    container.scrollBy({ left: scrollStep, behavior: "smooth" });
  });

  container.addEventListener("scroll", updateArrows);

  // Initially, check for overflow and update arrows
  updateArrows();

  // Check screen width and hide arrows if the screen is smaller than 440px
  function checkScreenWidth() {
    if (window.innerWidth <= 500) {
      isArrowsHidden = true;
      leftArrow.style.display = "none";
      rightArrow.style.display = "none";
    } else {
      isArrowsHidden = false;
      updateArrows();
    }
  }

  checkScreenWidth(); // Call the function on page load
  window.addEventListener("resize", checkScreenWidth); // Listen for screen width changes

  // Touch event listener to prevent arrow display on touch
  container.addEventListener("touchstart", () => {
    isArrowsHidden = true;
    leftArrow.style.display = "none";
    rightArrow.style.display = "none";
  });
});

// calendar
document.getElementById("open-calendar").addEventListener("click", function () {
  document.getElementById("interactions-box").classList.toggle("active");
  document.querySelector(".calendar-menu").classList.toggle("active");
  document.querySelector(".calendar-extend").classList.toggle("active");
  document.getElementById("open-calendar").classList.toggle("clicked");
});
document
  .getElementById("close-calendar")
  .addEventListener("click", function () {
    document.getElementById("interactions-box").classList.remove("active");
    document.querySelector(".calendar-menu").classList.add("active");
    document.querySelector(".calendar-extend").classList.add("active");
    document.getElementById("open-calendar").classList.remove("clicked");
  });

function handleDoubleClick() {
  // Get references to the elements
  const leftElement = document.getElementById("left");
  const leftSecondElement = document.getElementById("left-second");

  // Add "active" class to "left"
  leftElement.classList.add("active");

  // Remove "active" class from "left-second"
  leftSecondElement.classList.remove("active");
}

const container = document.querySelector(".small-boxes-container-second");
const button = document.getElementById("extend-btn-for-second-new");

let isWrapEnabled = false; // Flag to track wrapping state

button.addEventListener("click", function () {
  isWrapEnabled = !isWrapEnabled; // Toggle flag on each click

  if (isWrapEnabled) {
    container.style.flexWrap = "wrap";
    button.textContent = "close"; // Change button text to "close"
  } else {
    container.style.flexWrap = ""; // Remove flex-wrap style
    button.textContent = "expand_content"; // Change button text to "expand_content"
  }
});
