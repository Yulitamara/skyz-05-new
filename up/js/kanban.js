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
