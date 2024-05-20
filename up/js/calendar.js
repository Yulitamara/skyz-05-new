function toggleMenu(eventElement) {
  const menu = eventElement.querySelector(".event-menu");
  menu.classList.toggle("active-event-menu");
  document.addEventListener(
    "click",
    handleOutsideClick.bind(null, eventElement, menu)
  );
}

function handleOutsideClick(eventElement, menu, event) {
  const isClickInsideEvent = eventElement.contains(event.target);
  const isClickInsideMenu = menu.contains(event.target);

  if (!isClickInsideEvent && !isClickInsideMenu) {
    menu.classList.remove("active-event-menu");
    document.removeEventListener("click", handleOutsideClick);
  }
}
