// select tr bg color
const tdDebitIcon = document.getElementById("td-debit-icon");
const trDebit = document.getElementById("tr-debit");
const trFirstLevel = document.querySelectorAll(".first-level");
const trMenu = document.querySelector(".tr-menu");
const tableMenu = document.querySelector(".table-menu");

tdDebitIcon.addEventListener("click", () => {
  trMenu.classList.toggle("active");

  if (tdDebitIcon.innerHTML === "check_box_outline_blank") {
    tdDebitIcon.innerHTML = "check_box";
  } else {
    tdDebitIcon.innerHTML = "check_box_outline_blank";
  }
});

trDebit.addEventListener("mouseover", () => {
  if (tdDebitIcon.innerHTML != "check_box") {
    tdDebitIcon.innerHTML = "check_box_outline_blank";
  }
});
trDebit.addEventListener("mouseout", () => {
  if (tdDebitIcon.innerHTML != "check_box") {
    tdDebitIcon.innerHTML = "attach_money";
  }
});

$("tr").click(function (event) {
  if (!$(this).hasClass("tr-selected")) {
    $("tr").removeClass("focus"); // Remove focus from other TDs
    $(this).addClass("focus");
    $(this).removeClass("first-level");
    $("td:nth-child(1)").removeClass("focus");
    $(this).find("td:nth-child(1)").addClass("focus");
    $(".table-menu").addClass("focus");
  } else {
    // If the clicked <tr> already has "tr-selected" class, remove the focus class
    $("tr").removeClass("focus");
    $(".table-menu").removeClass("focus");
  }
});

// on and off search/filters

const filtersBtn = document.getElementById("filtersBtn");
const filters = document.getElementById("filtersMenu");

filtersBtn.addEventListener("click", () => {
  filtersBtn.classList.toggle("clicked");
  filters.classList.toggle("active");
});

// td (actions)
const trExpand = document.querySelector(".tr-expand");
const addTr = document.getElementById("addTr");

addTr.addEventListener("click", () => {
  trExpand.classList.toggle("active");
  if (addTr.innerHTML === "expand_more") {
    addTr.innerHTML = "chevron_right";
  } else {
    addTr.innerHTML = "expand_more";
  }
});

// modal split X

const modalBtn = document.getElementById("modalBtn");
const modal = document.querySelector(".horizontal-resize");
const resizer = document.querySelector(".resizer-x");

const dropdownBtn = document.getElementById("dropdownBtn");
const debitTableMenu = document.getElementById("debit-table-menu");
const debitTd = document.querySelector(".debitTd");
const splitMenu = document.getElementById("split-menu");
const noSplitBtn = document.getElementById("no-split-btn");
const verticalSplitBtn = document.getElementById("vertical-split-btn");
const horizontalSplitBtn = document.getElementById("horizontal-split-btn");
const splitIcon = document.getElementById("split-icon");

modalBtn.addEventListener("click", () => {
  modal.classList.toggle("active");
  resizer.classList.toggle("active");
  splitMenu.classList.toggle("active");
});

dropdownBtn.addEventListener("click", () => {
  debitTableMenu.classList.toggle("active");
  debitTd.classList.add("td-open");
});

noSplitBtn.addEventListener("click", () => {
  splitIcon.innerHTML = "vertical_split";
});
verticalSplitBtn.addEventListener("click", () => {
  splitIcon.innerHTML = "vertical_split";
});
horizontalSplitBtn.addEventListener("click", () => {
  splitIcon.innerHTML = "horizontal_split";
});
