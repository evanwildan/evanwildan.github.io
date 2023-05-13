function updateActiveLink() {
var currentUrl = window.location.href;
var links = document.querySelectorAll('.nav-menu_all-item a');
for (var i = 0; i < links.length; i++) {
    if (links[i].href === currentUrl) {
    links[i].classList.add('active');
    } else {
    links[i].classList.remove('active');
    }
}

var links = document.querySelectorAll('.sidebar a');
for (var i = 0; i < links.length; i++) {
    if (links[i].href === currentUrl) {
    links[i].classList.add('active');
    } else {
    links[i].classList.remove('active');
    }
}

var links = document.querySelectorAll('.nav-menu_table_horizontal-list li a');
for (var i = 0; i < links.length; i++) {
    if (links[i].href === currentUrl) {
    links[i].classList.add('active');
    } else {
    links[i].classList.remove('active');
    }
}
}

window.addEventListener('load', updateActiveLink);
window.addEventListener('hashchange', updateActiveLink);