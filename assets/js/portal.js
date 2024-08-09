function openAddressModal() {
    openModal();
    document.querySelector(".modal__body").innerHTML = 
    `
            <div class="address-form">
                <div class="address-form__new">
                    <div class="address-form__new-title">
                        Địa chỉ mới
                        <div class="address-form__new-title-sub">Để đặt hàng, vui lòng thêm địa chỉ nhận hàng</div>
                    </div>
                    <div class="address-form__new-body">
                        <div class="address-form__new-div">
                            <div class="address-form__new-box">
                                <div class="address-form__new-box-left">
                                    <input type="text" class="address-form__new-input address-form__new-input-fullname">
                                    <label for="" class="address-form__new-label address-form__new-label-fullname">Họ và tên</label>
                                </div>
                                <div class="address-form__new-box-right">
                                    <input type="text" class="address-form__new-input address-form__new-input-phone">
                                    <label for="" class="address-form__new-label address-form__new-label-phone">Số điện thoại</label>
                                </div>
                            </div>
                        </div>
                        <div class="address-form__new-div">
                            <input type="text" class="address-form__new-input address-form__new-input-choose" onclick="showAddressNewChoose()">
                            <div class="address-form__new-choose">
                                <div class="address-form__new-choose-detail">
                                    <div class="address-form__new-choose-detail-header">
                                        <div class="address-form__new-choose-detail-title active">Tỉnh/Thành phố</div>
                                        <div class="address-form__new-choose-detail-title">Quận/Huyện</div>
                                        <div class="address-form__new-choose-detail-title">Phường/Xã</div>
                                    </div>
                                    <div class="address-form__new-choose-detail-body">
                                        <div class="address-form__new-choose-detail-city">
                                            <ul class="address-form__new-choose-detail-city-list">
                                                
                                            </ul>
                                        </div>
                                        <div class="address-form__new-choose-detail-district hide">
                                            <ul class="address-form__new-choose-detail-district-list">
                                                
                                            </ul>
                                        </div>
                                        <div class="address-form__new-choose-detail-street hide">
                                            <ul class="address-form__new-choose-detail-street-list">
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <i class="uil uil-angle-down address-form__new-div-icon"></i>
                            <label for="" class="address-form__new-label address-form__new-label-choose">Tỉnh/Thành phố, Quận/Huyện, Phường/Xã</label>
                        </div>
                        <div class="address-form__new-div">
                            <textarea name="" id="" class="address-form__new-textarea address-form__new-textarea-desc"></textarea>
                            <label for=""class="address-form__new-label address-form__new-label-desc">Địa chỉ cụ thể</label>
                        </div>
                        <div class="address-form__new-please">
                            <i class="uil uil-bell address-form__new-please-icon"></i>
                            <div class="address-form__new-please-desc">
                                <div class="address-form__new-please-desc-title">Vui lòng ghim địa chỉ chính xác</div>
                                <div class="address-form__new-please-desc-subtitle">Hãy chắc chắn vị trí trên bản đồ được ghim đúng để Shopee gửi hàng cho bạn nhé!</div>
                            </div>
                        </div>
                        <div class="address-form__new-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.0349263999647!2d105.52882531470965!3d9.76310899301383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x746941d0e6aacf0!2zOcKwNDUnNDcuMiJOIDEwNcKwMzEnNTEuNyJF!5e0!3m2!1svi!2s!4v1659586535479!5m2!1svi!2s" width="100%" height="120px" ></iframe>
                        </div>
                        <div class="address-form__new-type">
                            <div class="address-form__new-type-title">Loại địa chỉ:</div>
                            <div class="address-form__new-type-btns">
                                <button class="address-form__new-type-btn">Nhà riêng</button>
                                <button class="address-form__new-type-btn">Văn phòng</button>
                            </div>
                        </div>
                        <div class="address-form__new-set-default">
                            <input type="checkbox" class="address-form__new-set-default-input">
                            <label for="">Đặt làm mặc định</label>
                        </div>
                    </div>
                    <div class="address-form__new-footer">
                        <div class="address-form__new-footer-btns">
                            <button class="btn" onclick="closeModal()">Thoát</button>
                            <button class="btn btn--primary address-form__new-btn">Hoàn thành</button>
                        </div>
                    </div>
                </div>
            </div>
    `;
}

