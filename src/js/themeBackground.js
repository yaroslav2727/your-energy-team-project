const themeToggle = document.querySelector('.change_theme--btn');
const sunIcon = document.querySelector('.icon_sun');
const moonIcon = document.querySelector('.icon_moon');
const savedTheme = localStorage.getItem('theme');
const body = document.querySelector('body');

themeToggle.addEventListener('click', toggleTheme);

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark_mode');
  themeToggle.classList.toggle('change_theme--btn-on');

  if (body.classList.contains('dark_mode')) {
    localStorage.setItem('theme', 'light');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    localStorage.setItem('theme', 'dark');
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}

if (savedTheme === 'light') {
  body.classList.add('dark_mode');
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
} else {
  body.classList.remove('dark_mode');
  sunIcon.style.display = 'block';
  moonIcon.style.display = 'none';
}
