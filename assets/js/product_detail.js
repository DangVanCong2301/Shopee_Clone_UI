function loadImage() {
    setTimeout(() => {
        document.querySelector(".detai__left-progress").style.display = 'none';
    }, 1000);
}
loadImage();

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