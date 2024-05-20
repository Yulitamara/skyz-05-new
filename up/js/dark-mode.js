function toggleTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme.includes("dark")) {
    const lightTheme = currentTheme.replace("dark-", "");
    toggleTheme(lightTheme);
  } else {
    const darkTheme = `dark-${currentTheme}`;
    toggleTheme(darkTheme);
  }
}

function setDarkModeButtonInnerHTML(isDark) {
  const darkModeButton = document.querySelector("#darkmodeToggle");
  if (isDark) {
    darkModeButton.querySelector("span").innerHTML = "light_mode";
  } else {
    darkModeButton.querySelector("span").innerHTML = "dark_mode";
  }
}

function showColorChangeForLightTheme(isLight) {
  const colorChangeElement = document.querySelector(".color-change");
  if (isLight) {
    colorChangeElement.style.display = "inline-block";
  } else {
    colorChangeElement.style.display = "none";
  }
}

document.querySelector(".color-change").addEventListener("click", function () {
  const themes = ["blue", "purple", "yellow", "green", "pink"];
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const currentIndex = themes.indexOf(currentTheme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];
  toggleTheme(nextTheme);
});

document
  .querySelector("#darkmodeToggle")
  .addEventListener("click", function () {
    toggleDarkMode();
    const isDark = document.documentElement
      .getAttribute("data-theme")
      .includes("dark");
    setDarkModeButtonInnerHTML(isDark);
    showColorChangeForLightTheme(!isDark);
  });

const initialTheme = document.documentElement.getAttribute("data-theme");
showColorChangeForLightTheme(!initialTheme.includes("dark"));
