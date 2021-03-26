let menuButton = document.querySelector('.menu-btn');
let hamburgerMenu = document.querySelector('.menu-btn-burger');
let navMenu = document.querySelector('.nav-menu');
let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburgerMenu.classList.add('open');
        navMenu.classList.add('open');
        showMenu = true;
    } else {
        hamburgerMenu.classList.remove('open');
        navMenu.classList.remove('open');
        showMenu = false;
    }
}
