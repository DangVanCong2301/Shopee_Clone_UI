
function loadCartItems() {
    let html = "";
    for (let i = 1; i <= 3; i++) {
        html += `
        <div class="cart__body">
            <div class="cart__body-header">
                <div class="cart__input">
                    <input type="checkbox" class="cart__checkout-input" name="" id="">
                </div>
                <span>F4 Shop Mall</span>
                <div class="cart__body-header-text">LenovoThinkplus.vn</div>
                <a href="#" class="cart__body-header-chat">
                    <i class="uil uil-chat cart__body-header-chat-icon"></i>
                </a>
            </div>
            <div class="cart__body-product">
                <div class="cart__input">
                    <input type="checkbox" class="cart__checkout-input" name="" id="">
                </div>
                <div class="cart__body-product-info">
                    <div class="cart__body-product-img" style="background-image: url(./assets/img/sac_du_phong.png);">
                        
                    </div>
                    <div class="cart__body-prduct-desc">
                        <div class="cart__body-product-name">
                            Bút Laze Trình Chiếu PowerPoint Kèm Remote Điều Khiển Không Dây Cho Laptop RF 2.4GHz
                            <div class="cart__body-product-name-progress">
                                <div class="cart__body-product-name-progress-line"></div>
                                <div class="cart__body-product-name-progress-line"></div>
                            </div>
                        </div>
                        <img src="./assets/img/voucher.png" class="cart__body-product-voucher" alt="">
                    </div>
                </div>
                <div class="cart__body-product-type">Phân loại hàng: Bạc</div>
                <div class="cart__body-product-cost">
                    <div class="cart__body-product-cost-old">189.000 đ</div>
                    <div class="cart__body-product-cost-new">121.000 đ</div>
                </div>
                <div class="cart__body-product-quantity">
                    <div class="cart__count-btns">
                        <button type="button" class="cart__btn-add" onclick="reduce(event)">-</button>
                        <input name="qnt" type="text" id="qnt" value="1" class="cart__count-input" />
                        <button type="button" class="cart__btn-sub" onclick="incre(event)">+</button>
                    </div>
                </div>
                <div class="cart__body-product-money">121.000 đ</div>
                <div class="cart__body-product-operation">
                    <div class='btn-tools'>
                        <a class='btn-tool btn-tool__del' href='javascript:deleteProduct(@cart.PK_iProductID)' title='Xoá sản phẩm'><i class='uil uil-trash'></i></a>
                    </div>
                </div>
            </div>
            <div class="cart__body-discount">
                <i class="uil uil-store cart__body-discount-icon"></i>
                <div class="cart__body-discount-sub">Mua thêm 91.000đ để được mức giảm 3kđ</div>
                <a href="#" class="cart__body-discount-link">Thêm mã giảm giá của Shop</a>
            </div>
            <div class="cart__body-transport">
                <img src="./assets/img/free_ship.png" alt="" class="cart__body-transport-img">
                <div class="cart__body-transport-sub">Giảm 300.000đ phí vận chuyển đơn tối thiểu 0đ</div>
                <a href="#" class="cart__body-transport-more">Tìm hiểu thêm</a>
            </div>
            <div class="cart__body-loading">
                <div class="cart__body-header-loading">
                    <div class="cart__body-header-input-loading"></div>
                    <div class="cart__body-header-sub-loading"></div>
                </div>
                <div class="cart__body-product-loading">
                    <div class="cart__body-header-input-loading"></div>
                    <div class="cart__body-product-info-loading">
                        <div class="cart__body-product-img-loading">
                            <i class="uil uil-shopping-bag cart__body-product-img-icon-loading"></i>
                        </div>
                        <div class="cart__body-product-desc-loading">
                            <div class="cart__body-product-desc-line-loading"></div>
                            <div class="cart__body-product-desc-line-loading"></div>
                        </div>
                    </div>
                </div>
                <div class="cart__body-discount-loading">
                    <div class="cart__body-discount-line-loading"></div>
                </div>
                <div class="cart__body-transport-loading">
                    <div class="cart__body-transport-line-loading"></div>
                </div>
            </div>              
        </div>
        `;
    }
    document.querySelector(".cart__product-list").innerHTML = html;
}
loadCartItems();

function incre(event) {
    const parentElement = event.target.parentNode;
    var incre = parentElement.querySelector("#qnt").value;
    var input = parentElement.querySelector("#qnt");
    if (parseInt(incre) < 10) {
        input.value = parseInt(incre) + 1;
    } else {
        let html = "";
        html += `
        <div class="modal">
            <div class="modal__overlay">
        
            </div>
            <div class="modal__body">
        
                <!--Form message -->
                <div class="auth-form">
                    <div class="auth-form__container">
                        <p class="auth-form__msg">Số lượng mặt hàng trong kho không đủ yêu cầu!</p>
                        <div class="auth-form__controls">
                            <button onclick="exitModal()" class="btn">TRỞ LẠI</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        `;
        document.querySelector(".cart__message").innerHTML = html;
        document.querySelector(".modal").classList.add("open");
    }
}

function exitModal() {
    document.querySelector(".modal").classList.remove("open");
}

function reduce(event) {
    const parentElement = event.target.parentNode;
    var reduce = parentElement.querySelector("#qnt").value;
    var input = parentElement.querySelector("#qnt");
    if (parseInt(reduce) > 1) {
        input.value = parseInt(reduce) - 1;
    } else {
        deleteProduct();
    }
}

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
    document.querySelector(".cart__like-product-list").innerHTML = html;
}
loadProducts();

