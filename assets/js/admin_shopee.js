// Show All
function showAll() {
    document.querySelector(".admin__container").innerHTML = 
    `
                    <div class="admin__main">
                        <div class="admin__main-container">
                            <div class="admin__main-left">
                                <div class="admin__main-analys">
                                    <div class="admin__main-title">Bảng quản trị</div>
                                    <div class="admin__main-date">
                                        <input type="date" class="admin__main-date-input">
                                    </div>
                                    <div class="admin__main-insights">
                                        <div class="admin__main-sales">
                                            <div class="admin__main-box">
                                                <i class="uil uil-analytics admin__main-icon"></i>
                                            </div>
                                            <div class="admin__main-middle">
                                                <div class="admin__main-middle-left">
                                                    <div class="admin__main-middle-title">Tổng bán hàng</div>
                                                    <div class="admin__main-middle-price">1.500.000đ</div>
                                                </div>
                                                <div class="admin__main-progress">
                                                    <svg class="admin__main-progress-img">
                                                        <circle cx="38" cy="38" r="36"></circle>
                                                    </svg>
                                                    <div class="admin__main-number">
                                                        <p class="admin__main-number-text">84%</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <small class="admin__main-text-muted">24 tiếng trước</small>
                                        </div>
                                        <!-- End Of Sales -->
                                        <div class="admin__main-expenses">
                                            <div class="admin__main-box">
                                                <i class="uil uil-chart admin__main-box-icon"></i>
                                            </div>
                                            <div class="admin__main-middle">
                                                <div class="admin__main-middle-left">
                                                    <div class="admin__main-middle-title">Tổng bán hàng</div>
                                                    <div class="admin__main-middle-price">1.500.000đ</div>
                                                </div>
                                                <div class="admin__main-progress">
                                                    <svg class="admin__main-progress-img">
                                                        <circle cx="38" cy="38" r="36"></circle>
                                                    </svg>
                                                    <div class="admin__main-number">
                                                        <p class="admin__main-number-text">84%</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <small class="admin__main-text-muted">24 tiếng trước</small>
                                        </div>
                                        <!-- End Of Expenses -->
                                        <div class="admin__main-income">
                                            <div class="admin__main-box">
                                                <i class="uil uil-comparison admin__main-box-icon"></i>
                                            </div>
                                            <div class="admin__main-middle">
                                                <div class="admin__main-middle-left">
                                                    <div class="admin__main-middle-title">Tổng thu</div>
                                                    <div class="admin__main-middle-price">1.500.000đ</div>
                                                </div>
                                                <div class="admin__main-progress">
                                                    <svg class="admin__main-progress-img">
                                                        <circle cx="38" cy="38" r="36"></circle>
                                                    </svg>
                                                    <div class="admin__main-number">
                                                        <p class="admin__main-number-text">74%</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <small class="admin__main-text-muted">24 tiếng trước</small>
                                        </div>
                                        <!-- End Of Income -->
                                    </div>
                                </div>
                                <div class="admin__main-analys admin__main-to-do-list">
                                    <div class="admin__main-title admin__main-to-do-list-title">Danh sách cần làm</div>
                                    <div class="admin__main-to-do-list-list">
                                        <div class="admin__main-sales">
                                            <div class="admin__main-to-do-list-item" onclick="showWaitingConfirm()">
                                                <div class="admin__main-to-do-list-numb">
                                                    0
                                                </div>
                                                <div class="admin__main-to-do-list-sub">
                                                    Chờ xác nhận
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Of Sales -->
                                        <div class="admin__main-expenses">
                                            <div class="admin__main-to-do-list-item" onclick="showWaitingPickup()">
                                                <div class="admin__main-to-do-list-numb">
                                                    0
                                                </div>
                                                <div class="admin__main-to-do-list-sub">
                                                    Chờ lấy hàng
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Of Expenses -->
                                        <div class="admin__main-income">
                                            <div class="admin__main-to-do-list-item">
                                                <div class="admin__main-to-do-list-numb">
                                                    0
                                                </div>
                                                <div class="admin__main-to-do-list-sub">
                                                    Đã xử lý
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Of Income -->
                                         <!-- End Of Expenses -->
                                        <div class="admin__main-income">
                                            <div class="admin__main-to-do-list-item">
                                                <div class="admin__main-to-do-list-numb">
                                                    0
                                                </div>
                                                <div class="admin__main-to-do-list-sub">
                                                    Đơn huỷ
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Of Income -->
                                        <div class="admin__main-expenses">
                                            <div class="admin__main-to-do-list-item">
                                                <div class="admin__main-to-do-list-numb">
                                                    0
                                                </div>
                                                <div class="admin__main-to-do-list-sub">
                                                    Trả hàng, hoàn tiền
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__main-expenses">
                                            <div class="admin__main-to-do-list-item">
                                                <div class="admin__main-to-do-list-numb">
                                                    0
                                                </div>
                                                <div class="admin__main-to-do-list-sub">
                                                    Sản phẩm bị khoá
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__main-expenses">
                                            <div class="admin__main-to-do-list-item">
                                                <div class="admin__main-to-do-list-numb">
                                                    0
                                                </div>
                                                <div class="admin__main-to-do-list-sub">
                                                    Sản phẩm hết hàng
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="admin__main-recent-orders">
                                    <div class="admin__main-recent-orders-title">Đơn hàng gần đây</div>
                                    <div class="admin__order-header">
                                        <ul class="admin__order-header-list">
                                            <li class="admin__order-header-item active">
                                                Tất cả
                                            </li>
                                            <li class="admin__order-header-item">
                                                Chờ thanh toán
                                            </li>
                                            <li class="admin__order-header-item">
                                                Vận chuyển (1)
                                            </li>
                                            <li class="admin__order-header-item">
                                                Chờ giao hàng
                                            </li>
                                            <li class="admin__order-header-item">
                                                Hoàn thành
                                            </li>
                                            <li class="admin__order-header-item">
                                                Đã huỷ
                                            </li>
                                            <li class="admin__order-header-item">
                                                Trả hàng/hoàn tiền
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="admin__order-container">
                                        <div class="admin__order-table">
                                            <div class="admin__order-table-header">
                                                <div class="admin__order-table-header-row">
                                                    <div class="admin__order-table-header-col">Mã đơn hàng</div>
                                                    <div class="admin__order-table-header-col">Sản phẩm</div>
                                                    <div class="admin__order-table-header-col">Thanh toán</div>
                                                    <div class="admin__order-table-header-col">Trạng thái</div>
                                                    <div class="admin__order-table-header-col"></div>
                                                </div>
                                            </div>
                                            <div class="admin__order-table-body">
                                                <div class="admin__order-table-body-row">
                                                    <div class="admin__order-table-body-col">DH123</div>
                                                    <div class="admin__order-table-body-col">3</div>
                                                    <div class="admin__order-table-body-col">500.000 đ</div>
                                                    <div class="admin__order-table-body-col warning">Chờ xác nhận</div>
                                                    <div class="admin__order-table-body-col primary">
                                                        <a href="#" class="admin__order-table-body-col-link">Chi tiết</a>
                                                    </div>
                                                </div>
                                                <div class="admin__order-table-body-row">
                                                    <div class="admin__order-table-body-col">DH435</div>
                                                    <div class="admin__order-table-body-col">3</div>
                                                    <div class="admin__order-table-body-col">500.000 đ</div>
                                                    <div class="admin__order-table-body-col primary">Đã thanh toán</div>
                                                    <div class="admin__order-table-body-col primary">
                                                        <a href="#" class="admin__order-table-body-col-link">Chi tiết</a>
                                                    </div>
                                                </div>
                                                <div class="admin__order-table-body-row">
                                                    <div class="admin__order-table-body-col">DH432</div>
                                                    <div class="admin__order-table-body-col">3</div>
                                                    <div class="admin__order-table-body-col">500.000 đ</div>
                                                    <div class="admin__order-table-body-col success">Đã giao hàng</div>
                                                    <div class="admin__order-table-body-col primary">
                                                        <a href="#" class="admin__order-table-body-col-link">Chi tiết</a>
                                                    </div>
                                                </div>
                                                <div class="admin__order-table-body-row">
                                                    <div class="admin__order-table-body-col">DH987</div>
                                                    <div class="admin__order-table-body-col">3</div>
                                                    <div class="admin__order-table-body-col">500.000 đ</div>
                                                    <div class="admin__order-table-body-col danger">Khách hàng huỷ</div>
                                                    <div class="admin__order-table-body-col primary">
                                                        <a href="#" class="admin__order-table-body-col-link">Chi tiết</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="admin__order-more">Xem tất cả</a>
                                </div>
                            </div>
                            <div class="admin__right">
                                <div class="admin__right-recent-updates">
                                    <div class="admin__right-recent-updates-title">Cập nhật gần đây</div>
                                    <div class="admin__right-recent-updates-container">
                                        <div class="admin__right-recent-updates-list">
                                            <div class="admin__right-recent-updates-item">
                                                <div class="admin__right-recent-updates-item-profile-photo">
                                                    <img src="./assets/img/profile_avatar.jpg" alt="" class="admin__right-recent-updates-item-profile-photo-img">
                                                </div>
                                                <div class="admin__right-recent-updates-item-message">
                                                    <p class="admin__right-recent-updates-item-message-text"><b class="admin__right-recent-updates-item-message-name">Công Đặng</b> nhận được đơn đặt hàng từ Fithou bằng công nghệ GPS </p>
                                                    <small class="admin__right-recent-updates-item-message-time">2 tiếng trước</small>
                                                </div>
                                            </div>
                                            <div class="admin__right-recent-updates-item">
                                                <div class="admin__right-recent-updates-item-profile-photo">
                                                    <img src="./assets/img/profile_avatar.jpg" alt="" class="admin__right-recent-updates-item-profile-photo-img">
                                                </div>
                                                <div class="admin__right-recent-updates-item-message">
                                                    <p class="admin__right-recent-updates-item-message-text"><b class="admin__right-recent-updates-item-message-name">Công Đặng</b> nhận được đơn đặt hàng từ Fithou bằng công nghệ GPS </p>
                                                    <small class="admin__right-recent-updates-item-message-time">2 tiếng trước</small>
                                                </div>
                                            </div>
                                            <div class="admin__right-recent-updates-item">
                                                <div class="admin__right-recent-updates-item-profile-photo">
                                                    <img src="./assets/img/profile_avatar.jpg" alt="" class="admin__right-recent-updates-item-profile-photo-img">
                                                </div>
                                                <div class="admin__right-recent-updates-item-message">
                                                    <p class="admin__right-recent-updates-item-message-text"><b class="admin__right-recent-updates-item-message-name">Công Đặng</b> nhận được đơn đặt hàng từ Fithou bằng công nghệ GPS </p>
                                                    <small class="admin__right-recent-updates-item-message-time">2 tiếng trước</small>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="admin__order-more">Xem tất cả</a>
                                    </div>
                                </div>
                                <div class="admin__right-sales-analytics">
                                    <div class="admin__right-sales-analytics-title">Phân tích bán hàng</div>
                                    <div class="admin__right-sales-analytics-container">
                                        <div class="admin__right-sales-analytics-list">
                                            <div class="admin__right-sales-analytics-item online">
                                                <div class="admin__right-sales-analytics-item-icon">
                                                    <i class="uil uil-shopping-cart-alt"></i>
                                                </div>
                                                <div class="admin__right-sales-analytics-item-right">
                                                    <div class="admin__right-sales-analytics-item-info">
                                                        <div class="admin__right-sales-analytics-item-sub">ĐẶT HÀNG ONLINE</div>
                                                        <small class="admin__right-sales-analytics-item-time">24 tiếng trước</small>
                                                    </div>
                                                    <div class="admin__right-sales-analytics-item-percent success">+39%</div>
                                                    <div class="admin__right-sales-analytics-item-quantity">1300</div>
                                                </div>
                                            </div>
                                            <div class="admin__right-sales-analytics-item offline">
                                                <div class="admin__right-sales-analytics-item-icon">
                                                    <i class="uil uil-shopping-bag"></i>
                                                </div>
                                                <div class="admin__right-sales-analytics-item-right">
                                                    <div class="admin__right-sales-analytics-item-info">
                                                        <div class="admin__right-sales-analytics-item-sub">ĐẶT HÀNG OFFLINE</div>
                                                        <small class="admin__right-sales-analytics-item-time">24 tiếng trước</small>
                                                    </div>
                                                    <div class="admin__right-sales-analytics-item-percent danger">-17%</div>
                                                    <div class="admin__right-sales-analytics-item-quantity">1300</div>
                                                </div>
                                            </div>
                                            <div class="admin__right-sales-analytics-item customers">
                                                <div class="admin__right-sales-analytics-item-icon">
                                                    <i class="uil uil-users-alt"></i>
                                                </div>
                                                <div class="admin__right-sales-analytics-item-right">
                                                    <div class="admin__right-sales-analytics-item-info">
                                                        <div class="admin__right-sales-analytics-item-sub">KHÁCH HÀNG MỚI</div>
                                                        <small class="admin__right-sales-analytics-item-time">24 tiếng trước</small>
                                                    </div>
                                                    <div class="admin__right-sales-analytics-item-percent success">+25%</div>
                                                    <div class="admin__right-sales-analytics-item-quantity">1300</div>
                                                </div>
                                            </div>
                                            <div class="admin__right-sales-analytics-item add-product">
                                                <div class="admin__right-sales-analytics-item-add-product">
                                                    <i class="uil uil-plus"></i>
                                                    <div class="admin__right-sales-analytics-item-add-product-sub">Thêm sản phẩm</div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="admin__right-sales-analytics-blur-bottom"></div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `;
}

