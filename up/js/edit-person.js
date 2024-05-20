const editIcon = document.getElementById("editIcon");
const editIcon1 = document.getElementById("editIcon1");
const editContent = document.getElementById("editContent");
const editContent1 = document.getElementById("editContent1");
const toEdit = document.getElementById("toEdit");
const content0 = document.getElementById("content0");
const localEdit = document.getElementById("localEdit");

toEdit.addEventListener("click", () => {
  editIcon1.classList.toggle("active");
  editContent.classList.toggle("active");
  editContent1.classList.toggle("active");
  toEdit.classList.toggle("active");
});

editIcon1.addEventListener("click", () => {
  editIcon.classList.add("active");
  editIcon1.classList.toggle("active");
  editContent.classList.toggle("active");
  editContent1.classList.toggle("active");
  toEdit.classList.toggle("active");
});
editIcon.addEventListener("click", () => {
  editIcon.classList.toggle("active");
  editIcon1.classList.toggle("active");
  editContent.classList.toggle("active");
  editContent1.classList.toggle("active");
  toEdit.classList.toggle("active");
});

function selectText() {
  const input = document.getElementById("number");
  editIcon.classList.remove("active");

  input.focus();
  input.select();
}