function openModal() {
    document.querySelector(".modal").classList.add("open");
}

function closeModal() {
    document.querySelector(".modal").classList.remove("open");
}

// Transport Portal
function openTransportModal() {
    document.querySelector(".modal").classList.add("open");
    document.querySelector(".modal__body").innerHTML = 
    `
        <div class="modal__confirm">
            <div class="modal__confirm-header">
                <div class="modal__confirm-title">Lưu ý</div>
                <i class="uil uil-multiply modal__confirm-close"></i>
            </div>
            <div class="modal__confirm-desc">
                Kênh vận chuyển này sẽ được tắt trên tất cả các sản phẩm hiện có của shop. Người mua sẽ không 
                hoàn tất được đơn hàng hoặc sản phẩm không hiển thị với người mua nếu không có bất kỳ phương 
                thức vận chuyển khả dụng nào.
            </div>
            <div class="modal__confirm-btns">
                <div class="modal__confirm-btn-destroy" onclick="closeModal()">Huỷ</div>
                <div class="modal__confirm-btn-send"onclick="changeTransport()">Xác nhận</div>
            </div>
        </div>
    `;
}

function changeTransport(circle) {
    document.querySelectorAll(".portal__transport-item-control")[0].classList.remove("active");
    closeModal();
}

// Shop Portal
function openShopPortal() {
    document.querySelector(".portal__start").classList.add("hide-on-destop");
    document.querySelector(".portal__container").classList.remove("hide-on-destop");
    document.querySelector(".portal__body").innerHTML = 
    `
                        <div class="portal__shop">
                            <div class="portal__shop-container">
                                <div class="portal__shop-form">
                                    <div class="portal__shop-row">
                                        <div class="portal__shop-col-1">Tên Shop</div>
                                        <div class="portal__shop-col-2">
                                            <div class="portal__shop-box">
                                                <input type="text" class="portal__shop-input-name">
                                                <span>10/30</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portal__shop-row">
                                        <div class="portal__shop-col-1">Địa chỉ lấy hàng</div>
                                        <div class="portal__shop-col-2">
                                            <div class="portal__shop-address" onclick="openAddressModal()">
                                                <i class="uil uil-plus"></i>
                                                <span>Thêm</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portal__shop-row">
                                        <div class="portal__shop-col-1">Email</div>
                                        <div class="portal__shop-col-2">
                                            <div class="portal__shop-box">
                                                <input type="text" class="portal__shop-input-email">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portal__shop-row">
                                        <div class="portal__shop-col-1">Số điện thoại</div>
                                        <div class="portal__shop-col-2">
                                            <div class="portal__shop-phone">(+84) 347 797 502</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="portal__shop-bottom">
                                <div class="portal__shop-btn-save">Lưu</div>
                                <div class="portal__shop-btn-next" onclick="openTransportPortal()">Tiếp theo</div>
                            </div>
                        </div>
    `;
}

