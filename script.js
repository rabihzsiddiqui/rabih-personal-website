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

const path = window.location.pathname;
const isHome = path.endsWith("/") || path.endsWith("/index.html") || path === "/index.html";

if (isHome) {
  document.body.classList.add("home-page");

  const sidebar = document.getElementById("quarto-margin-sidebar");
  if (sidebar) {
    sidebar.style.display = "none";
  }

  const content = document.getElementById("quarto-content");
  if (content) {
    content.style.display = "block";
  }

  const doc = document.getElementById("quarto-document-content");
  if (doc) {
    doc.style.maxWidth = "980px";
    doc.style.margin = "0 auto";
    doc.style.paddingLeft = "1rem";
    doc.style.paddingRight = "1rem";
  }
}
