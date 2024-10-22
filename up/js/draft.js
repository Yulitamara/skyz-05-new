const grid = document.getElementById("grid");
let draggedItem = null;

document.querySelectorAll(".grid-item").forEach((item) => {
  item.addEventListener("dragstart", function (e) {
    draggedItem = this;
    setTimeout(() => {
      this.style.display = "none";
    }, 0);
  });

  item.addEventListener("dragend", function (e) {
    setTimeout(() => {
      draggedItem.style.display = "block";
      draggedItem = null;
    }, 0);
  });

  item.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  item.addEventListener("dragenter", function (e) {
    e.preventDefault();
    this.style.transform = "scale(1.1)";
  });

  item.addEventListener("dragleave", function (e) {
    this.style.transform = "scale(1)";
  });

  item.addEventListener("drop", function (e) {
    if (draggedItem !== this) {
      this.style.transform = "scale(1)";
      this.parentNode.insertBefore(draggedItem, this);
    }
  });
});
