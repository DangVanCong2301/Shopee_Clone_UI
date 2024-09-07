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