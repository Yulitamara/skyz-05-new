// Home Section
const homeCard = document.getElementById("homeCard");
const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", () => {
  homeCard.classList.remove("active");
  if (!homeCard.classList.contains("active")) {
    debitOrderCard.classList.add("active");
    actionsCard.classList.add("active");
    chatCard.classList.add("active");
  }
});

// Actions Section
const actionsBtn = document.getElementById("actionsBtn");
const actionsCard = document.getElementById("actionsCard");

actionsBtn.addEventListener("click", () => {
  actionsCard.classList.remove("active");
  if (!actionsCard.classList.contains("active")) {
    debitOrderCard.classList.add("active");
    homeCard.classList.add("active");
    contactsCard.classList.add("active");
    chatCard.classList.add("active");
  }
});

// Debit Section
const debitOrderCard = document.getElementById("debitOrderCard");
const personCard = document.getElementById("personCard");
const debitBtn = document.getElementById("debitBtn");
const debitTr = document.getElementById("debitTr");

debitBtn.addEventListener("click", () => {
  debitOrderCard.classList.remove("active");
  if (!debitOrderCard.classList.contains("active")) {
    actionsCard.classList.add("active");
    homeCard.classList.add("active");
    chatCard.classList.add("active");
  }
});

// Whatsapp Chat Section
const chatBtn = document.getElementById("chatBtn");
const chatCard = document.getElementById("chatCard");

chatBtn.addEventListener("click", () => {
  chatCard.classList.remove("active");
  if (!chatCard.classList.contains("active")) {
    actionsCard.classList.add("active");
    debitOrderCard.classList.add("active");
    homeCard.classList.add("active");
  }
});

// to create card
const createCard = document.getElementById("createCard");
const toCreateCard = document.getElementById("toCreateCard");

toCreateCard.addEventListener("click", () => {
  createCard.classList.remove("active");
  if (!createCard.classList.contains("active")) {
    actionsCard.classList.add("active");
    debitOrderCard.classList.add("active");
    homeCard.classList.add("active");
    chatCard.classList.add("active");
  }
});

// extend contacts in actions
const innerTableBtn2V2 = document.getElementById("innerTableBtn2-v2");
const contactsCard = document.getElementById("contactsCard");

innerTableBtn2V2.addEventListener("click", () => {
  contactsCard.classList.remove("active");
  actionsCard.classList.add("active");
});

const toYaelContacts = document.getElementById("toYaelContacts");
const yaelContacts = document.getElementById("yaelContacts");

toYaelContacts.addEventListener("click", () => {
  yaelContacts.classList.remove("active");
  contactsCard.classList.add("active");
  actionsCard.classList.add("active");
});

//  Contacts Actions < Contacts < yael < phones
const editPhonesBtn = document.getElementById("editPhonesBtn");
const editPhones = document.getElementById("editPhones");

editPhonesBtn.addEventListener("click", () => {
  editPhones.classList.remove("active");
  actionsCard.classList.add("active");
  yaelContacts.classList.add("active");
  contactsCard.classList.add("active");
  actionsCard.classList.add("active");
});
