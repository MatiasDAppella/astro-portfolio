const theme = (() => {
  const isUndefined = typeof localStorage === "undefined";
  const item = localStorage.getItem("theme");

  if (!isUndefined && item) return item;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
})();

if (theme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
}

window.localStorage.setItem("theme", theme);

const handleToggleClick = () => {
  const element = document.documentElement;
  element.classList.toggle("dark");

  const isDark = element.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

document
  .getElementById("themeToggle")
  .addEventListener("click", handleToggleClick);