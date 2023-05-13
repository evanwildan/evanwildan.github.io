function setTheme() {
const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
const body = document.querySelector('body');
const icon = document.querySelector('.icon-btn .pi');

if (isDarkMode) {
    body.classList.add('dark');
    icon.classList.remove('pi-sun');
    icon.classList.add('pi-moon');
} else {
    body.classList.remove('dark');
    icon.classList.remove('pi-moon');
    icon.classList.add('pi-sun');
}
}

function toggleTheme() {
const body = document.querySelector('body');
const icon = document.querySelector('.icon-btn .pi');
const isDarkMode = body.classList.contains('dark');
body.classList.toggle('dark');

if (isDarkMode) {
    localStorage.setItem('isDarkMode', false);
    icon.classList.remove('pi-moon');
    icon.classList.add('pi-sun');
} else {
    localStorage.setItem('isDarkMode', true);
    icon.classList.remove('pi-sun');
    icon.classList.add('pi-moon');
}
}

window.addEventListener('load', setTheme);
const toggleButton = document.querySelector('.icon-btn');
toggleButton.addEventListener('click', toggleTheme);