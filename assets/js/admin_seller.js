const lightTheme = "light-theme";
const activeTheme = "active";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.body.classList.contains("dark-theme-variables") ? "dark" : "light";
const getCurrentActive = () => document.querySelector(".admin__right-top-theme-icon").classList.contains(activeTheme) ? "active" : "";

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"]("dark-theme-variables");
    //document.querySelector(".admin__right-top-theme-icon").classList[selectedIcon === "active" ? "add" : "remove"]("active");
}

if (selectedIcon == "active") {
    document.querySelector('.admin__right-top-theme-icon:nth-child(1)').classList.add("active");
    document.querySelector('.admin__right-top-theme-icon:nth-child(2)').classList.remove("active");
} else if (selectedIcon == null) {
    document.querySelector('.admin__right-top-theme-icon:nth-child(1)').classList.add("active");
    document.querySelector('.admin__right-top-theme-icon:nth-child(2)').classList.remove("active");
}
 else {
    document.querySelector('.admin__right-top-theme-icon:nth-child(1)').classList.remove("active");
    document.querySelector('.admin__right-top-theme-icon:nth-child(2)').classList.add("active");
}

function toggleTheme(div) {
    document.body.classList.toggle('dark-theme-variables');
    div.querySelector('i:nth-child(1)').classList.toggle('active');
    div.querySelector('i:nth-child(2)').classList.toggle('active');
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentActive());
}

// Toggle Sibar Menu
document.querySelectorAll(".admin__aside-sidebar-link").forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle("active");
    });
});

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
                                            <div class="admin__main-to-do-list-item">
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

// Setup Shop
function showSetupShop() {
    document.querySelector(".admin__container").innerHTML = 
    `
                <div class="admin__setup-shop">
                    <div class="admin__setup-shop-header">
                        <div class="admin__setup-shop-header-item active">
                            Tài khoản và bảo mật 
                        </div>
                        <div class="admin__setup-shop-header-item">
                            Cài đặt Vận chuyển  
                        </div>
                        <div class="admin__setup-shop-header-item">
                            Cài đặt Thanh toán  
                        </div>
                        <div class="admin__setup-shop-header-item">
                            Cài đặt Chat 
                        </div>
                        <div class="admin__setup-shop-header-item">
                            Cài đặt Thông báo  
                        </div>
                        <div class="admin__setup-shop-header-item">
                            Chế độ Tạm nghỉ  
                        </div>
                        <div class="admin__setup-shop-header-item">
                            Nền tảng Đối tác (Kết nối API)
                        </div>
                    </div>
                    <div class="admin__setup-shop-body">
                        <div class="admin__setup-shop-container">
                            <div class="admin__setup-shop-title">
                                Thông Tin Tài Khoản 
                            </div>
                            <div class="admin__setup-shop-table">
                                <div class="admin__setup-shop-table-row">
                                    <div class="admin__setup-shop-table-row-container">
                                        <div class="admin__setup-shop-table-col-sub">Hồ sơ của tôi</div>
                                        <div class="admin__setup-shop-table-col-value">
                                            <div class="admin__setup-shop-table-col-value-username">
                                                <div class="admin__setup-shop-table-shop">
                                                    <img src="./assets/img/no_user.jpg" alt="" class="admin__setup-shop-table-shop-img">
                                                    <div class="admin__setup-shop-table-shop-name">congdang365</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__setup-shop-table-col-btn admin__setup-shop-table-col-btn-username" onclick="showChangeShopUsername()">Sửa</div>
                                    </div>
                                    <div class="admin__setup-shop-table-change hide">
                                        <div class="admin__setup-shop-table-change-title">Tên đăng nhập</div>
                                        <div class="admin__setup-shop-table-change-container">
                                            <input type="text" class="admin__setup-shop-table-change-input" value="congdang365">
                                            <div class="admin__setup-shop-table-change-sub-text">
                                                Tên đăng nhập phải có độ dài từ 5-30 ký tự. Ký tự hợp lệ bao gồm Tiếng Việt 
                                                không dấu, chữ số, dấu gạch dưới, dấu chấm. Không sử dụng tên đăng nhập chứa dấu cách
                                                hoặc chỉ bao gồm chữ số 
                                            </div>
                                            <div class="admin__setup-shop-table-change-btns">
                                                <div class="admin__setup-shop-table-change-btn-save" onclick="openChangeShopUsernameModal()">Lưu</div>
                                                <div class="admin__setup-shop-table-change-btn-destroy" onclick="hideChangeShopUsername()">Huỷ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="admin__setup-shop-table-row">
                                    <div class="admin__setup-shop-table-row-container">
                                        <div class="admin__setup-shop-table-col-sub">Số điện thoại</div>
                                        <div class="admin__setup-shop-table-col-value">
                                            <div class="admin__setup-shop-table-shop">
                                                *****502
                                            </div>
                                        </div>
                                        <div class="admin__setup-shop-table-col-btn">Sửa</div>
                                    </div>
                                </div>
                                <div class="admin__setup-shop-table-row">
                                    <div class="admin__setup-shop-table-row-container">
                                        <div class="admin__setup-shop-table-col-sub">Email</div>
                                        <div class="admin__setup-shop-table-col-value">
                                            <div class="admin__setup-shop-table-shop">
                                                dan****@gmail.com
                                            </div>
                                        </div>
                                        <div class="admin__setup-shop-table-col-btn">Sửa</div>
                                    </div>
                                </div>
                                <div class="admin__setup-shop-table-row">
                                    <div class="admin__setup-shop-table-row-container">
                                        <div class="admin__setup-shop-table-col-sub">Mật khẩu đăng nhâp</div>
                                        <div class="admin__setup-shop-table-col-value">
                                            <div class="admin__setup-shop-table-shop">
                                                <div class="admin__setup-shop-table-sub-bland">
                                                    Nhắn nhủ: Bạn nên thường xuyên thay đổi mật khẩu để tránh các sự cố về vấn đề bảo mật
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__setup-shop-table-col-btn">Sửa</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `;
}

