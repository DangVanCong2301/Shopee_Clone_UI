// Show Navbar Menu
function showNavMenu() {
    document.querySelector(".header__menu-overlay").classList.add("open");
    document.querySelector(".header__menu-container").classList.add("open");
}

function closeNavMenu() {
    document.querySelector(".header__menu-overlay").classList.remove("open");
    document.querySelector(".header__menu-container").classList.remove("open");
}