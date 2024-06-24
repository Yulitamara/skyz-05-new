document.addEventListener("DOMContentLoaded", function () {
  const editContents = document.querySelectorAll(".edit-content");

  editContents.forEach((editContent) => {
    const editField = editContent.querySelector(".edit-field");

    // Add focus class when clicking on edit content or typing
    editContent.addEventListener("click", function () {
      editContent.classList.add("focus-content");
    });

    editField.addEventListener("input", function () {
      editContent.classList.add("focus-content");
    });

    // Remove focus class when clicking outside the edit content
    document.addEventListener("click", function (event) {
      if (!editContent.contains(event.target)) {
        editContent.classList.remove("focus-content");
      }
    });
  });
});

//   typing

// Selecting the necessary elements
const typingElement = document.getElementById("typing");
const typeHereElement = document.getElementById("type-here");
const editTypingElement = document.getElementById("edit-typing");

// Function for mouse over
typingElement.addEventListener("mouseover", () => {
  typeHereElement.classList.remove("active");
});

// Function for mouse out
typingElement.addEventListener("mouseout", () => {
  typeHereElement.classList.add("active");
});

// Function for when typing starts
typeHereElement.addEventListener("input", () => {
  editTypingElement.classList.remove("active");
  typingElement.classList.add("active");
});

// press
document.querySelectorAll(".edit-content").forEach((element) => {
  let pressTimeout;

  // Function to handle the start of a long press (mouse down or touch start)
  const startPress = () => {
    pressTimeout = setTimeout(() => {
      // If the press lasts long enough, add the class
      element.classList.add("focus-content-press");
    }, 500); // Long press threshold (500 milliseconds)
  };

  // Function to handle the end of a long press (mouse up or touch end)
  const endPress = () => {
    clearTimeout(pressTimeout); // Cancel the timeout
    element.classList.remove("focus-content-press"); // Remove the class
  };

  // Add event listeners for both mouse and touch events
  element.addEventListener("mousedown", startPress);
  element.addEventListener("mouseup", endPress);

  element.addEventListener("touchstart", startPress);
  element.addEventListener("touchend", endPress);

  // Ensure the press is cleared if the mouse leaves the element
  element.addEventListener("mouseleave", endPress);
});

//////////////////////////// new person local
document
  .getElementById("create-new-person")
  .addEventListener("click", function () {
    document.getElementById("hide-for-example").classList.add("active");
    document.getElementById("new-person-local").classList.remove("active");
    document.getElementById("for-bg-change").classList.add("new-class-bg");
  });

// Event listener for the first button
document
  .getElementById("click-open-second-level-menu")
  .addEventListener("click", function () {
    // Remove "active" class from the element with id "menu-second-level"
    document.getElementById("menu-second-level").classList.remove("active");
  });

// Event listener for the second button
document
  .getElementById("click-open-second-level-card")
  .addEventListener("click", function () {
    // Add "active" class to the element with id "new-person-local"
    document.getElementById("new-person-local").classList.add("active");
    // Remove "active" class from the element with id "second-level-card"
    document.getElementById("second-level-card").classList.remove("active");
  });

const elements = document.querySelectorAll(".edit-content-menu__category");

elements.forEach((element) => {
  const text = element.textContent.trim();
  const words = text.split(" ");

  if (words.length > 1) {
    element.textContent = words[0] + "...";
    element.title = text;
  }
});