// Show Bulk delivery
function showBulkDelivery() {
    openModal();
    document.querySelector(".modal__body").innerHTML = 
            `
                <div class="modal__confirm">
                    <div class="modal__confirm-header">
                        <div class="modal__confirm-title">Thông báo</div>
                    </div>
                    <div class="modal__confirm-desc">
                        Chức năng này chưa được hoàn thiện!
                    </div>
                    <div class="modal__confirm-btns">
                        <div class="modal__confirm-btn-send"onclick="closeModal()">Đồng ý</div>
                    </div>
                </div>
            `;
}

// Show Cancellation
function showCancellation() {
    openModal();
    document.querySelector(".modal__body").innerHTML = 
            `
                <div class="modal__confirm">
                    <div class="modal__confirm-header">
                        <div class="modal__confirm-title">Thông báo</div>
                    </div>
                    <div class="modal__confirm-desc">
                        Chức năng này chưa được hoàn thiện!
                    </div>
                    <div class="modal__confirm-btns">
                        <div class="modal__confirm-btn-destroy" onclick="closeModal()">Huỷ</div>
                        <div class="modal__confirm-btn-send"onclick="closeModal()">Đồng ý</div>
                    </div>
                </div>
            `;
}

// Show Chat Management
function openAceptFriendModal() {
    openModal();
    document.querySelector(".modal__body").innerHTML = 
    `
            <div class="modal__confirm">
                <div class="modal__confirm-header">
                    <div class="modal__confirm-title">Thông báo</div>
                </div>
                <div class="modal__confirm-desc">
                    <div class="admin__right-recent-updates-item" onclick="openAceptFriendModal()">
                        <div class="admin__right-recent-updates-item-profile-photo">
                            <img src="./assets/img/profile_avatar.jpg" alt="" class="admin__right-recent-updates-item-profile-photo-img">
                        </div>
                        <div class="admin__right-recent-updates-item-message">
                            <p class="admin__right-recent-updates-item-message-text"><b class="admin__right-recent-updates-item-message-name">Công Đặng</b> đã gửi cho bạn lời mời kết bạn </p>
                            <small class="admin__right-recent-updates-item-message-time">2 tiếng trước</small>
                        </div>
                    </div>
                </div>
                <div class="modal__confirm-btns">
                    <div class="modal__confirm-btn-destroy" onclick="closeModal()">Huỷ</div>
                    <div class="modal__confirm-btn-send"onclick="closeModal()">Chấp nhận kết bạn</div>
                </div>
            </div>
    `;
}

// Setup Profile Shop
function setupProfileShop() {
    document.querySelector(".admin__profile-shop-body-header-right").classList.add("hide-on-destop");
    document.querySelector(".admin__profile-shop-table-username-text").classList.add("hide-on-destop");
    document.querySelector(".admin__profile-shop-table-username").classList.remove("hide-on-destop");
    document.querySelector(".admin__profile-shop-table-logo-pic").classList.remove("hide-on-destop");
    document.querySelector(".admin__profile-shop-table-textarea").classList.remove("hide-on-destop");
    document.querySelector(".admin__profile-shop-table-change-btns").classList.remove("hide-on-destop");
}

function saveProfileShop() {
    document.querySelectorAll(".spinner-btn").forEach(e => {
        e.classList.remove("hide-on-destop");
    });
    setTimeout(() => {
        setTimeout(() => {
            toast({ title: "Thông báo", msg: `Cập nhật thành công`, type: "success", duration: 5000 });
            document.querySelectorAll(".spinner-btn").forEach(e => {
                e.classList.add("hide-on-destop");
            });
            document.querySelector(".admin__profile-shop-body-header-right").classList.remove("hide-on-destop");
            document.querySelector(".admin__profile-shop-table-username-text").classList.remove("hide-on-destop");
            document.querySelector(".admin__profile-shop-table-username").classList.add("hide-on-destop");
            document.querySelector(".admin__profile-shop-table-logo-pic").classList.add("hide-on-destop");
            document.querySelector(".admin__profile-shop-table-textarea").classList.add("hide-on-destop");
            document.querySelector(".admin__profile-shop-table-change-btns").classList.add("hide-on-destop");
        }, 1000)
    }, 2000);
}

// Modal
function openModal() {
    document.querySelector(".modal").classList.add("open");
}

function closeModal() {
    document.querySelector(".modal").classList.remove("open");
}

