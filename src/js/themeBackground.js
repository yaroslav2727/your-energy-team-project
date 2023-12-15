const themeToggle = document.querySelector(".change_theme--btn");
const sunIcon = document.querySelector(".icon_sun");
const moonIcon = document.querySelector(".icon_moon");
const savedTheme = localStorage.getItem("theme");
const body = document.querySelector("body");
const mobileMenuBtn = document.querySelector(".mobile_menu--btn");
const mobileMenu = document.querySelector(".mobile_menu");

themeToggle.addEventListener("click", toggleTheme);
mobileMenuBtn.addEventListener("click", toggleMobileMenu);

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark_mode");
  themeToggle.classList.toggle("change_theme--btn-on");

  if (body.classList.contains("dark_mode")) {
    localStorage.setItem("theme", "light");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    localStorage.setItem("theme", "dark");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
}

if (savedTheme === "light") {
  body.classList.add("dark_mode");
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
  themeToggle.classList.add("change_theme--btn-on");
} else {
  body.classList.remove("dark_mode");
  sunIcon.style.display = "block";
  moonIcon.style.display = "none";
  themeToggle.classList.remove("change_theme--btn-on");
}

function toggleMobileMenu() {
  const body = document.body;
  body.classList.toggle("dark_mode");
  mobileMenuBtn.classList.toggle("show");
}
if (body.classList.contains("dark_mode")) {
  localStorage.setItem("theme", "light");
} else {
  localStorage.setItem("theme", "dark");
}

if (savedTheme === "light") {
  body.classList.add("dark_mode");
} else {
  body.classList.remove("dark_mode");
}