function checkAllProduct(input) {
    const checkProduct = document.querySelectorAll(".cart__checkout-input"); // Các thẻ input render ra sau

    if (input.checked) {
        for (let i = 0; i < checkProduct.length; i++) {
            checkProduct[i].checked = true; // Nguồn: https://stackoverflow.com/questions/8206565/check-uncheck-checkbox-with-javascript
        }
    } else {
        for (let i = 0; i < checkProduct.length; i++) {
            checkProduct[i].checked = false; // Nguồn: https://stackoverflow.com/questions/8206565/check-uncheck-checkbox-with-javascript
        }
    }
}

function deleteProduct() {
    let html = "";
        html += `
        <div class="modal">
            <div class="modal__overlay">
    
            </div>
            <div class="modal__body">
                <!--Form message -->
                <div class="auth-form">
                    <div class="auth-form__container">
                        <p class="auth-form__msg">Bạn muốn xoá mặt hàng này khỏi giỏ?</p>
                        <div class="auth-form__controls">
                            <button onclick="exitModal()" class="btn btn--primary">HUỶ</button>
                            <button class="btn">ĐỒNG Ý</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        document.querySelector(".cart__message").innerHTML = html;
        document.querySelector(".modal").classList.add("open");
}

function deleteAllProduct() {
    let html = "";
        html += `
        <div class="modal">
            <div class="modal__overlay">
    
            </div>
            <div class="modal__body">
                <!--Form message -->
                <div class="auth-form">
                    <div class="auth-form__container">
                        <p class="auth-form__msg">Bạn muốn bỏ 3 sản phẩm?</p>
                        <div class="auth-form__controls">
                            <button onclick="exitModal()" class="btn btn--primary">HUỶ</button>
                            <button class="btn">ĐỒNG Ý</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        document.querySelector(".cart__message").innerHTML = html;
        document.querySelector(".modal").classList.add("open");
}

// JS Mobile
const headerFix = document.querySelectorAll(".cart__mobile-item-header-fix");
headerFix.forEach(e => {
    e.addEventListener('click', () => {
        const cartItem = e.parentNode.parentNode;
        if (e.innerText == "Sửa") {
            cartItem.querySelector(".cart__mobile-item-body-product").classList.toggle("move");
            e.innerText = "Hoàn thành";
        } else {
            cartItem.querySelector(".cart__mobile-item-body-product").classList.toggle("move");
            e.innerText = "Sửa";
        }
    });
});

function showBottomSheetVoucher() {
    document.querySelector(".cart__mobile-voucher-bottom-sheet").classList.add("show");
}

function hideBottomSheetVoucher() {
    document.querySelector(".cart__mobile-voucher-bottom-sheet").classList.remove("show");
}

window.addEventListener('click', (e) => {
    if (e.target == document.querySelector(".cart__mobile-voucher-bottom-sheet")) {
        document.querySelector(".cart__mobile-voucher-bottom-sheet").classList.remove("show");
    }
});

function showBottomSheetTransport() {
    document.querySelector(".cart__mobile-transport-bottom-sheet").classList.add("show");
}

window.addEventListener('click', (e) => {
    if (e.target == document.querySelector(".cart__mobile-transport-bottom-sheet")) {
        document.querySelector(".cart__mobile-transport-bottom-sheet").classList.remove("show");
    }
});

function changeBottomCheckout(input) {
    if (input.innerText == "Sửa") {
        document.querySelector(".cart__mobile-checkout-voucher").classList.add("hide");
        document.querySelector(".cart__mobile-checkout-money-text").classList.add("hide");
        document.querySelector(".cart__mobile-checkout-money-btn").classList.add("hide");
        document.querySelector(".cart__mobile-checkout-money-btn-delete").classList.add("show");
        input.innerText = "Hoàn thành";
    } else {
        document.querySelector(".cart__mobile-checkout-voucher").classList.remove("hide");
        document.querySelector(".cart__mobile-checkout-money-text").classList.remove("hide");
        document.querySelector(".cart__mobile-checkout-money-btn").classList.remove("hide");
        document.querySelector(".cart__mobile-checkout-money-btn-delete").classList.remove("show");
        input.innerText = "Sửa";
    }
}

function openDeleteModal() {
    document.querySelector(".modal").classList.add("open");
    let html = "";
    html += `
    <div class="cart__delete">
        <div class="cart__delete-msg">Bạn có chắc muốn xoá sản phẩm?</div>
        <div class="cart__delete-btns">
            <div class="cart__delete-btn-no" onclick="closeDeleteModal()">Không</div>
            <div class="cart__delete-btn-agree">Đồng ý</div>
        </div>
    </div>
    `;
    document.querySelector(".modal__body").innerHTML = html;
}

function closeDeleteModal() {
    document.querySelector(".modal").classList.remove("open");
}

window.addEventListener('click', (e) => {
    if (e.target == document.querySelector(".modal__overlay")) {
        document.querySelector(".modal").classList.remove("open");
    }
});

function openDeleteAllModal() {
    document.querySelector(".modal").classList.add("open");
    let html = "";
    html += `
    <div class="cart__delete">
        <div class="cart__delete-msg">Bạn có chắc muốn 2 xoá sản phẩm?</div>
        <div class="cart__delete-btns">
            <div class="cart__delete-btn-no" onclick="closeDeleteModal()">Không</div>
            <div class="cart__delete-btn-agree">Đồng ý</div>
        </div>
    </div>
    `;
    document.querySelector(".modal__body").innerHTML = html;
}