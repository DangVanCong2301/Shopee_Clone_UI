function loadProducts() {
    let html = "";
    for (let i = 1; i <= 15; i++) {
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