let index = 0;
var rolar = true;
const sliderNumber = document.querySelectorAll(".banner-left-content__top-link");
const balls = document.querySelector(".banner-left-content__bottom-pagination");

for (let i = 0; i < sliderNumber.length; i++) {
    const div = document.createElement("div");
    div.id = i;
    balls.appendChild(div);
}
document.getElementById("0").classList.add("banner-circle-fill")

var pos = document.querySelectorAll(".banner-left-content__bottom-pagination div")

for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => {
        index = pos[i].id;
        document.querySelector(".banner-left-content__top").style.right = index * 100 + "%";
        document.querySelector(".banner-circle-fill").classList.remove("banner-circle-fill");
        document.getElementById(index).classList.add("banner-circle-fill");
    });
}

function sliderAuto() {
    index = index + 1;
    if (index > sliderNumber.length - 1) {
        index = 0;
    }
    document.querySelector(".banner-left-content__top").style.right = index * 100 + "%";
    document.querySelector(".banner-circle-fill").classList.remove("banner-circle-fill");
    document.getElementById(index).classList.add("banner-circle-fill");
}

setInterval(sliderAuto, 3000)

// Next/Prev Banner
const btnNextBanner = document.querySelector(".banner-left-content__top-btn-icon-next");
const btnPrevBanner = document.querySelector(".banner-left-content__top-btn-icon-prev");

btnNextBanner.addEventListener('click', () => {
    index = index + 1;
    if (index > sliderNumber.length - 1) {
        index = 0;
    }
    document.querySelector(".banner-left-content__top").style.right = index * 100 + "%";
    document.querySelector(".banner-circle-fill").classList.remove("banner-circle-fill");
    document.getElementById(index).classList.add("banner-circle-fill");
});

btnPrevBanner.addEventListener('click', () => {
    index = index - 1;
    if (index <= 0) {
        index = sliderNumber.length - 1;
        document.querySelector(".banner-left-content__top").style.right = index * 100 + "%";
        document.querySelector(".banner-circle-fill").classList.remove("banner-circle-fill");
        document.getElementById(index).classList.add("banner-circle-fill");
    }
});

// Load Category item
function loadCategories() {
    let html = "";
    for (let i = 1; i <= 20; i++) {
        html += `
        <li class="category-item-home">
            <a href="product.html" class="category-item-link">
                <div class="category-item__img" style="background-image: url(./assets/img/sac_du_phong.png);">
                    <div class="category-item__img-loading">
                        <i class="uil uil-shopping-bag category-item__img-loading-icon"></i>
                    </div>
                </div>
                <div class="category-item__sub">
                    <div class="category-item__name">Tai nghe</div>
                    <div class="category-item__name-loading">
                        <div class="category-item__name-loading-line"></div>
                        <div class="category-item__name-loading-line"></div>
                    </div>
                </div>
            </a>
        </li>
        `;
    }
    document.querySelector(".category-list").innerHTML = html;
}
loadCategories();

function loadProducts() {
    let html = "";
    for (let i = 1; i <= 12; i++) {
        html += `
        <div class="col l-2 c-6 m-4">
            <a class="home-product-item" href="product_detail.html">
                <div class="home-product-item__img" style="background-image: url(./assets/img/sac_du_phong.png)">
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
    document.querySelector(".home-product__list").innerHTML = html;
}
loadProducts();

function hideChatWindow() {
    document.querySelector(".chat").classList.toggle("hide-chat-window");
    document.querySelector(".chat__body-right").classList.toggle("hide-chat-window");
    document.querySelector(".chat__header-btn-arrow").classList.toggle("transform");
}

function hideSearchSub() {
    document.querySelector(".chat__body-search-sub").style.display = 'none';
}

function displaySearchSub() {
    document.querySelector(".chat__body-search-sub").style.display = 'flex';
}

function displaySubList() {
    document.querySelector(".chat__body-search-sub-list").classList.toggle('active'); 
}

document.querySelectorAll(".chat__body-shop-name-sub-control").forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle('active');
        e.querySelector(".chat__body-shop-name-sub-control-circle").classList.toggle('active');
    });
});

function hideChat() {
    document.querySelector(".chat").style.display = 'none';
    document.querySelector(".chat__btn").style.display = "flex";
}

function displayChat() {
    document.querySelector(".chat").style.display = 'block';
    document.querySelector(".chat__btn").style.display = "none";
}

window.addEventListener('scroll', () => {
    const y = this.pageYOffset;
    //console.log(this.document.querySelector(".header").style);
    if (y > 80) {
        this.document.querySelector(".header").classList.add("scroll");
    } else {
        this.document.querySelector(".header").classList.remove("scroll");
    }
});