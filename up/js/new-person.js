// const typeCompanyInput = document.getElementById("type-company");
// const companyEdit = document.getElementById("company-edit");
// const newPersonCard = document.getElementById("new-person-card");

// typeCompanyInput.addEventListener("keyup", function (event) {
//   if (event.key === "Enter" && typeCompanyInput.value === "אימפקט") {
//     companyEdit.classList.remove("active");
//     newPersonCard.classList.add("active");
//   }
// });

const typeCompanyInput = document.getElementById("type-company");
const companyEdit = document.getElementById("company-edit");
const newPersonCard = document.getElementById("new-person-card");
const connectionsUnsaved = document.getElementById("connections-unsaved");
const connectionsSaved = document.getElementById("connections-saved");
const saveOrganizationButton = document.getElementById("save-organization");

saveOrganizationButton.addEventListener("click", function () {
  companyEdit.classList.add("active");
  newPersonCard.classList.remove("active");
  connectionsUnsaved.classList.add("active");
  connectionsSaved.classList.remove("active");
});

typeCompanyInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && typeCompanyInput.value === "אימפקט") {
    companyEdit.classList.remove("active");
    newPersonCard.classList.add("active");
    connectionsUnsaved.classList.add("active");
    connectionsSaved.classList.remove("active");
  }
});

const inputElement = document.getElementById("type-example");
const deleteButton = document.querySelector(".delete-text");

// Remove "active" class from deleteButton when typing in the input
inputElement.addEventListener("input", function () {
  deleteButton.classList.remove("active");
});

// Add "active" class to deleteButton and clear input when button is clicked
deleteButton.addEventListener("click", function () {
  inputElement.value = ""; // Clear the input
  deleteButton.classList.add("active");
});

const expandButton = document.getElementById("expand-phone-edit");
const phoneEdit = document.getElementById("phone-edit");
const phoneEditUnexpanded = document.getElementById("phone-edit-unexpanded");

expandButton.addEventListener("click", function () {
  // Remove 'active' class from phone-edit
  phoneEdit.classList.remove("active");
  // Add 'active' class to phone-edit-unexpanded
  phoneEditUnexpanded.classList.add("active");
});