function showChangeShopUsername() {
    document.querySelector(".admin__setup-shop-table-change").classList.remove("hide");
    document.querySelector(".admin__setup-shop-table-col-value-username").classList.add("hide-on-destop");
    document.querySelector(".admin__setup-shop-table-col-btn-username").classList.add("hide-on-destop");
}

function openChangeShopUsernameModal() {
    openModal();
    document.querySelector(".modal__body").innerHTML = 
    `
        <div class="modal__confirm">
            <div class="modal__confirm-header">
                <div class="modal__confirm-title">Chú ý</div>
                <i class="uil uil-multiply modal__confirm-close" onclick="closeModal()"></i>
            </div>
            <div class="modal__confirm-desc">
                Bạn có chắc muốn thay đổi tên đăng nhập thành [congdang.vn]? 
                Việc này sẽ thay đổi link dẫn về Shop và bạn chỉ có thể thay đổi tên đăng nhập 
                một lần trong 30 ngày. 
            </div>
            <div class="modal__confirm-btns">
                <div class="modal__confirm-btn-destroy" onclick="closeModal()">Huỷ</div>
                <div class="modal__confirm-btn-send"onclick="changeShopUsername()">Lưu và Đăng nhập lại</div>
            </div>
        </div>
    `;
}

function changeShopUsername() {
    document.querySelector(".admin__setup-shop-table-change-input").value = "congdang.vn";
    closeModal();
    window.location.assign("seller_auth.html");
}

function hideChangeShopUsername() {
    document.querySelector(".admin__setup-shop-table-change").classList.add("hide");
    document.querySelector(".admin__setup-shop-table-col-value-username").classList.remove("hide-on-destop");
    document.querySelector(".admin__setup-shop-table-col-btn-username").classList.remove("hide-on-destop");
}

// Show Propose
function showPropse() {
    document.querySelector(".admin__add-product-table-industry-propose").classList.remove("hide-on-destop");
}

document.querySelectorAll(".admin__add-product-table-industry-propose-item-input").forEach(e => {
    e.addEventListener('change', () => {
        document.querySelector(".admin__add-product-table-industry-input").value = e.parentNode.querySelector(".admin__add-product-table-industry-propose-item-label").innerText;
        document.querySelector(".admin__add-product-table-industry-propose").classList.add("hide-on-destop");
    });
});