function showWaitingConfirm() {
    document.querySelector(".admin__container").innerHTML = 
    `
                    <div class="admin__orders-waiting">
                        <div class="admin__add-product-container">
                            <div class="admin__add-product-header">
                                <div class="admin__add-product-header-item active">
                                    Tất cả
                                </div>
                                <div class="admin__add-product-header-item">
                                    Chờ xác nhận  
                                </div>
                                <div class="admin__add-product-header-item">
                                    Đang giao
                                </div>
                                <div class="admin__add-product-header-item">
                                    Đã giao
                                </div>
                            </div>
                            <div class="admin__setup-shop-body">
                                <div class="admin__setup-shop-container">
                                    <div class="admin__profile-shop-body-header">
                                        <div class="admin__add-product-title">
                                            1 Đơn hàng 
                                        </div>
                                    </div>
                                    <div class="admin__order-container">
                                        <div class="admin__order-table">
                                            <div class="admin__order-table-header">
                                                <div class="admin__order-table-header-row">
                                                    <div class="admin__order-table-header-col">Mã đơn hàng</div>
                                                    <div class="admin__order-table-header-col">Sản phẩm</div>
                                                    <div class="admin__order-table-header-col">Thanh toán</div>
                                                    <div class="admin__order-table-header-col">Trạng thái</div>
                                                    <div class="admin__order-table-header-col">Xem</div>
                                                </div>
                                            </div>
                                            <div class="admin__order-table-body">
                                                <div class="admin__order-table-body-row">
                                                    <div class="admin__order-table-body-col">DH123</div>
                                                    <div class="admin__order-table-body-col">3</div>
                                                    <div class="admin__order-table-body-col">500.000 đ</div>
                                                    <div class="admin__order-table-body-col warning">Chờ xác nhận</div>
                                                    <div class="admin__order-table-body-col primary">
                                                        <a href="#" class="admin__order-table-body-col-link">Chi tiết</a>
                                                    </div>
                                                </div>
                                                <div class="admin__order-table-body-row">
                                                    <div class="admin__order-table-body-col">DH435</div>
                                                    <div class="admin__order-table-body-col">3</div>
                                                    <div class="admin__order-table-body-col">500.000 đ</div>
                                                    <div class="admin__order-table-body-col primary">Đã thanh toán</div>
                                                    <div class="admin__order-table-body-col primary">
                                                        <a href="#" class="admin__order-table-body-col-link">Chi tiết</a>
                                                    </div>
                                                </div>
                                                <div class="admin__order-table-body-row">
                                                    <div class="admin__order-table-body-col">DH432</div>
                                                    <div class="admin__order-table-body-col">3</div>
                                                    <div class="admin__order-table-body-col">500.000 đ</div>
                                                    <div class="admin__order-table-body-col success">Đã giao hàng</div>
                                                    <div class="admin__order-table-body-col primary">
                                                        <a href="#" class="admin__order-table-body-col-link">Chi tiết</a>
                                                    </div>
                                                </div>
                                                <div class="admin__order-table-body-row">
                                                    <div class="admin__order-table-body-col">DH987</div>
                                                    <div class="admin__order-table-body-col">3</div>
                                                    <div class="admin__order-table-body-col">500.000 đ</div>
                                                    <div class="admin__order-table-body-col danger">Khách hàng huỷ</div>
                                                    <div class="admin__order-table-body-col primary">
                                                        <a href="#" class="admin__order-table-body-col-link">Chi tiết</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="admin__order-more">Xem tất cả</a>
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

function openUpdateAccount() {
    openModal();
    let htmlUpdateAccount = "";
    htmlUpdateAccount += 
    `
            <div class="address-form">
                <div class="address-form__new">
                    <div class="admin-account__update-title">
                        Cập nhật tài khoản
                    </div>
                    <div class="address-form__new-body">
                        <div class="admin-account__update-form">
                            <div class="admin-account__update-div">
                                <label for="" class="admin-account__update-label">Quyền</label>
                                <div class="admin-account__update-box-ra">
                                    <div class="admin-account__update-box-ra1">
                                        <input type="radio" name="role-account" class="admin-account__update-radio">
                                        <label for="" class="admin-account__update-radio-label">Admin</label>
                                    </div>
                                    <div class="admin-account__update-box-ra1">
                                        <input type="radio" name="role-account" class="admin-account__update-radio">
                                        <label for="" class="admin-account__update-radio-label">Người dùng</label>
                                    </div>
                                    <div class="admin-account__update-box-ra1">
                                        <input type="radio" name="role-account" class="admin-account__update-radio">
                                        <label for="" class="admin-account__update-radio-label">Lấy hàng</label>
                                    </div>
                                    <div class="admin-account__update-box-ra1">
                                        <input type="radio" name="role-account" class="admin-account__update-radio">
                                        <label for="" class="admin-account__update-radio-label">Giao hàng</label>
                                    </div>
                                </div>
                            </div>
                            <div class="admin-account__update-div">
                                <label for="" class="admin-account__update-label">Email</label>
                                <input type="text" class="address-form__new-input admin-account__update-input" readonly value="dangcong@gmail.com">
                            </div>
                            <div class="admin-account__update-div">
                                <label for="" class="admin-account__update-label">Tên đăng nhập</label>
                                <input type="text" class="address-form__new-input admin-account__update-input">
                            </div>
                            <div class="admin-account__update-div">
                                <label for="" class="admin-account__update-label">Ảnh hồ sơ</label>
                                <div class="admin__profile-shop-table-logo">
                                    <div class="admin__profile-shop-table-logo-thumb">
                                        <img src="./assets/img/no_user.jpg" class="admin__profile-shop-table-logo-img" alt="">
                                        <div class="admin__profile-shop-table-logo-pic">Sửa</div>
                                    </div>
                                    <ul class="admin__profile-shop-table-logo-sub">
                                        <li class="admin__profile-shop-table-logo-sub-text">
                                            Kích thước hình ảnh tiêu chuẩn: Chiều rộng 300px, Chiều cao 300px
                                        </li>
                                        <li class="admin__profile-shop-table-logo-sub-text">
                                            Dung lượng file tối đa 2.0MB
                                        </li>
                                        <li class="admin__profile-shop-table-logo-sub-text">
                                            Định dạng file được hỗ trợ: JPG, JPEG, PNG
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="admin-account__update-div l-4">
                                <label for="" class="admin-account__update-label">Ngày sinh</label>
                                <input type="date" class="admin-account__update-input-date">
                            </div>
                            <div class="admin-account__update-div">
                                <label for="" class="admin-account__update-label">Giới tính</label>
                                <div class="admin-account__update-box-ra">
                                    <div class="admin-account__update-box-ra1">
                                        <input type="radio" name="gender-account" class="admin-account__update-radio">
                                        <label for="" class="admin-account__update-radio-label">Nam</label>
                                    </div>
                                    <div class="admin-account__update-box-ra1">
                                        <input type="radio" name="gender-account" class="admin-account__update-radio">
                                        <label for="" class="admin-account__update-radio-label">Nữ</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="address-form__new-footer">
                        <div class="address-form__new-footer-btns">
                            <button class="btn" onclick="closeModal()">Thoát</button>
                            <button class="btn btn--primary address-form__new-btn">Cập nhât</button>
                        </div>
                    </div>
                </div>
            </div>
    `;
    document.querySelector(".modal__body").innerHTML = htmlUpdateAccount;
}

function openDeleteAccount() {
    openModal();
    document.querySelector(".modal__body").innerHTML = 
    `
                    <div class="modal__confirm">
                        <div class="modal__confirm-header">
                            <div class="modal__confirm-title">Thông báo</div>
                        </div>
                        <div class="modal__confirm-desc">
                            Bạn có chắc muốn xoá tài khoản này?
                        </div>
                        <div class="modal__confirm-btns">
                            <div class="modal__confirm-btn-destroy" onclick="closeModal()">Huỷ</div>
                            <div class="modal__confirm-btn-send">Xoá</div>
                        </div>
                    </div>
    `;
}