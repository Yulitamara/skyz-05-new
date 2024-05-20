const addressEdit = document.getElementById("address-edit-example"),
  localAddressEdit = document.getElementById("local-edit-address-menu"),
  editIconAddressExample = document.getElementById("edit-icon-address-example"),
  addresses = document.getElementById("addresses"),
  editAddressExample = document.getElementById("edit-address-example"),
  closeEditAddressExample = document.getElementById(
    "close-edit-address-example"
  ),
  changeFieldsStyle = document.getElementById("change-fields-style");

addressEdit.addEventListener("click", () => {
  localAddressEdit.classList.toggle("active");
});

addressEdit.addEventListener("mouseover", () => {
  localAddressEdit.classList.remove("active");
});

localAddressEdit.addEventListener("mouseout", () => {
  localAddressEdit.classList.add("active");
});

editIconAddressExample.addEventListener("click", () => {
  localAddressEdit.classList.add("active");
  addresses.classList.add("active");
  editAddressExample.classList.remove("active");
});

closeEditAddressExample.addEventListener("click", () => {
  localAddressEdit.classList.add("active");
  addresses.classList.remove("active");
  editAddressExample.classList.add("active");
});

const editContentFields = document.querySelectorAll(".edit-content");
