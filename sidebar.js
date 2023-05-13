const sidebar = document.querySelector('.sidebar');
const sidebarItems = document.querySelectorAll('.sidebar .sidebar-items');

function openNav() {
sidebar.style.width = '250px';
sidebarItems.forEach((item, index) => {
    item.classList.remove('show');
    item.style.transitionDelay = '0s'; // clear the transition delay
    setTimeout(() => {
    item.classList.add('show');
    }, 500 + (index * 100));
});
document.addEventListener("click", closeNavOnClickOutside);
}

function closeNav() {
sidebar.style.width = '0';
sidebarItems.forEach(item => {
    item.classList.remove('show');
});
localStorage.setItem('sidebarOpen', false);
document.removeEventListener('click', closeNavOnClickOutside);
}

function closeNavOnClickOutside(event) {
if (!event.target.closest('.sidebar') && !event.target.closest('.openbtn2')) {
    closeNav();
}
}