// Show Add Product Shop
function showAddProduct(event) {
    console.log(event.target.parentNode.parentNode.parentNode);
    const sideBarItem = event.target.parentNode.parentNode.parentNode;
    sideBarItem.classList.add("active");
    document.querySelector(".admin__container").innerHTML = 
    `
                    <div class="admin__add-product">
                        <div class="admin__add-product-container">
                            <div class="admin__add-product-header">
                                <div class="admin__add-product-header-item active">
                                    Thông tin cơ bản
                                </div>
                                <div class="admin__add-product-header-item">
                                    Thông tin bán hàng  
                                </div>
                                <div class="admin__add-product-header-item">
                                    Vận chuyển
                                </div>
                                <div class="admin__add-product-header-item">
                                    Thông tin khác
                                </div>
                            </div>
                            <div class="admin__setup-shop-body">
                                <div class="admin__setup-shop-container">
                                    <div class="admin__profile-shop-body-header">
                                        <div class="admin__add-product-title">
                                            Thông tin cơ bản 
                                        </div>
                                    </div>
                                    <div class="admin__add-product-table">
                                        <div class="admin__add-product-table-row">
                                            <div class="admin__add-product-table-col-sub">Hình ảnh sản phẩm</div>
                                            <div class="admin__add-product-table-col-value">
                                                <div class="admin__add-product-table-add-img-check">
                                                    <div class="admin__add-product-table-add-img-rb">
                                                        <input type="radio" name="ratio-img" id="" class="admin__add-product-table-add-img-input">
                                                        <label for="admin__add-product-table-add-img" class="admin__add-product-table-add-img-label">Hình ảnh tỉ lệ 1:1</label>
                                                    </div>
                                                    <div class="admin__add-product-table-add-img-rb">
                                                        <input type="radio" name="ratio-img" id="" class="admin__add-product-table-add-img-input">
                                                        <label for="admin__add-product-table-add-img" class="admin__add-product-table-add-img-label">Hình ảnh tỉ lệ 1:1</label>
                                                    </div>
                                                </div>
                                                <div class="admin__add-product-table-add-img-pic">
                                                    <div class="admin__add-product-table-add-img-pic-container">
                                                        <i class="uil uil-image-plus admin__add-product-table-add-img-pic-icon"></i>
                                                        <div class="admin__add-product-table-add-img-pic-sub">
                                                            Thêm hình ảnh (0/9)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row">
                                            <div class="admin__add-product-table-col-sub">Ảnh bìa</div>
                                            <div class="admin__add-product-table-col-value">
                                                <div class="admin__add-product-table-add-img-cover">
                                                    <div class="admin__add-product-table-add-img-pic">
                                                        <div class="admin__add-product-table-add-img-pic-container">
                                                            <i class="uil uil-image-plus admin__add-product-table-add-img-pic-icon"></i>
                                                            <div class="admin__add-product-table-add-img-pic-sub">
                                                                (0/1)
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul class="admin__profile-shop-table-logo-sub">
                                                        <li class="admin__profile-shop-table-logo-sub-text">
                                                            Tải lên hình ảnh 1:1
                                                        </li>
                                                        <li class="admin__profile-shop-table-logo-sub-text">
                                                            Ảnh bìa sẽ hiển thị tại các trang Kết quả tìm kiếm, Gợi ý hôm nay, ...
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row">
                                            <div class="admin__add-product-table-col-sub">Video sản phẩm</div>
                                            <div class="admin__add-product-table-col-value">
                                                <div class="admin__add-product-table-add-img-cover">
                                                    <div class="admin__add-product-table-add-img-pic">
                                                        <div class="admin__add-product-table-add-img-pic-container">
                                                            <i class="uil uil-video admin__add-product-table-add-img-pic-icon"></i>
                                                            <div class="admin__add-product-table-add-img-pic-sub">
                                                                Thêm video
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul class="admin__profile-shop-table-logo-sub">
                                                        <li class="admin__profile-shop-table-logo-sub-text">
                                                            Kích thước tối đa 30Mb, độ phân giải không vượt quá 1280x1280px
                                                        </li>
                                                        <li class="admin__profile-shop-table-logo-sub-text">
                                                            Độ dài 10s-60s
                                                        </li>
                                                        <li class="admin__profile-shop-table-logo-sub-text">
                                                            Định dạng MP4
                                                        </li>
                                                        <li class="admin__profile-shop-table-logo-sub-text">
                                                            Lưu ý: Sản phẩm có thể hiện thị trong video đang được xử lý. Video sẽ tự động hiển thị sau khi đã xử lý thành công
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row">
                                            <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Tên sản phẩm</div>
                                            <div class="admin__add-product-table-col-value">
                                                <input type="text" class="admin__add-product-table-input-name" placeholder="Tên sản phẩm + Thương hiệu + Model + Thông số kỹ thuật" onblur="showPropse()">
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row">
                                            <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Ngành hàng</div>
                                            <div class="admin__add-product-table-col-value">
                                                <div class="admin__add-product-table-industry">
                                                    <div class="admin__add-product-table-industry-container">
                                                        <input type="text" class="admin__add-product-table-industry-input" placeholder="Chọn ngành hàng">
                                                        <i class="uil uil-pen admin__add-product-table-industry-icon"></i>
                                                    </div>
                                                    <div class="admin__add-product-table-industry-propose hide-on-destop">
                                                        <div class="admin__add-product-table-industry-propose-title">Ngành hàng được đề xuất</div>
                                                        <div class="admin__add-product-table-industry-list">
                                                            <div class="admin__add-product-table-industry-propose-item">
                                                                <input type="radio" class="admin__add-product-table-industry-propose-item-input">
                                                                <label for="admin__add-product-table-industry-propose-item-input" class="admin__add-product-table-industry-propose-item-label">Sắc đẹp > Trang điểm mắt </label>
                                                            </div>
                                                            <div class="admin__add-product-table-industry-propose-item">
                                                                <input type="radio" class="admin__add-product-table-industry-propose-item-input">
                                                                <label for="admin__add-product-table-industry-propose-item-input" class="admin__add-product-table-industry-propose-item-label">Sắc đẹp > Kem trị mụn </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row">
                                            <div class="admin__add-product-table-col-sub">Mô tả sản phẩm</div>
                                            <div class="admin__add-product-table-col-value">
                                                <textarea name="" id="" class="admin__add-product-table-desc-textarea"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="admin__add-product-detail">
                                <div class="admin__setup-shop-container">
                                    <div class="admin__profile-shop-body-header">
                                        <div class="admin__add-product-title">
                                            Thông tin chi tiết
                                        </div>
                                    </div>
                                    <div class="admin__add-product-table">
                                        <div class="row">
                                            <div class="admin__add-product-table-row admin__add-product-detail-table-row l-6">
                                                <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Thương hiệu</div>
                                                <div class="admin__add-product-table-col-value">
                                                    <div class="admin__add-product-table-industry-container">
                                                        <input type="text" class="admin__add-product-table-industry-input admin__add-product-detail-table-brand-input" onclick="showSelectBrand()" placeholder="Chọn ngành hàng">
                                                        <div class="admin__add-product-detail-table-brand-symbol">
                                                            <i class="uil uil-angle-down admin__add-product-table-industry-icon"></i>
                                                        </div>
                                                        <div class="admin__add-product-detail-table-brand-select">
                                                            <div class="admin__add-product-detail-table-brand-select-search">
                                                                <div class="admin__add-product-detail-table-brand-select-search-container">
                                                                    <i class="uil uil-search admin__add-product-table-industry-icon"></i>
                                                                    <input type="text" placeholder="Vui lòng nhập tốt thiểu 2 ký tự" class="admin__add-product-detail-table-brand-select-search-input">
                                                                </div>
                                                            </div>
                                                            <div class="admin__add-product-detail-table-brand-select-list">
                                                                <div class="admin__add-product-detail-table-brand-select-item">
                                                                    No Brand
                                                                </div>
                                                                <div class="admin__add-product-detail-table-brand-select-item">
                                                                    Alego
                                                                </div>
                                                                <div class="admin__add-product-detail-table-brand-select-item">
                                                                    Dior
                                                                </div>
                                                                <div class="admin__add-product-detail-table-brand-select-item">
                                                                    Adidas
                                                                </div>
                                                                <div class="admin__add-product-detail-table-brand-select-item">
                                                                    Nike
                                                                </div>
                                                                <div class="admin__add-product-detail-table-brand-select-item">
                                                                    Puma
                                                                </div>
                                                                <div class="admin__add-product-detail-table-brand-select-item">
                                                                    Guici
                                                                </div>
                                                            </div>
                                                            <div class="admin__add-product-detail-table-brand-select-footer">
                                                                Không có trong danh sách? <a href="#" class="admin__add-product-detail-table-brand-select-link">Nhấn vào để thêm thương hiệu của bạn</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="admin__add-product-table-row admin__add-product-detail-table-row l-6">
                                                <div class="admin__add-product-table-col-sub">Nhà sản xuất/Nhà xuất bản</div>
                                                <div class="admin__add-product-table-col-value">
                                                    <div class="admin__add-product-table-industry-container">
                                                        <input type="text" class="admin__add-product-table-industry-input" placeholder="Chọn ngành hàng">
                                                        <i class="uil uil-angle-down admin__add-product-table-industry-icon"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="admin__add-product-table-row admin__add-product-detail-table-row l-6">
                                                <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Ngành hàng</div>
                                                <div class="admin__add-product-table-col-value">
                                                    <div class="admin__add-product-table-industry">
                                                        <div class="admin__add-product-table-industry-container">
                                                            <input type="text" class="admin__add-product-table-industry-input" placeholder="Chọn ngành hàng">
                                                            <i class="uil uil-angle-down admin__add-product-table-industry-icon"></i>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="admin__add-product-sell">
                                <div class="admin__setup-shop-container">
                                    <div class="admin__profile-shop-body-header">
                                        <div class="admin__add-product-title">
                                            Thông tin bán hàng
                                        </div>
                                    </div>
                                    <div class="admin__add-product-table">
                                        <div class="admin__add-product-table-row">
                                            <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Phân loại hàng</div>
                                            <div class="admin__add-product-table-col-value">
                                                <div class="admin__add-product-sell-table-type l-2-4">
                                                    <i class="uil uil-plus admin__add-product-sell-table-type-icon"></i>
                                                    <span class="admin__add-product-sell-table-type-sub">Thêm nhóm phân loại</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row l-5">
                                            <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Giá</div>
                                            <div class="admin__add-product-table-col-value">
                                                <div class="admin__add-product-sell-table-price">
                                                    <div class="admin__add-product-sell-table-price-unit">đ</div>
                                                    <input type="text" class="admin__add-product-sell-table-price-input" placeholder="Nhập vào">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row l-5">
                                            <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Kho hàng</div>
                                            <div class="admin__add-product-table-col-value">
                                                <input type="text" class="admin__add-product-table-input-name" value="0">
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row">
                                            <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Giảm giá</div>
                                            <div class="admin__add-product-table-col-value">
                                                <div class="admin__add-product-sell-table-discount">
                                                    <div class="admin__add-product-sell-table-type l-2-4">
                                                        <i class="uil uil-plus admin__add-product-sell-table-type-icon"></i>
                                                        <span class="admin__add-product-sell-table-type-sub">Thêm khoảng giảm giá</span>
                                                    </div>
                                                    <div class="admin__add-product-sell-table-discount-sub">
                                                        Mua nhiều giảm giá sẽ bị ẩn khi sản phẩm đang tham gia Mua Kèm Deal Sốc hay Combo Khuyến Mãi 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row">
                                            <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Bảng quy đổi kích cỡ</div>
                                            <div class="admin__add-product-table-col-value">
                                                <input type="text" class="admin__add-product-table-input-name" placeholder="Tăng khả năng hiển thị cho sản phẩm với Bảng quy đổi kích cỡ mới">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="admin__add-product-transport">
                                <div class="admin__setup-shop-container">
                                    <div class="admin__profile-shop-body-header">
                                        <div class="admin__add-product-title">
                                            Thông tin vận chuyển
                                        </div>
                                    </div>
                                    <div class="admin__add-product-table">
                                        <div class="admin__add-product-table-row l-5">
                                            <div class="admin__add-product-table-col-sub">Cân nặng (Sau khi đóng gói)</div>
                                            <div class="admin__add-product-table-col-value">
                                                <div class="admin__add-product-sell-table-price">
                                                    <div class="admin__add-product-sell-table-price-unit">gr</div>
                                                    <input type="text" class="admin__add-product-sell-table-price-input" placeholder="Nhập vào">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row l-5">
                                            <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Giá</div>
                                            <div class="admin__add-product-table-col-value">
                                                <div class="admin__add-product-sell-table-price">
                                                    <div class="admin__add-product-sell-table-price-unit">đ</div>
                                                    <input type="text" class="admin__add-product-sell-table-price-input" placeholder="Nhập vào">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row l-5">
                                            <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Kho hàng</div>
                                            <div class="admin__add-product-table-col-value">
                                                <input type="text" class="admin__add-product-table-input-name" value="0">
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row">
                                            <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Giảm giá</div>
                                            <div class="admin__add-product-table-col-value">
                                                <div class="admin__add-product-sell-table-discount">
                                                    <div class="admin__add-product-sell-table-type l-2-4">
                                                        <i class="uil uil-plus admin__add-product-sell-table-type-icon"></i>
                                                        <span class="admin__add-product-sell-table-type-sub">Thêm khoảng giảm giá</span>
                                                    </div>
                                                    <div class="admin__add-product-sell-table-discount-sub">
                                                        Mua nhiều giảm giá sẽ bị ẩn khi sản phẩm đang tham gia Mua Kèm Deal Sốc hay Combo Khuyến Mãi 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__add-product-table-row">
                                            <div class="admin__add-product-table-col-sub admin__add-product-table-col-sub-center">Bảng quy đổi kích cỡ</div>
                                            <div class="admin__add-product-table-col-value">
                                                <input type="text" class="admin__add-product-table-input-name" placeholder="Tăng khả năng hiển thị cho sản phẩm với Bảng quy đổi kích cỡ mới">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="admin__add-product-footer">
                                <div class="admin__add-product-btn">Huỷ</div>
                                <div class="admin__add-product-btn">Lưu & Ẩn</div>
                                <div class="admin__add-product-btn-save-show">Lưu & Hiển thị</div>
                            </div>
                        </div>
                    </div>
    `;

    document.querySelectorAll(".admin__add-product-detail-table-brand-select-item").forEach(e => {
        e.addEventListener('click', () => {
            document.querySelector(".admin__add-product-detail-table-brand-input").value = e.innerText;
            document.querySelector(".admin__add-product-detail-table-brand-select").classList.remove("show");
            document.querySelector(".admin__add-product-detail-table-brand-symbol").classList.remove("rotate");
        });
    });
}

