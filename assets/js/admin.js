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
                <i class="uil uil-multiply modal__confirm-close"></i>
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