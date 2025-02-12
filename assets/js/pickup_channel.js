// Show Navbar Menu
function showNavMenu() {
    document.querySelector(".header__menu-overlay").classList.add("open");
    document.querySelector(".header__menu-container").classList.add("open");
}

function closeNavMenu() {
    document.querySelector(".header__menu-overlay").classList.remove("open");
    document.querySelector(".header__menu-container").classList.remove("open");
}

// Modal
function openModalMobile() {
    document.querySelector(".modal").classList.add("open");
}

function closeModalMobile() {
    document.querySelector(".modal").classList.remove("open");
}

function openReceiveOrderModal(shippingOrderID) {
    openModalMobile();
    document.querySelector(".modal__body").innerHTML = 
    `
                            <div class="modal__confirm-mobile">
                                <div class="modal__confirm-mobile-msg">Bạn có chắc muốn nhận đơn hàng này?</div>
                                <div class="modal__confirm-mobile-btns">
                                    <div class="modal__confirm-mobile-btn-no" onclick="closeModal()">Không</div>
                                    <div class="modal__confirm-mobile-btn-agree" onclick="confirmTakeOrder(${shippingOrderID})">Đồng ý</div>
                                </div>
                            </div>
    `;
}