function loadingProductDetail() {
    setTimeout(() => {
        document.querySelector(".detai__left-progress").style.display = 'none';
        document.querySelector(".detail__right-loading").style.display = 'none';
    }, 1000);
}
loadingProductDetail();

// Show/Hide Detail Header
window.addEventListener('scroll', () => {
    const y = this.pageYOffset;
    if (y > 80) {
        this.document.querySelector(".header__product-detail").classList.add("scroll-detail");
        this.document.querySelector(".header__mobile-back").classList.add("scroll-detail");
        this.document.querySelector(".header__mobile-product-name").classList.add("scroll-detail");
        this.document.querySelector(".header__cart-wrap").classList.add("scroll-detail");
        this.document.querySelector(".header__mobile-more").classList.add("scroll-detail");
        this.document.querySelector(".header__mobile-back-icon").classList.add("scroll-detail");
        this.document.querySelector(".header__cart-icon").classList.add("scroll-detail");
        this.document.querySelector(".header__mobile-more-icon").classList.add("scroll-detail");
    } else {
        this.document.querySelector(".header__product-detail").classList.remove("scroll-detail");
        this.document.querySelector(".header__mobile-back").classList.remove("scroll-detail");
        this.document.querySelector(".header__mobile-product-name").classList.remove("scroll-detail");
        this.document.querySelector(".header__cart-wrap").classList.remove("scroll-detail");
        this.document.querySelector(".header__mobile-more").classList.remove("scroll-detail");
        this.document.querySelector(".header__mobile-back-icon").classList.remove("scroll-detail");
        this.document.querySelector(".header__cart-icon").classList.remove("scroll-detail");
        this.document.querySelector(".header__mobile-more-icon").classList.remove("scroll-detail");
    }
});

// Address Modal
function openAddressModal() {
    document.querySelector(".modal").classList.add('open');
}

function closeModal() {
    document.querySelector(".modal").classList.remove('open');
}

function openAddressFormModalMobile() {
    document.querySelector(".address-form-mobile").classList.add("open");
}

function closeAddressFormModalMobile() {
    document.querySelector(".address-form-mobile").classList.remove("open");
}

// Bottom Sheet Transport
function openBottomSheetTransport() {
    document.querySelector(".detail-mobile__transport-price-modal-overlay").classList.add("show");
    document.querySelector(".detail-mobile__transport-price-modal-container").classList.add("show");
}

function closeBottomSheetTransport() {
    document.querySelector(".detail-mobile__transport-price-modal-overlay").classList.remove("show");
    document.querySelector(".detail-mobile__transport-price-modal-container").classList.remove("show");
}

window.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".detail-mobile__transport-price-modal-overlay")) {
        document.querySelector(".detail-mobile__transport-price-modal-overlay").classList.remove("show");
        document.querySelector(".detail-mobile__transport-price-modal-container").classList.remove("show");
    }
});

// Add To Cart Bottom Sheet
function showBottomSheet() {
    document.querySelector(".detail__mobile-bottom-sheet-overlay").classList.add("open");
    document.querySelector(".detail__mobile-bottom-sheet").classList.add("open");
}

function closeBottomSheet() {
    document.querySelector(".detail__mobile-bottom-sheet-overlay").classList.remove("open");
    document.querySelector(".detail__mobile-bottom-sheet").classList.remove("open");
}

window.addEventListener('click', (e) => {
    if (e.target == document.querySelector(".detail__mobile-bottom-sheet-overlay")) {
        document.querySelector(".detail__mobile-bottom-sheet-overlay").classList.remove("open");
        document.querySelector(".detail__mobile-bottom-sheet").classList.remove("open");
    }
});

// OpenModalOrderMe
function openModalOrderMe() {
    document.querySelector(".header__mobile-more-modal").classList.add("open");
}

window.addEventListener('click', (e) => {
    if (e.target == document.querySelector(".header__mobile-more-modal")) {
        document.querySelector(".header__mobile-more-modal").classList.remove("open");
    }
});

// Back History
function backHistory() {
    window.history.back();
}

// Comment Add
function showCommentAddBtn() {
    document.querySelector(".comment__add-btns").classList.add("show");
}

function hideCommentAddBtn() {
    console.log('a');
    document.querySelector(".comment__add-btns").classList.remove("show");
}

function changeCommentAddBtn(input) {
    if (input.value != "") {
        document.querySelector(".comment__add-btn-reply").classList.add("active");
    } else {
        document.querySelector(".comment__add-btn-reply").classList.remove("active");
    }
}

// Reply Input
function showReplyInput() {
    document.querySelector(".comment__feetback").classList.add("show");
}

function hideReplyInput() {
    document.querySelector(".comment__feetback").classList.remove("show");
}

function changeReplyBtn(input) {
    if (input.value != "") {
        document.querySelector(".comment__feetback-btn-reply").classList.add("active");
    } else {
        document.querySelector(".comment__feetback-btn-reply").classList.remove("active");
    }
}

function showReplyDesc() {
    document.querySelector(".comment__replies").classList.toggle("show");
    document.querySelector(".comment__reply-quantity-icon").classList.toggle("rotate");
}

const date = new Date("2024-10-26T21:19:48.847");

// British English uses day-month-year order
console.log(date.toLocaleDateString('en-GB')); // 24/04/2023

function formatdate(date) {
    const dateFormat = new Date(date);

    return dateFormat.toLocaleDateString('en-GB'); // 24/04/2023
}
console.log(formatdate("2024-10-26T21:19:48.847"));