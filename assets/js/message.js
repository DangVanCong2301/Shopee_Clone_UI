function showMenu() {
    document.querySelector(".message__menu").classList.add("show");
    document.querySelector(".message__menu-item-box-active").classList.add("hide");
    document.querySelector(".message__menu-item-msg-count").classList.add("show");
    document.querySelector(".message__menu-community-title-text").classList.add("show");
    document.querySelector(".message__menu-community-title-line").classList.add("hide");
    document.querySelector(".message__menu-bottom-account-collapse-nav").classList.add("hide");
    document.querySelector(".message__container").classList.add("expander");
}

function hideMenu() {
    document.querySelector(".message__menu").classList.remove("show");
    document.querySelector(".message__menu-item-box-active").classList.remove("hide");
    document.querySelector(".message__menu-item-msg-count").classList.remove("show");
    document.querySelector(".message__menu-community-title-text").classList.remove("show");
    document.querySelector(".message__menu-community-title-line").classList.remove("hide");
    document.querySelector(".message__menu-bottom-account-collapse-nav").classList.remove("hide");
    document.querySelector(".message__container").classList.remove("expander");
}

// Show Dropdown Account Setting
function showDropdownAccountSetting(event) {
    const tag = event.target.parentNode;
    const dropDown = event.target.parentNode.parentNode;
    tag.querySelector(".message__account-detail-item-main-icon").classList.toggle("rotate");
    dropDown.querySelector(".message__account-detail-item-collapse").classList.toggle("show");
}