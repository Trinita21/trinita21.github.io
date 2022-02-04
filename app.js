// DARK MODE
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme);
if (currentTheme == "dark") {
  document.getElementById("toggleknop").innerHTML =
    '<i class="fas fa-sun" style="color:#d8c658;"></i>';
  document.body.classList.add("dark-mode");
}

function darkMode() {
  document.body.classList.toggle("dark-mode");

  document.getElementById("toggleknop").innerHTML =
    '<i class="fas fa-moon"</i>';

  let theme = "light";
  if (document.body.classList.contains("dark-mode")) {
    document.getElementById("toggleknop").innerHTML =
      '<i class="fas fa-sun"style="color:#d8c658;"></i>';
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
}
// NAVBAR Hamburger Menu