function openTransportPortal() {
    document.querySelector(".app").classList.remove("hight");
    document.querySelector(".portal__step-line-1").classList.add("active");
    document.querySelectorAll(".portal__step")[1].classList.add("active");
    document.querySelector(".portal__body").innerHTML = 
    `
                        <div class="portal__transport">
                            <div class="portal__shop-container">
                                <div class="portal__transport-header">
                                    <div class="portal__transport-header-title">Phương thức vận chuyển</div>
                                    <div class="portal__transport-header-sub">Kích hoạt phương thức vận chuyển phù hợp</div>
                                </div>
                                <div class="portal__transport-body">
                                    <div class="portal__transport-item">
                                        <div class="portal__transport-item-name">
                                            <div class="portal__transport-item-name-sub">Hoả tốc</div>
                                            <div class="portal__transport-item-collapse">
                                                <div class="portal__transport-item-collapse-sub">Thu gọn</div>
                                                <i class="uil uil-angle-up portal__transport-item-collapse-icon"></i>
                                            </div>
                                        </div>
                                        <div class="portal__transport-item-box">
                                            <div class="portal__transport-item-box-name">
                                                <div class="portal__transport-item-box-name-sub">Hoả tốc</div>
                                                <span>[COD đã được kích hoạt]</span>
                                            </div>
                                            <div class="portal__transport-item-control active" onclick="openTransportModal()">
                                                <div class="portal__transport-item-control-circle"></div>
                                            </div>
                                            <i class="uil uil-angle-down portal__transport-item-box-icon"></i>
                                        </div>
                                    </div>
                                    <div class="portal__transport-item">
                                        <div class="portal__transport-item-name">
                                            <div class="portal__transport-item-name-sub">Nhanh</div>
                                            <div class="portal__transport-item-collapse">
                                                <div class="portal__transport-item-collapse-sub">Thu gọn</div>
                                                <i class="uil uil-angle-up portal__transport-item-collapse-icon"></i>
                                            </div>
                                        </div>
                                        <div class="portal__transport-item-box">
                                            <div class="portal__transport-item-box-name">
                                                <div class="portal__transport-item-box-name-sub">Nhanh</div>
                                                <span>[COD đã được kích hoạt]</span>
                                            </div>
                                            <div class="portal__transport-item-control active">
                                                <div class="portal__transport-item-control-circle"></div>
                                            </div>
                                            <i class="uil uil-angle-down portal__transport-item-box-icon"></i>
                                        </div>
                                    </div>
                                    <div class="portal__transport-item">
                                        <div class="portal__transport-item-name">
                                            <div class="portal__transport-item-name-sub">Tiết kiệm</div>
                                            <div class="portal__transport-item-collapse">
                                                <div class="portal__transport-item-collapse-sub">Thu gọn</div>
                                                <i class="uil uil-angle-up portal__transport-item-collapse-icon"></i>
                                            </div>
                                        </div>
                                        <div class="portal__transport-item-box">
                                            <div class="portal__transport-item-box-name">
                                                <div class="portal__transport-item-box-name-sub">Tiết kiệm</div>
                                                <span>[COD đã được kích hoạt]</span>
                                            </div>
                                            <div class="portal__transport-item-control active">
                                                <div class="portal__transport-item-control-circle"></div>
                                            </div>
                                            <i class="uil uil-angle-down portal__transport-item-box-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="portal__shop-bottom">
                                <div class="portal__shop-btn-back" onclick="openShopPortal()">Quay lại</div>
                                <div class="portal__shop-btn-next" onclick="openTaxPortal()">Tiếp theo</div>
                            </div>
                        </div>
    `;
}

