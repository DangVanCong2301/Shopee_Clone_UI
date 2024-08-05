function openSignupSeller() {
    document.querySelector(".seller-auth__sign-in").classList.add("hide-on-destop");
    document.querySelector(".seller-auth__sign-up").classList.remove("hide-on-destop");
}

function openSigninSeller() {
    document.querySelector(".seller-auth__sign-in").classList.remove("hide-on-destop");
    document.querySelector(".seller-auth__sign-up").classList.add("hide-on-destop");
}

function openConfirmModal() {
    openModal();
    document.querySelector(".modal__body").innerHTML = 
    `
        <div class="modal__confirm">
            <div class="modal__confirm-text">Chúng tôi sẽ gửi mã xác minh qua Zalo đến (+84) 0347 797 502</div>
            <div class="modal__confirm-btns">
                <div class="modal__confirm-btn-destroy" onclick="closeModal()">Huỷ</div>
                <div class="modal__confirm-btn-method" onclick="openConfirmPage()">Các phương pháp khác</div>
                <div class="modal__confirm-btn-send">Gửi đến Zalo</div>
            </div>
        </div>
    `;
}

function openModal() {
    document.querySelector(".modal").classList.add('open');
}

function closeModal() {
    document.querySelector(".modal").classList.remove('open');
}

function openConfirmPage() {
    closeModal();
    document.querySelector(".seller-auth__sign-up").classList.add("hide-on-destop");
    document.querySelector(".seller-auth__sign-in").classList.add("hide-on-destop");
    document.querySelector(".seller-confirm").classList.remove("hide-on-destop");
}

function backMainPage() {
    document.querySelector(".seller-auth").classList.remove("hide-on-destop");
    document.querySelector(".seller-confirm").classList.add("hide-on-destop");
}

function openZaloConfirm() {
    document.querySelectorAll(".seller-confirm__vector")[0].classList.add("active");
    document.querySelector(".seller-confirm__method-container").innerHTML = 
    `
                        <div class="seller-confirm__method-container">
                            <div class="seller-confirm__method-header">
                                <div class="seller-confirm__method-header-back">
                                    <i class="uil uil-arrow-left seller-confirm__method-header-back-icon"></i>
                                </div>
                                <div class="seller-confirm__method-header-sub">Nhập mã xác nhận</div>
                            </div>
                            <div class="seller-confirm__method-body">
                                <div class="seller-confirm__method-body-sub">
                                    Mã xác thực sẽ được gửi qua Zalo đến 
                                    <div class="seller-confirm__method-zalo">
                                        <img src="./assets/img/zalo_img.png" class="seller-confirm__method-zalo-img" alt="">
                                        <div class="seller-confirm__method-zalo-phone">(+84) 347 797 502</div>
                                    </div>
                                </div>
                                <div class="seller-confirm__method-body-enter">
                                    <input type="password" value="1" class="seller-confirm__method-body-input">
                                    <input type="password" value="1" class="seller-confirm__method-body-input">
                                    <input type="password" value="1" class="seller-confirm__method-body-input">
                                    <input type="password" value="1" class="seller-confirm__method-body-input">
                                    <input type="password" value="1" class="seller-confirm__method-body-input">
                                    <input type="password" value="1" class="seller-confirm__method-body-input">
                                </div>
                                <div class="seller-confirm__method-body-please">Vui lòng chờ 20 giây để thử lại</div>
                                <div class="seller-confirm__method-btn" onclick="openPasswordConfirm()">Kế tiếp</div>
                            </div>
                        </div>
    `;
}

function openPasswordConfirm() {
    document.querySelectorAll(".seller-confirm__step")[1].classList.add("active");
    document.querySelector(".seller-confirm__method-container").innerHTML = 
    `
                            <div class="seller-confirm__method-header">
                                <div class="seller-confirm__method-header-back">
                                    <i class="uil uil-arrow-left seller-confirm__method-header-back-icon"></i>
                                </div>
                                <div class="seller-confirm__method-header-sub">Thiết lập mật khẩu</div>
                            </div>
                            <div class="seller-confirm__method-body">
                                <div class="seller-confirm__method-body-sub">
                                    Bước cuối! Thiết lập mật khẩu để hoàn tất việc đăng ký
                                </div>
                                <input type="text" class="seller-confirm__method-body-input-password" placeholder="Mật khẩu">
                                <div class="seller-confirm__method-body-input-password-rule">
                                    <div class="seller-confirm__method-body-input-password-rule-item">
                                        Ít nhất một ký tự viết thường
                                    </div>
                                    <div class="seller-confirm__method-body-input-password-rule-item">
                                        Ít nhất một ký tự viết hoa 
                                    </div>
                                    <div class="seller-confirm__method-body-input-password-rule-item">
                                        8 - 16 ký tự 
                                    </div>
                                    <div class="seller-confirm__method-body-input-password-rule-item">
                                        Chỉ các chữ cái, số, ký tự phổ biến mới có thể được sử dụng
                                    </div>
                                </div>
                                <div class="seller-confirm__method-btn" onclick="openSuccessConfirm()">Đăng ký</div>
                            </div>
    `;
}

function openSuccessConfirm() {
    document.querySelectorAll(".seller-confirm__vector")[1].classList.add("active");
    document.querySelectorAll(".seller-confirm__step")[2].classList.add("active");
    document.querySelector(".seller-confirm__method-container").innerHTML = 
    `
                            <div class="seller-confirm__method-header">
                                <div class="seller-confirm__method-header-success">Đăng ký thành công</div>
                            </div>
                            <div class="seller-confirm__method-body">
                                <div class="seller-confirm__method-body-sub">
                                    <div class="seller-confirm__method-body-success-box">
                                        <i class="uil uil-check seller-confirm__method-body-success-box-icon"></i>
                                    </div>
                                </div>
                                <div class="seller-confirm__method-body-success-text">Bạn đã tạo tài khoản Shopee thành công với số 
                                    <div class="seller-confirm__method-body-success-phone">(+84) 347 797 502</div>
                                </div>
                                <div class="seller-confirm__method-body-success-riderect">
                                    Bạn sẽ chuyển hướng đến Kênh người bán trong vòng 7 giây
                                </div>
                                <div class="seller-confirm__method-btn" onclick="redirectSeller()">Đến kênh người bán</div>
                            </div>
    `;
}

function redirectSeller() {
    window.location.assign("admin.html");
}