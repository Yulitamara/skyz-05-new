document.addEventListener("DOMContentLoaded", function() {
    const editContents = document.querySelectorAll('.edit-content');
  
    editContents.forEach(editContent => {
      const editField = editContent.querySelector('.edit-field');
  
      // Add focus class when clicking on edit content or typing
      editContent.addEventListener('click', function() {
        editContent.classList.add('focus-content');
      });
  
      editField.addEventListener('input', function() {
        editContent.classList.add('focus-content');
      });
  
      // Remove focus class when clicking outside the edit content
      document.addEventListener('click', function(event) {
        if (!editContent.contains(event.target)) {
            editContent.classList.remove('focus-content');
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
document.querySelectorAll('.edit-content').forEach((element) => {
    let pressTimeout;
  
    // Function to handle the start of a long press (mouse down or touch start)
    const startPress = () => {
      pressTimeout = setTimeout(() => {
        // If the press lasts long enough, add the class
        element.classList.add('focus-content-press');
      }, 500); // Long press threshold (500 milliseconds)
    };
  
    // Function to handle the end of a long press (mouse up or touch end)
    const endPress = () => {
      clearTimeout(pressTimeout); // Cancel the timeout
      element.classList.remove('focus-content-press'); // Remove the class
    };
  
    // Add event listeners for both mouse and touch events
    element.addEventListener('mousedown', startPress);
    element.addEventListener('mouseup', endPress);
  
    element.addEventListener('touchstart', startPress);
    element.addEventListener('touchend', endPress);
  
    // Ensure the press is cleared if the mouse leaves the element
    element.addEventListener('mouseleave', endPress);
  });
  