function openTaxPortal() {
    document.querySelector(".app").classList.remove("hight");
    document.querySelector(".portal__step-line-2").classList.add("active");
    document.querySelectorAll(".portal__step")[2].classList.add("active");
    document.querySelector(".portal__body").innerHTML = 
    `
                        <div class="portal__tax">
                            <div class="portal__shop-container">
                                <div class="portal__tax-remind">
                                    <i class="uil uil-exclamation-octagon portal__tax-remind-icon"></i>
                                    <div class="portal__tax-remind-sub">
                                        Việc thu nhập Thông Tin Thuế và Thông Tin Định Danh là bắt buộc của luật 
                                        An ninh mạng, Thương mại điện tử và Thuế của Việt Nam. Thông Tin Thuế và Thông 
                                        Tin Định Danh sẽ được bảo vệ theo chính sách bảo mật của Shopee. Người bán hoàn toàn 
                                        chịu trách nhiệm về tính chính xác của thông tin.
                                    </div>
                                </div>
                                <div class="portal__tax-body">
                                    <div class="portal__shop-form">
                                        <div class="portal__shop-row">
                                            <div class="portal__shop-col-1">Loại hình kinh doanh</div>
                                            <div class="portal__shop-col-2">
                                                <div class="portal__tax-business-type">
                                                    <div class="portal__tax-business-type-item">
                                                        <input type="radio" name="business-type" class="portal__tax-business-type-item-radio" id="">
                                                        <label for="" class="portal__tax-business-type-item-label">Cá nhân</label>
                                                    </div>
                                                    <div class="portal__tax-business-type-item">
                                                        <input type="radio" name="business-type" class="portal__tax-business-type-item-radio" id="">
                                                        <label for="" class="portal__tax-business-type-item-label">Hộ kinh doanh</label>
                                                    </div>
                                                    <div class="portal__tax-business-type-item">
                                                        <input type="radio" name="business-type" class="portal__tax-business-type-item-radio" id="">
                                                        <label for="" class="portal__tax-business-type-item-label">Công ty</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="portal__shop-row">
                                            <div class="portal__shop-col-1 portal__tax-email-sub">Địa chỉ đăng ký kinh doanh</div>
                                            <div class="portal__shop-col-2">
                                                <textarea name="" id="" class="portal__tax-business-type-item-textarea"></textarea>
                                            </div>
                                        </div>
                                        <div class="portal__shop-row">
                                            <div class="portal__shop-col-1">
                                                Email nhận hoá đơn điện tử
                                            </div>
                                            <div class="portal__shop-col-2">
                                                <div class="portal__shop-box">
                                                    <input type="text" class="portal__shop-input-email">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="portal__shop-row">
                                            <div class="portal__shop-col-1 portal__tax-code-name">Mã số thuế</div>
                                            <div class="portal__shop-col-2">
                                                <div class="portal__shop-box">
                                                    <input type="text" class="portal__shop-input-name">
                                                    <span>10/30</span>
                                                </div>
                                                <div class="portal__tax-code-sub">
                                                    Theo Quy định về Thương mại điện tử Việt Nam (Nghị định 52/2013/ND-CP), Người bán phải 
                                                    cung cấp thông tin Mã số thuế cho sàn giao dịch thương mại điện tử.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="portal__shop-bottom">
                                <div class="portal__shop-btn-back" onclick="openTransportPortal()">Quay lại</div>
                                <div class="portal__shop-btn-save">Lưu</div>
                                <div class="portal__shop-btn-next" onclick="openIdentificationPort()">Tiếp theo</div>
                            </div>
                        </div>
    `;
}

