document.addEventListener("DOMContentLoaded", function () {
  const kanbanColumns = document.querySelectorAll(".kanban-content");

  kanbanColumns.forEach((column) => {
    new Sortable(column, {
      group: "kanban", // set the group to enable drag and drop between lists
      animation: 150,
      filter: ".kanban-title", // specify the class of elements that should not be draggable
      preventOnFilter: false, // prevent the default action for filtered elements
      onEnd: function (event) {
        // Here you can handle the logic when the drag and drop action ends
        const itemEl = event.item; // dragged HTMLElement
        const fromColumn = event.from; // source list
        const toColumn = event.to; // target list
        const fromIndex = event.oldIndex; // index of the element within the source list
        const toIndex = event.newIndex; // index of the element within the target list

        console.log(
          `Moved item ${itemEl.textContent.trim()} from column ${
            fromColumn.id
          } at index ${fromIndex} to column ${toColumn.id} at index ${toIndex}`
        );

        // Update the task state if necessary, e.g., using a function like updateTasks()
      },
    });
  });

  //   const toggleMinimize = () => {
  //     document.querySelectorAll(".kanban").forEach((kanban) => {
  //       kanban.classList.toggle("minimize");
  //     });
  //   };

  //   document.querySelectorAll(".main-title").forEach((title) => {
  //     title.addEventListener("click", toggleMinimize);
  //   });
});

document.addEventListener("DOMContentLoaded", function () {
  const closeIcons = document.querySelectorAll(".close-icon");

  closeIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const kanban = icon.closest(".kanban");
      const contentContainer = kanban.querySelector(
        ".kanban-content-container"
      );
      kanban.classList.toggle("minimize");
      contentContainer.style.display = kanban.classList.contains("minimize")
        ? "none"
        : "flex";
      // Toggle the inner HTML of the close icon
      if (kanban.classList.contains("minimize")) {
        icon.innerHTML = "expand_content"; // Change to "expand" when minimized
      } else {
        icon.innerHTML = "close"; // Change back to "close" when expanded
      }
    });
  });
});

// const colorMenuToggle = document.querySelectorAll(".change-color");
// const colorMenu = document.querySelectorAll(".color-menu");
// const colorOptions = document.querySelectorAll(".color-option");

// colorMenuToggle.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     const menu = toggle.nextElementSibling;
//     menu.classList.toggle("active");
//   });
// });

// colorMenu.forEach((menu) => {
//   menu.addEventListener("click", (event) => {
//     event.stopPropagation();
//   });
// });

// document.addEventListener("click", (event) => {
//   colorMenu.forEach((menu) => {
//     menu.classList.remove("active");
//   });
// });

// // Apply the selected color to the Kanban note
// colorOptions.forEach((option) => {
//   option.addEventListener("click", (event) => {
//     const color = event.target.dataset.color;
//     const kanbanNote = option.closest(".kanban-note");
//     kanbanNote.classList.remove("pink-border", "blue-border", "yellow-border"); // Remove existing borders
//     kanbanNote.classList.add(`${color}-border`); // Apply the new border class based on the selected color
//     // You can add further logic here to update the Kanban note's data (e.g., store the color preference)
//   });
// });

const colorMenuToggle = document.querySelectorAll(".change-color");
const colorMenu = document.querySelectorAll(".color-menu");
const colorOptions = document.querySelectorAll(".color-option");

colorMenuToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const menu = toggle.nextElementSibling;
    menu.classList.toggle("active");
  });
});

colorMenu.forEach((menu) => {
  menu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

document.addEventListener("click", (event) => {
  colorMenu.forEach((menu) => {
    menu.classList.remove("active");
  });
});

// Helper function to get the current border color class
function getCurrentBorderColorClass(element) {
  const classes = Array.from(element.classList);
  return classes.find((cls) => cls.endsWith("-border"));
}

// Apply the selected color to the Kanban note
colorOptions.forEach((option) => {
  option.addEventListener("click", (event) => {
    const color = event.target.dataset.color;
    const kanbanNote = option.closest(".kanban-note");
    const currentBorderClass = getCurrentBorderColorClass(kanbanNote);

    if (currentBorderClass) {
      kanbanNote.classList.remove(currentBorderClass);
    }
    kanbanNote.classList.add(`${color}-border`);

    // You can add further logic here to update the Kanban note's data (e.g., store the color preference)
  });
});
