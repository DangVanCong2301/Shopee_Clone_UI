// Slider
let index = 0;
const productSliderNumber = document.querySelectorAll(".product__slider-item");
const productSliderDots = document.querySelector(".product__slider-dots");

for (let i = 0; i < productSliderNumber.length; i++) {
    const div = document.createElement("div");
    div.id = i;
    productSliderDots.appendChild(div);
}
document.getElementById('0').classList.add('slider-product-circle-fill');

const productSliderDot = document.querySelectorAll(".product__slider-dots div");
for (let i = 0; i < productSliderDot.length; i++) {
    productSliderDot[i].addEventListener('click', () => {
        index = productSliderDot[i].id;
        document.querySelector(".product__slider-list").style.right = index * 100 + "%";
        document.querySelector(".slider-product-circle-fill").classList.remove("slider-product-circle-fill");
        document.getElementById(index).classList.add("slider-product-circle-fill");
    });
}

function productSliderAuto() {
    index = index + 1;
    if (index > productSliderNumber.length - 1) {
        index = 0;
    }
    document.querySelector(".product__slider-list").style.right = index * 100 + "%";
    document.querySelector(".slider-product-circle-fill").classList.remove("slider-product-circle-fill");
    document.getElementById(index).classList.add("slider-product-circle-fill");
}
setInterval(productSliderAuto, 3000);

// Get Product Item
const productList = document.querySelectorAll(".home-product__list");

function loadProducts() {
    let html = "";
    for (let i = 1; i <= 10; i++) {
        html += `
        <div class="col l-2-4 c-6 m-4">
            <a class="home-product-item" href="product_detail.html">
                <div class="home-product-item__img" style="background-image: url(./assets/img/am_sieu_toc_1.jpg)">
                    <div class="home-product-item__img-loading">
                        <i class="uil uil-shopping-bag home-product-item__img-loading-icon"></i>
                    </div>
                </div>
                <h4 class="home-product-item__name">
                    Tai nghe Bluetooth Tai nghe Bluetooth Tai nghe Bluetooth
                    <div class="home-product-item__name-loading">
                        <div class="home-product-item__name-loading-line"></div>
                        <div class="home-product-item__name-loading-line"></div>
                    </div>
                </h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">
                        1.200 000đ
                        <div class="home-product-item__price-old-loading"></div>
                    </span>
                    <span class="home-product-item__price-current">
                        1.100.000 đ
                        <div class="home-product-item__price-current-loading"></div>
                    </span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like-icon-empty far fa-heart"></i>
                        <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                        <div class="home-product-item__like-loading"></div>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <div class="home-product-item__rating-loading"></div>
                    </div>
                    <span class="home-product-item__sold"> 
                        88 Đã bán
                        <div class="home-product-item__sold-loading"></div>
                    </span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">
                        Viet Mark
                        <div class="home-product-item__brand-loading"></div>
                    </span>
                    <span class="home-product-item__origin-name">
                        Hà Nội
                        <div class="home-product-item__origin-name-loading"></div>
                    </span>
                </div>
                <div class="home-product-item__favourite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">53%</span>
                    <span class="home-product-item__sale-off-label">GIẢM</span>
                </div>
            </a>
        </div>
        `;
    }
    productList.forEach(e => { 
        e.innerHTML = html;
    });
}
loadProducts();

function showNavMenu(event) {
    event.preventDefault();
    document.querySelector(".header__mobile-menu-overlay").classList.add("open");
    document.querySelector(".header__mobile-menu-container").classList.add("open");
}

function closeNavMenu() {
    document.querySelector(".header__mobile-menu-overlay").classList.remove("open");
    document.querySelector(".header__mobile-menu-container").classList.remove("open");
}

window.addEventListener('click', (e) => {
    if (e.target == document.querySelector(".header__mobile-menu-overlay")) {
        document.querySelector(".header__mobile-menu-overlay").classList.remove("open");
        document.querySelector(".header__mobile-menu-container").classList.remove("open");
    }
});