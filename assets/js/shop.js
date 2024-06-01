function tonglePrice() {
    document.querySelector(".header__sort-link-icon").classList.add("uil-arrow-up");
    document.querySelector(".header__sort-link-icon").classList.toggle("uil-arrow-down")
}

function openModalOrderMe() {
    document.querySelector(".header__mobile-more-modal").classList.add("open");
}

window.addEventListener('click', (e) => {
    if (e.target == document.querySelector(".header__mobile-more-modal")) {
        document.querySelector(".header__mobile-more-modal").classList.remove("open");
    }
});