function openIdentificationPort() {
    document.querySelector(".portal__step-line-3").classList.add("active");
    document.querySelectorAll(".portal__step")[3].classList.add("active");
    document.querySelector(".portal__body").innerHTML = 
    `
                        <div class="portal__identification">
                            <div class="portal__shop-container">
                                <div class="portal__tax-remind">
                                    <i class="uil uil-exclamation-octagon portal__tax-remind-icon"></i>
                                    <div class="portal__tax-remind-sub">
                                        Vui lòng cung cấp Thông Tin Định Danh của Chủ Shop (Nếu là cá nhân), 
                                        hoặc Người Đại Diện Pháp Lý trên giấy đăng ký kinh doanh.
                                    </div>
                                </div>
                                <div class="portal__tax-body">
                                    <div class="portal__shop-form">
                                        <div class="portal__shop-row">
                                            <div class="portal__shop-col-1">Hình thức định danh</div>
                                            <div class="portal__shop-col-2">
                                                <div class="portal__tax-business-type">
                                                    <div class="portal__tax-business-type-item">
                                                        <input type="radio" name="business-type" class="portal__tax-business-type-item-radio" id="">
                                                        <label for="" class="portal__tax-business-type-item-label" title="Căn Cước Công Cân (CCCD)">Căn Cước Công Cân (CCCD)</label>
                                                    </div>
                                                    <div class="portal__tax-business-type-item">
                                                        <input type="radio" name="business-type" class="portal__tax-business-type-item-radio" id="">
                                                        <label for="" class="portal__tax-business-type-item-label" title="Chứng Minh Nhân Dân (CMND)">Chứng Minh Nhân Dân (CMND)</label>
                                                    </div>
                                                    <div class="portal__tax-business-type-item">
                                                        <input type="radio" name="business-type" class="portal__tax-business-type-item-radio" id="">
                                                        <label for="" class="portal__tax-business-type-item-label" title="Hộ chiếu">Hộ chiếu</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="portal__shop-row">
                                            <div class="portal__shop-col-1 portal__tax-code-name">Số Căn Cước Công Dân (CCCD)</div>
                                            <div class="portal__shop-col-2">
                                                <div class="portal__shop-box">
                                                    <input type="text" class="portal__shop-input-name">
                                                    <span>0/12</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="portal__shop-row">
                                            <div class="portal__shop-col-1 portal__tax-email-sub portal__tax-code-name">Họ và tên</div>
                                            <div class="portal__shop-col-2">
                                                <div class="portal__shop-box">
                                                    <input type="text" class="portal__shop-input-name">
                                                    <span>0/100</span>
                                                </div>
                                                <div class="portal__tax-code-sub">
                                                    Theo CMND/CCCD/Hộ chiếu
                                                </div>
                                            </div>
                                        </div>
                                        <div class="portal__shop-row">
                                            <div class="portal__shop-col-1 portal__tax-email-sub portal__text-left">
                                                Hình chụp của thẻ CMNN/CCCD/Hộ chiếu
                                            </div>
                                            <div class="portal__shop-col-2">
                                                <div class="portal__identification-card">
                                                    <div class="portal__identification-add-img">
                                                        <i class="uil uil-plus portal__identification-add-img-icon"></i>
                                                    </div>
                                                    <img src="./assets/img/cccd_img.jpg" class="portal__identification-card-img" alt="">
                                                </div>
                                                <div class="portal__tax-code-sub">
                                                    Vui lòng cung cấp cảnh chụp cận CMND/CCCD/Hộ chiếu của bạn.
                                                    Các thông tin trong CMND/CCCD/Hộ chiếu phải được hiển thị 
                                                    rõ ràng (Kích thước ảnh không vượt quá 5.0 MB)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="portal__shop-row">
                                            <div class="portal__shop-col-1 portal__tax-email-sub portal__text-left">
                                                Ảnh đang cầm CMNN/CCCD/Hộ chiếu của bạn
                                            </div>
                                            <div class="portal__shop-col-2">
                                                <div class="portal__identification-card">
                                                    <div class="portal__identification-add-img">
                                                        <i class="uil uil-plus portal__identification-add-img-icon"></i>
                                                    </div>
                                                    <img src="./assets/img/cccd_img.jpg" class="portal__identification-card-img" alt="">
                                                </div>
                                                <div class="portal__tax-code-sub">
                                                    Vui lòng cung cấp ảnh bạn cầm CMND/CCCD/Hộ chiếu như ảnh mẫu.
                                                    Các thông tin trong CMND/CCCD/Hộ chiếu và hình ảnh của bạn phải được hiển thị 
                                                    rõ ràng (Kích thước ảnh không vượt quá 5.0 MB)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="portal__identification-confirm">
                                    <input type="checkbox" name="" id="" class="portal__identification-confirm-input">
                                    <div class="portal__identification-confirm-sub">
                                        Tôi xác nhận tất cả dữ liệu đã cung cấp là chính xác và trung thực. Tôi đã đọc và đồng ý 
                                        với Chính Sách Bảo Mật của Shopee.
                                    </div>
                                </div>
                            </div>
                            <div class="portal__shop-bottom">
                                <div class="portal__shop-btn-back" onclick="openTaxPortal()">Quay lại</div>
                                <div class="portal__shop-btn-save">Lưu</div>
                                <div class="portal__shop-btn-next" onclick="openSuccessPortal()">Tiếp theo</div>
                            </div>
                        </div>
    `;
}

function openSuccessPortal() {
    document.querySelector(".app").classList.add("hight");
    document.querySelector(".portal__step-line-4").classList.add("active");
    document.querySelectorAll(".portal__step")[4].classList.add("active");
    document.querySelector(".portal__body").innerHTML = 
    `
                        <div class="portal__success">
                            <div class="portal__success-container">
                                <div class="portal__success-box">
                                    <i class="uil uil-check portal__success-box-icon"></i>
                                </div>
                                <div class="portal__success-title">Đăng ký thành công</div>
                                <div class="portal__success-sub">Hãy bán sản phẩm đầu tiên để khởi động hành trình bán hàng cùng <br> Shopee nhé!</div>
                                <div class="portal__success-btn">
                                    <div class="btn btn--primary" onclick="openAdminPage()">Thêm sản phẩm</div>
                                </div>
                            </div>
                        </div>
    `;
}

function openAdminPage() {
    window.location.assign("admin.html");
}