// Show Select Brand
function showSelectBrand() {
    document.querySelector(".admin__add-product-detail-table-brand-select").classList.add("show");
    document.querySelector(".admin__add-product-detail-table-brand-symbol").classList.add("rotate");
}

// Show Profile Shop 
function showProfileShop() {
    document.querySelector(".admin__container").innerHTML = 
    `
                    <div class="admin__setup-profile-shop">
                        <div class="admin__setup-shop">
                            <div class="admin__setup-shop-header">
                                <div class="admin__setup-shop-header-item active">
                                    Thông tin cơ bản
                                </div>
                                <div class="admin__setup-shop-header-item">
                                    Thông tin Thuế   
                                </div>
                                <div class="admin__setup-shop-header-item">
                                    Thông tin Định Danh 
                                </div>
                            </div>
                            <div class="admin__setup-shop-body">
                                <div class="admin__setup-shop-container">
                                    <div class="admin__profile-shop-body-header">
                                        <div class="admin__setup-shop-title">
                                            Thông tin cơ bản 
                                        </div>
                                        <div class="admin__profile-shop-body-header-right">
                                            <div class="admin__profile-shop-body-header-btns">
                                                <div class="admin__setup-shop-table-change-btn-destroy">Xem Shop của tôi</div>
                                                <div class="admin__setup-shop-table-change-btn-destroy" onclick="setupProfileShop()">Chỉnh sửa</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="admin__profile-shop-table">
                                        <div class="admin__profile-shop-table-row">
                                            <div class="admin__profile-shop-table-col-sub admin__profile-shop-table-col-sub-username">Tên Shop</div>
                                            <div class="admin__profile-shop-table-col-value">
                                                <div class="admin__profile-shop-table-username-text">congdang.vn</div>
                                                <div class="admin__profile-shop-table-username hide-on-destop">
                                                    <input type="text" class="admin__profile-shop-table-col-input" readonly value="congdang.vn">
                                                    <div class="admin__profile-shop-table-username-sub">
                                                        Các lần cập nhật tên Shop phải cách nhau tối thiểu 30 ngày. Bạn có thể cập nhật tên Shop sau ngày 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="admin__profile-shop-table-row admin__profile-shop-table-row-center">
                                            <div class="admin__profile-shop-table-col-sub">Logo của Shop</div>
                                            <div class="admin__profile-shop-table-col-value">
                                                <div class="admin__profile-shop-table-logo">
                                                    <div class="admin__profile-shop-table-logo-thumb">
                                                        <img src="./assets/img/no_user.jpg" class="admin__profile-shop-table-logo-img" alt="">
                                                        <div class="admin__profile-shop-table-logo-pic hide-on-destop">Sửa</div>
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
                                        </div>
                                        <div class="admin__profile-shop-table-row">
                                            <div class="admin__profile-shop-table-col-sub">Mô tả Shop</div>
                                            <div class="admin__profile-shop-table-col-value">
                                                <textarea name="" class="admin__profile-shop-table-textarea hide-on-destop" id=""></textarea>
                                            </div>
                                        </div>
                                        <div class="admin__profile-shop-table-row">
                                            <div class="admin__profile-shop-table-col-sub"></div>
                                            <div class="admin__profile-shop-table-change-btns hide-on-destop">
                                                <div class="admin__setup-shop-table-change-btns">
                                                    <div class="admin__setup-shop-table-change-btn-save">
                                                        <div class="admin__profile-shop-table-change-btn-save" onclick="saveProfileShop()">
                                                            <span class="spinner-btn hide-on-destop"></span>
                                                            Lưu
                                                        </div>
                                                    </div>
                                                    <div class="admin__setup-shop-table-change-btn-destroy">
                                                        <div class="admin__profile-shop-table-change-btn-save">
                                                            <span class="spinner-btn hide-on-destop"></span>
                                                            Huỷ
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `;
}

