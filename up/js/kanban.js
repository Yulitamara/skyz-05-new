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
      },
    });
  });
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

const colorMenuToggle = document.querySelectorAll(".change-color");
const colorMenu = document.querySelectorAll(".color-menu");
const colorOptions = document.querySelectorAll(".color-option");

function toggleActiveClass(element) {
  element.classList.toggle("active");
}

colorMenuToggle.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();

    const associatedMenu = toggle.nextElementSibling;

    toggleActiveClass(associatedMenu);
  });
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".change-color") &&
    !event.target.closest(".color-menu")
  ) {
    colorMenu.forEach((menu) => {
      menu.classList.add("active");
    });
  }
});

function getCurrentBorderColorClass(element) {
  const classes = Array.from(element.classList);
  return classes.find((cls) => cls.endsWith("-border"));
}

colorOptions.forEach((option) => {
  option.addEventListener("click", (event) => {
    const color = event.target.dataset.color;
    const kanbanNote = option.closest(".kanban-note");
    const currentBorderClass = getCurrentBorderColorClass(kanbanNote);
    const lineElement = kanbanNote.querySelector(".line");

    if (currentBorderClass) {
      kanbanNote.classList.remove(currentBorderClass);
      lineElement.classList.remove(currentBorderClass);
    }

    const newColorClass = `${color}-border`;
    kanbanNote.classList.add(newColorClass);
    lineElement.classList.add(newColorClass);
  });
});

// Initialize flatpickr on note-date elements
const dateElements = document.querySelectorAll(".note-date");

dateElements.forEach((dateElement) => {
  flatpickr(dateElement, {
    dateFormat: "d-m-y",
    onChange: function (selectedDates, dateStr, instance) {
      // Update the text content of the note-date element
      dateElement.textContent = dateStr;
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dateElements = document.querySelectorAll(".note-date");

  dateElements.forEach((dateElement) => {
    flatpickr(dateElement, {
      dateFormat: "d-m-y",
      onChange: function (selectedDates, dateStr, instance) {
        dateElement.textContent = dateStr;
      },
      appendTo: dateElement.parentElement,
    });
  });
});
