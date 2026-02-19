const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const key = "rabih-theme";

function applyTheme(theme) {
  root.dataset.theme = theme;
  if (toggle) {
    toggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  }
}

const saved = localStorage.getItem(key);
if (saved === "dark" || saved === "light") {
  applyTheme(saved);
} else {
  applyTheme("light");
}

if (toggle) {
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(key, next);
  });
}