// Open Waiting Pickup
function showWaitingPickup() {
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
                                                    <div class="admin__order-table-header-col">Thao tác</div>
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
                                                        <a href="javascript:openPickUpModal()" class="admin__order-table-body-col-link">Chuẩn bị hàng</a>
                                                    </div>
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
                                                        <a href="#" class="admin__order-table-body-col-link">Chuẩn bị hàng</a>
                                                    </div>
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
                                                        <a href="#" class="admin__order-table-body-col-link">Chuẩn bị hàng</a>
                                                    </div>
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
                                                        <a href="#" class="admin__order-table-body-col-link">Chuẩn bị hàng</a>
                                                    </div>
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

// Pich Up
function openPickUpModal() {
    openModal();
    document.querySelector(".modal__body").innerHTML = 
    `
            <div class="transport-form">
                <div class="transport-form__header">
                    <div class="transport-form__header-title">Giao đơn hàng</div>
                </div>
                <div class="transport-form__body">
                    <div class="transport-form__body-header">
                        <div class="transport-form__body-title">
                            Mã đơn hàng: ĐH01
                        </div>
                    </div>
                    <div class="transport-form__body-list">
                        <div class="transport-form__body-item active">
                            <div class="transport-form__body-item-left">
                                <div class="transport-form__body-item-name">
                                    <div class="transport-form__body-item-type">Tôi sẽ tự mang hàng tới bưu cục</div>
                                </div>
                                <div class="transport-form__body-item-time">
                                    <div class="transport-form__body-item-time-text">
                                        Bạn có thể gửi đơn hàng tại bất kỳ bưu cục BEST Express nào thuộc cùng Tỉnh/Thành phố
                                    </div>
                                </div>
                            </div>
                            <div class="transport-form__body-item-right">
                                <i class="uil uil-check"></i>
                            </div>
                        </div>
                        <div class="transport-form__body-item">
                            <div class="transport-form__body-item-left">
                                <div class="transport-form__body-item-name">
                                    <div class="transport-form__body-item-type">Đơn vị vận chuyển đến lấy hàng</div>
                                </div>
                                <div class="transport-form__body-item-time">
                                    <div class="transport-form__body-item-time-text">
                                        BEST Express sẽ đến lấy hàng theo địa chỉ lấy hàng mà bạn đã xác nhận 
                                    </div>
                                </div>
                            </div>
                            <div class="transport-form__body-item-right">
                                <i class="uil uil-check"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="transport-form__footer">
                    <div class="transport-form__btn btn" onclick="closeModal()">TRỞ LẠI</div>
                    <div class="transport-form__btn btn btn--primary" onclick="openPickupAddressModal()">XÁC NHẬN</div>
                </div>
            </div>
    `;
}

function openPickupAddressModal() {
    document.querySelector(".modal__body").innerHTML = 
    `
            <div class="transport-form">
                <div class="transport-form__header">
                    <div class="transport-form__header-title">Giao đơn hàng</div>
                </div>
                <div class="transport-form__body">
                    <div class="transport-form__body-header">
                        <div class="transport-form__body-title">
                            Đơn vị vận chuyển
                        </div>
                        <div class="transport-form__header-sub">
                            BEST Express
                        </div>
                    </div>
                    <div class="waiting-form__body">
                        <div class="checkout__label">
                            <div class="checkout__label-box"></div>
                        </div>
                        <div class="checkout__address">
                            <div class="checkout__address-title">
                                <i class="uil uil-map-marker checkout__address-title-icon"></i>
                                <span>Địa lấy hàng</span>
                            </div>
                            <div class="checkout__address-desc">
                                <div class="waiting-form__seller-info">
                                    <div class="checkout__address-desc-name">Đặng Văn Công</div>
                                    <div class="checkout__address-desc-phone">(+84) 347797502</div>
                                    <div class="waiting-form__seller-info-pickup">Đến lấy hàng</div>
                                    <div class="waiting-form__seller-info-return">Trả hàng</div>
                                    <a href="javascript:openAddressModal()" class="checkout__address-desc-change">Thay đổi</a>
                                </div>
                                <div class="checkout__address-desc-direction">Số 20, Ngõ 259 Định Công, Phường Định Công, Quận Hoàng Mai, Hà Nội</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="transport-form__footer">
                    <div class="transport-form__btn btn" onclick="closeModal()">TRỞ LẠI</div>
                    <div class="transport-form__btn btn btn--primary">XÁC NHẬN</div>
                </div>
            </div>
    `;
}

// Update Product
function openUpdateProduct() {
    openModal();
    document.querySelector(".modal__body").innerHTML = 
    `
            <div class="address-form">
                <div class="address-form__new">
                    <div class="admin-account__update-title">
                        Cập nhật sản phẩm
                    </div>
                    <div class="address-form__new-body">
                        <div class="admin-account__update-form">
                            <div class="admin-account__update-div">
                                <label for="" class="admin-account__update-label">Hình ảnh sản phẩm</label>
                                <div class="admin__add-product-table-col-value">
                                    <div class="admin__add-product-table-add-img-check">
                                        <div class="admin__add-product-table-add-img-rb">
                                            <input type="radio" name="ratio-img" id="" class="admin__add-product-table-add-img-input">
                                            <label for="admin__add-product-table-add-img" class="admin__add-product-table-add-img-label">Hình ảnh tỉ lệ 1:1</label>
                                        </div>
                                        <div class="admin__add-product-table-add-img-rb">
                                            <input type="radio" name="ratio-img" id="" class="admin__add-product-table-add-img-input">
                                            <label for="admin__add-product-table-add-img" class="admin__add-product-table-add-img-label">Hình ảnh tỉ lệ 3:4</label>
                                        </div>
                                    </div>
                                    <div class="admin__update-product-pic">
                                        <img src="./assets/img/tai_nghe_5.jpg" class="admin__update-product-pic-value" alt="">
                                        <div class="admin__add-product-table-add-img-pic">
                                            <div class="admin__add-product-table-add-img-pic-container">
                                                <i class="uil uil-image-plus admin__add-product-table-add-img-pic-icon"></i>
                                                <div class="admin__add-product-table-add-img-pic-sub">
                                                    Cập nhật hình ảnh (0/9)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="admin-account__update-div">
                                <label for="" class="admin-account__update-label">Tên sản phẩm</label>
                                <input type="text" class="admin__add-product-table-input-name" placeholder="Tên sản phẩm + Thương hiệu + Model + Thông số kỹ thuật" onblur="showPropse()">
                            </div>
                            <div class="admin-account__update-div">
                                <label for="" class="admin-account__update-label">Ngành hàng</label>
                                <div class="admin__add-product-table-industry">
                                    <div class="admin__add-product-table-industry-container">
                                        <input type="text" class="admin__add-product-table-industry-input" placeholder="Chọn ngành hàng">
                                        <i class="uil uil-pen admin__add-product-table-industry-icon"></i>
                                    </div>
                                    <div class="admin__add-product-table-industry-propose">
                                        <div class="admin__add-product-table-industry-propose-title">Ngành hàng được đề xuất</div>
                                        <div class="admin__add-product-table-industry-list">
                                            <div class="admin__add-product-table-industry-propose-item">
                                                <input type="radio" class="admin__add-product-table-industry-propose-item-input">
                                                <label for="admin__add-product-table-industry-propose-item-input" class="admin__add-product-table-industry-propose-item-label">Sắc đẹp &gt; Trang điểm mắt </label>
                                            </div>
                                            <div class="admin__add-product-table-industry-propose-item">
                                                <input type="radio" class="admin__add-product-table-industry-propose-item-input">
                                                <label for="admin__add-product-table-industry-propose-item-input" class="admin__add-product-table-industry-propose-item-label">Sắc đẹp &gt; Kem trị mụn </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="admin-account__update-div">
                                <label for="" class="admin-account__update-label">Mô tả sản phẩm</label>
                                <textarea name="" id="" class="admin__add-product-table-desc-textarea"></textarea>
                            </div>
                            <div class="admin-account__update-div">
                                <label for="" class="admin-account__update-label">Giá</label>
                                <div class="admin__add-product-sell-table-price">
                                    <div class="admin__add-product-sell-table-price-unit">đ</div>
                                    <input type="text" class="admin__add-product-sell-table-price-input" placeholder="Nhập vào">
                                </div>
                            </div>
                            <div class="admin-account__update-div">
                                <label for="" class="admin-account__update-label">Giảm giá (Nếu có)</label>
                                <div class="admin__add-product-sell-table-discount">
                                    <div class="admin__add-product-sell-table-type l-6">
                                        <i class="uil uil-plus admin__add-product-sell-table-type-icon"></i>
                                        <span class="admin__add-product-sell-table-type-sub">Thêm khoảng giảm giá</span>
                                    </div>
                                    <div class="admin__add-product-sell-table-discount-sub">
                                        Mua nhiều giảm giá sẽ bị ẩn khi sản phẩm đang tham gia Mua Kèm Deal Sốc hay Combo Khuyến Mãi 
                                    </div>
                                </div>
                            </div>
                            <div class="admin-account__update-div">
                                <label for="" class="admin-account__update-label">Vận chuyển</label>
                                <div class="admin__add-product-table-industry-container">
                                    <input type="text" class="admin__add-product-table-industry-input" placeholder="Chọn ngành hàng">
                                    <i class="uil uil-pen admin__add-product-table-industry-icon"></i>
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
}

// Send btn
function changeSendBtn(input) {
    if (input.value != "") {
        document.querySelector(".admin__chat-msg-footer-reply-send").classList.remove("hide-on-destop");
    } else {
        document.querySelector(".admin__chat-msg-footer-reply-send").classList.add("hide-on-destop");
    }
}

// Upload Image
function uploadImage() {
    let profilePic = document.querySelector(".admin__update-product-pic-value");
    let inputFile = document.getElementById("input-file");
    console.log(inputFile.files[0].name);
    profilePic.src = URL.createObjectURL(inputFile.files[0])
}

function showUpdateIndustry() {
    document.querySelector(".admin__update-product-industry-propose").classList.toggle("show");
}

function showUpdateProductDiscount() {
    document.querySelector(".admin__update-product-discount-choose").classList.toggle("show");
}