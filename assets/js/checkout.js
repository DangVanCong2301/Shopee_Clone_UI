const modal = document.querySelector(".modal");

const mainForm = document.querySelector(".address-form__container");
const updateAddressForm = document.querySelector(".address-form__update");
const newAddressForm = document.querySelector(".address-form__new");

let cities = [
    {
        PK_iCityID: 1,
        sCityName: "Hà Nội"
    },
    {
        PK_iCityID: 2,
        sCityName: "Nam Định"
    }
]

let districts = [
    {
        PK_iDistrictID: 1,
        FK_iCityID: 1,
        sDistrictName: "Quận Hoàng Mai",
        sCityName: "Hà Nội"
    },
    {
        PK_iDistrictID: 2,
        FK_iCityID: 1,
        sDistrictName: "Quận Thanh Xuân",
        sCityName: "Hà Nội"
    },
    {
        PK_iDistrictID: 3,
        FK_iCityID: 1,
        sDistrictName: "Quận Hai Bà Trưng",
        sCityName: "Hà Nội"
    },
    {
        PK_iDistrictID: 4,
        FK_iCityID: 2,
        sDistrictName: "Huyện Hải Hậu",
        sCityName: "Nam Định"
    },
    {
        PK_iDistrictID: 5,
        FK_iCityID: 2,
        sDistrictName: "Huyện Xuân Trường",
        sCityName: "Nam Định"
    }
]

let streets = [
    {
        PK_iStreetID: 1,
        FK_iDistrictID: 1,
        sStreetName: "Phố Định Công",
        sDistrictName: "Quận Hoàng Mai",
        sCityName: "Hà Nội"
    },
    {
        PK_iStreetID: 2,
        FK_iDistrictID: 1,
        sStreetName: "Phố Trần Nguyên Đán",
        sDistrictName: "Quận Hoàng Mai",
        sCityName: "Hà Nội"
    },
    {
        PK_iStreetID: 3,
        FK_iDistrictID: 3,
        sStreetName: "Phố Lê Thanh Nghị",
        sDistrictName: "Quận Hai Bà Trưng",
        sCityName: "Hà Nội"
    },
    {
        PK_iStreetID: 4,
        FK_iDistrictID: 5,
        sStreetName: "Xã Xuân Phú",
        sDistrictName: "Huyện Xuân Trường",
        sCityName: "Nam Định"
    }
]

function getAPICheckout() {
    if (getCookies("userID") == null) {
        document.querySelector(".checkout__address-desc").classList.add("hide");
        modal.classList.add('open');
        openNewAddressForm();
    }
}
getAPICheckout();

function setDataAddressUpdateChoose() {
    let htmlCities = "";
    for (let i = 0 ; i < cities.length; i++) {
        htmlCities += " <li class='address-form__update-choose-detail-city-item' onclick='chooseCityUpdate(" + cities[i].PK_iCityID + ")'>";
        htmlCities += "" + cities[i].sCityName + "";
        htmlCities += " </li>";
    }
    document.querySelector(".address-form__update-choose-detail-city-list").innerHTML = htmlCities;
}

function setDataAddressNewChoose() {
    let htmlCities = "";
    for (let i = 0 ; i < cities.length; i++) {
        htmlCities += " <li class='address-form__new-choose-detail-city-item' onclick='chooseCityNew(" + cities[i].PK_iCityID + ")'>";
        htmlCities += "" + cities[i].sCityName + "";
        htmlCities += " </li>";
    }
    document.querySelector(".address-form__new-choose-detail-city-list").innerHTML = htmlCities;
}

function chooseCityUpdate(PK_iCityID) {
    var city = cities.find((obj) => {
        return obj.PK_iCityID === PK_iCityID;
    });

    let htmlDistricts = "";
    for (let i = 0; i < districts.length; i++) {
        if (districts[i].FK_iCityID == PK_iCityID) {
            addAddressUpdateChooseDistrictList();
            htmlDistricts +=
                `
                    <li class="address-form__new-choose-detail-district-item" onclick="chooseDistrictUpdate(${districts[i].PK_iDistrictID})">
                        ${districts[i].sDistrictName}
                    </li>
                `;
        }
    }
    document.querySelector(".address-form__update-choose-detail-district-list").innerHTML = htmlDistricts;
    document.querySelector(".address-form__update-label-choose").style.display = 'none';
    document.querySelector(".address-form__update-input-choose").value = city.sCityName;
}

function chooseCityNew(PK_iCityID) {
    var city = cities.find((obj) => {
        return obj.PK_iCityID === PK_iCityID;
    });

    let htmlDistricts = "";
    for (let i = 0; i < districts.length; i++) {
        if (districts[i].FK_iCityID == PK_iCityID) {
            addAddressNewChooseDistrictList();
            htmlDistricts +=
                `
                    <li class="address-form__new-choose-detail-district-item" onclick="chooseDistrictNew(${districts[i].PK_iDistrictID})">
                        ${districts[i].sDistrictName}
                    </li>
                `;
        }
    }
    document.querySelector(".address-form__new-choose-detail-district-list").innerHTML = htmlDistricts;
    document.querySelector(".address-form__new-label-choose").style.display = 'none';
    document.querySelector(".address-form__new-input-choose").value = city.sCityName;
}

function chooseDistrictUpdate(PK_iDistrictID) {
    var district = districts.find((obj) => {
        return obj.PK_iDistrictID === PK_iDistrictID;
    });

    let htmlStreets = "";
    for (let i = 0; i < streets.length; i++) {
        if (streets[i].FK_iDistrictID == PK_iDistrictID) {
            addAddressUpdateChooseStreetList();
            htmlStreets += 
            `
                <li class="address-form__update-choose-detail-street-item" onclick="chooseStreetUpdate(${streets[i].PK_iStreetID})">
                    ${streets[i].sStreetName}
                </li>
            `;
        }
    }
    document.querySelector(".address-form__update-choose-detail-street-list").innerHTML = htmlStreets;
    document.querySelector(".address-form__update-input-choose").value = district.sCityName + ", " + district.sDistrictName;
    changeTitleAddressUpdateChoose();
}

function chooseDistrictNew(PK_iDistrictID) {
    var district = districts.find((obj) => {
        return obj.PK_iDistrictID === PK_iDistrictID;
    });

    let htmlStreets = "";
    for (let i = 0; i < streets.length; i++) {
        if (streets[i].FK_iDistrictID == PK_iDistrictID) {
            addAddressNewChooseStreetList();
            htmlStreets += 
            `
                <li class="address-form__new-choose-detail-street-item" onclick="chooseStreetNew(${streets[i].PK_iStreetID})">
                    ${streets[i].sStreetName}
                </li>
            `;
        }
    }
    document.querySelector(".address-form__new-choose-detail-street-list").innerHTML = htmlStreets;
    document.querySelector(".address-form__new-input-choose").value = district.sCityName + ", " + district.sDistrictName;
    changeTitleAddressNewChoose();
}

function chooseStreetUpdate(PK_iStreetID) {
    var street = streets.find((obj) => {
        return obj.PK_iStreetID === PK_iStreetID;
    });
    document.querySelector(".address-form__update-choose").classList.remove("show");
    document.querySelector(".address-form__update-input-choose").value = street.sStreetName + ", " + street.sDistrictName + ", " + street.sCityName ;
}

function chooseStreetNew(PK_iStreetID) {
    var street = streets.find((obj) => {
        return obj.PK_iStreetID === PK_iStreetID;
    });
    document.querySelector(".address-form__new-choose").classList.remove("show");
    document.querySelector(".address-form__new-input-choose").value = street.sStreetName + ", " + street.sDistrictName + ", " + street.sCityName ;
}

function changeTitleAddressUpdateChoose() {
    const addressUpdateChooseTitle = document.querySelectorAll(".address-form__update-choose-detail-title");
    for (let i = 0; i < addressUpdateChooseTitle.length; i++) {
        addressUpdateChooseTitle[i].addEventListener('click', () => {
            if (i == 0) {
                addAddressUpdateChooseCityList();
            } else if (i == 1) {
                addAddressUpdateChooseDistrictList();
            } else if (i == 2) {
                addAddressUpdateChooseStreetList()
            } else {
                addAddressUpdateChooseCityList();
            }
        })
    }
}

function changeTitleAddressNewChoose() {
    const addressNewChooseTitle = document.querySelectorAll(".address-form__new-choose-detail-title");
    for (let i = 0; i < addressNewChooseTitle.length; i++) {
        addressNewChooseTitle[i].addEventListener('click', () => {
            if (i == 0) {
                addAddressNewChooseCityList();
            } else if (i == 1) {
                addAddressNewChooseDistrictList();
            } else if (i == 2) {
                addAddressNewChooseStreetList()
            } else {
                addAddressNewChooseCityList();
            }
        })
    }
}

function openAddressModal() {
    if (document.querySelector(".spinner") != null) {
        document.querySelector(".spinner").classList.add("hide");
    }
    modal.classList.add('open');
    backMainForm();
}

function closeAddressModal() {
    modal.classList.remove('open')
}

function addAddressUpdateChooseCityList() {
    const addressUpdateChooseTitle = document.querySelectorAll(".address-form__update-choose-detail-title");
    const addressUpdateChooseCityList = document.querySelector(".address-form__update-choose-detail-city");
    const addressUpdateChooseDistrictList = document.querySelector(".address-form__update-choose-detail-district");
    const addressUpdateChooseStreetList = document.querySelector(".address-form__update-choose-detail-street");

    addressUpdateChooseTitle[0].classList.add("active");
    addressUpdateChooseTitle[1].classList.remove("active");
    addressUpdateChooseTitle[2].classList.remove("active");
    addressUpdateChooseCityList.classList.remove("hide");
    addressUpdateChooseDistrictList.classList.add("hide");
    addressUpdateChooseStreetList.classList.add("hide");
}

function addAddressNewChooseCityList() {
    const addressNewChooseTitle = document.querySelectorAll(".address-form__new-choose-detail-title");
    const addressNewChooseCityList = document.querySelector(".address-form__new-choose-detail-city");
    const addressNewChooseDistrictList = document.querySelector(".address-form__new-choose-detail-district");
    const addressNewChooseStreetList = document.querySelector(".address-form__new-choose-detail-street");

    addressNewChooseTitle[0].classList.add("active");
    addressNewChooseTitle[1].classList.remove("active");
    addressNewChooseTitle[2].classList.remove("active");
    addressNewChooseCityList.classList.remove("hide");
    addressNewChooseDistrictList.classList.add("hide");
    addressNewChooseStreetList.classList.add("hide");
}

function addAddressUpdateChooseDistrictList() {
    const addressUpdateChooseTitle = document.querySelectorAll(".address-form__update-choose-detail-title");
    const addressUpdateChooseCityList = document.querySelector(".address-form__update-choose-detail-city");
    const addressUpdateChooseDistrictList = document.querySelector(".address-form__update-choose-detail-district");
    const addressUpdateChooseStreetList = document.querySelector(".address-form__update-choose-detail-street");

    addressUpdateChooseTitle[1].classList.add("active");
    addressUpdateChooseTitle[0].classList.remove("active");
    addressUpdateChooseTitle[2].classList.remove("active");
    addressUpdateChooseCityList.classList.add("hide");
    addressUpdateChooseDistrictList.classList.remove("hide");
    addressUpdateChooseStreetList.classList.add("hide")
}

function addAddressNewChooseDistrictList() {
    const addressNewChooseTitle = document.querySelectorAll(".address-form__new-choose-detail-title");
    const addressNewChooseCityList = document.querySelector(".address-form__new-choose-detail-city");
    const addressNewChooseDistrictList = document.querySelector(".address-form__new-choose-detail-district");
    const addressNewChooseStreetList = document.querySelector(".address-form__new-choose-detail-street");

    addressNewChooseTitle[1].classList.add("active");
    addressNewChooseTitle[0].classList.remove("active");
    addressNewChooseTitle[2].classList.remove("active");
    addressNewChooseCityList.classList.add("hide");
    addressNewChooseDistrictList.classList.remove("hide");
    addressNewChooseStreetList.classList.add("hide")
}

function addAddressUpdateChooseStreetList() {
    const addressUpdateChooseTitle = document.querySelectorAll(".address-form__update-choose-detail-title");
    const addressUpdateChooseCityList = document.querySelector(".address-form__update-choose-detail-city");
    const addressUpdateChooseDistrictList = document.querySelector(".address-form__update-choose-detail-district");
    const addressUpdateChooseStreetList = document.querySelector(".address-form__update-choose-detail-street");

    addressUpdateChooseTitle[2].classList.add("active");
    addressUpdateChooseTitle[0].classList.remove("active");
    addressUpdateChooseTitle[1].classList.remove("active");
    addressUpdateChooseCityList.classList.add("hide");
    addressUpdateChooseDistrictList.classList.add("hide");
    addressUpdateChooseStreetList.classList.remove("hide");
}

function addAddressNewChooseStreetList() {
    const addressNewChooseTitle = document.querySelectorAll(".address-form__new-choose-detail-title");
    const addressNewChooseCityList = document.querySelector(".address-form__new-choose-detail-city");
    const addressNewChooseDistrictList = document.querySelector(".address-form__new-choose-detail-district");
    const addressNewChooseStreetList = document.querySelector(".address-form__new-choose-detail-street");

    addressNewChooseTitle[2].classList.add("active");
    addressNewChooseTitle[0].classList.remove("active");
    addressNewChooseTitle[1].classList.remove("active");
    addressNewChooseCityList.classList.add("hide");
    addressNewChooseDistrictList.classList.add("hide");
    addressNewChooseStreetList.classList.remove("hide");
}

function showAddressUpdateChoose() {
    document.querySelector(".address-form__update-choose").classList.toggle("show");
}

function showAddressNewChoose() {
    document.querySelector(".address-form__new-choose").classList.toggle("show");
}

function openUpdate() {
    if (mainForm != null && newAddressForm != null) {
        mainForm.classList.add("hide");
        newAddressForm.classList.add("hide");
    }
    document.querySelector(".modal__body").innerHTML = 
    `
            <div class="address-form">
                <div class="address-form__update">
                    <div class="address-form__update-title">Câp nhật địa chỉ</div>
                    <div class="address-form__update-body">
                        <div class="address-form__update-div">
                            <div class="address-form__update-box">
                                <div class="address-form__update-box-left">
                                    <input type="text" class="address-form__update-input">
                                    <label for="" class="address-form__update-label">Họ và tên</label>
                                </div>
                                <div class="address-form__update-box-left">
                                    <input type="text" class="address-form__update-input address-form__update-input-phone">
                                    <div class="address-form__update-input-phone-suggest">
                                        (+84) 347797502 <button>Sử dụng</button>
                                    </div>
                                    <label for="" class="address-form__update-label">Số điện thoại</label>
                                </div>
                            </div>
                        </div>
                        <div class="address-form__update-div">
                            <input type="text" class="address-form__update-input address-form__update-input-choose" onclick="showAddressUpdateChoose()">
                            <div class="address-form__update-choose">
                                <div class="address-form__update-choose-detail">
                                    <div class="address-form__update-choose-detail-header">
                                        <div class="address-form__update-choose-detail-title active">Tỉnh/Thành phố</div>
                                        <div class="address-form__update-choose-detail-title">Quận/Huyện</div>
                                        <div class="address-form__update-choose-detail-title">Phường/Xã</div>
                                    </div>
                                    <div class="address-form__update-choose-detail-body">
                                        <div class="address-form__update-choose-detail-city">
                                            <ul class="address-form__update-choose-detail-city-list">
                                                
                                            </ul>
                                        </div>
                                        <div class="address-form__update-choose-detail-district hide">
                                            <ul class="address-form__update-choose-detail-district-list">
                                                
                                            </ul>
                                        </div>
                                        <div class="address-form__update-choose-detail-street hide">
                                            <ul class="address-form__update-choose-detail-street-list">
                                                <li class="address-form__update-choose-detail-street-item">
                                                    Định Công
                                                </li>
                                                <li class="address-form__update-choose-detail-street-item">
                                                    Trần Đại Nghĩa
                                                </li>
                                                <li class="address-form__update-choose-detail-street-item">
                                                    Định Công
                                                </li>
                                                <li class="address-form__update-choose-detail-street-item">
                                                    Trần Đại Nghĩa
                                                </li>
                                                <li class="address-form__update-choose-detail-street-item">
                                                    Định Công
                                                </li>
                                                <li class="address-form__update-choose-detail-street-item">
                                                    Trần Đại Nghĩa
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <i class="uil uil-angle-down address-form__update-div-icon"></i>
                            <label for="" class="address-form__update-label address-form__update-label-choose">Tỉnh/Thành phố, Quận/Huyện, Phường/Xã</label>
                        </div>
                        <div class="address-form__update-div">
                            <textarea name="" id="" class="address-form__update-textarea"></textarea>
                            <label for="" class="address-form__update-label">Địa chỉ cụ thể</label>
                        </div>
                        <div class="address-form__update-please">
                            <i class="uil uil-bell address-form__update-please-icon"></i>
                            <div class="address-form__update-please-desc">
                                <div class="address-form__update-please-desc-title">Vui lòng ghim địa chỉ chính xác</div>
                                <div class="address-form__update-please-desc-subtitle">Hãy chắc chắn vị trí trên bản đồ được ghim đúng để
                                    Shopee gửi hàng cho bạn nhé!</div>
                            </div>
                        </div>
                        <div class="address-form__update-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.0349263999647!2d105.52882531470965!3d9.76310899301383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x746941d0e6aacf0!2zOcKwNDUnNDcuMiJOIDEwNcKwMzEnNTEuNyJF!5e0!3m2!1svi!2s!4v1659586535479!5m2!1svi!2s"
                                width="100%" height="120px"></iframe>
                        </div>
                        <div class="address-form__update-type">
                            <div class="address-form__update-type-title">Loại địa chỉ:</div>
                            <div class="address-form__update-type-btns">
                                <button class="address-form__update-type-btn">Nhà riêng</button>
                                <button class="address-form__update-type-btn">Văn phòng</button>
                            </div>
                        </div>
                        <div class="address-form__update-set-default">
                            <input type="checkbox" class="address-form__update-set-default-input">
                            <label for="">Đặt làm mặc định</label>
                        </div>
                    </div>
                    <div class="address-form__update-footer">
                        <div class="address-form__update-footer-btns">
                            <button type="button" onclick="backMainForm()" class="btn">Trở lại</button>
                            <button class="btn btn--primary">Hoàn thành</button>
                        </div>
                    </div>
                </div>
            </div>
    `;
    setDataAddressUpdateChoose();
}

function backMainForm() {
    if (updateAddressForm != null && newAddressForm != null) {
        updateAddressForm.classList.add("hide");
        newAddressForm.classList.add("hide");
    }
    document.querySelector(".modal__body").innerHTML = 
    `
            <div class="address-form">
                <div class="address-form__container">
                    <div class="address-form__title">Địa chỉ của tôi</div>
                    <div class="address-form__body">
                        <ul class="address-form__list">
                            <li class="address-form__item">
                                <div class="address-form__item-box">
                                    <input type="radio" name="address" class="address-form__item-input">
                                </div>
                                <div class="address-form__item-content">
                                    <div class="address-form__item-header">
                                        <div class="address-form__item-header-info">
                                            <div class="address-form__item-name">Đặng Văn Công</div>
                                            <div class="address-form__item-phone">(+84) 347797502</div>
                                        </div>
                                        <a href="javascript:openUpdate()" class="address-form__item-update">Cập nhật</a>
                                    </div>
                                    <div class="address-form__item-body">
                                        <div class="address-form__item-body-row">Số 20, Ngõ 259 Định Công, Phường Định Công</div>
                                        <div class="address-form__item-body-row">Quận Hoàng Mai, Hà Nội</div>
                                    </div>
                                    <button class="address-form__item-sub">Mặc định</button>
                                </div>
                            </li>
                            <li class="address-form__item">
                                <div class="address-form__item-box">
                                    <input type="radio" name="address" class="address-form__item-input">
                                </div>
                                <div class="address-form__item-content">
                                    <div class="address-form__item-header">
                                        <div class="address-form__item-header-info">
                                            <div class="address-form__item-name">Đặng Văn Công</div>
                                            <div class="address-form__item-phone">(+84) 347797502</div>
                                        </div>
                                        <a href="" class="address-form__item-update">Cập nhật</a>
                                    </div>
                                    <div class="address-form__item-body">
                                        <div class="address-form__item-body-row">Số 20, Ngõ 259 Định Công, Phường Định Công</div>
                                        <div class="address-form__item-body-row">Quận Hoàng Mai, Hà Nội</div>
                                    </div>
                                    <button class="address-form__item-sub">Mặc định</button>
                                </div>
                            </li>
                        </ul>
                        <button class="address-form__add-btn" onclick="openNewAddressForm()">
                            <i class="uil uil-plus address-form__add-btn-icon"></i>
                            <span>Thêm địa chỉ mới</span>
                        </button>
                    </div>
                    <div class="address-form__footer">
                        <button class="btn address-form__btn-destroy" onclick="closeAddressModal()">Huỷ</button>
                        <button class="btn btn--primary">Xác nhận</button>
                    </div>
                </div>
            </div>
    `;
}

function openNewAddressForm() {
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
                            <button class="btn" onclick="backMainForm()">Trở lại</button>
                            <button class="btn btn--primary address-form__new-btn">Hoàn thành</button>
                        </div>
                    </div>
                </div>
            </div>
    `;
    setDataAddressNewChoose();
    addEvent();
}

// Set 1 cookie (Nguồn: https://www.tabnine.com/academy/javascript/how-to-set-cookies-javascript/)
let userID = 1;

function setCookie(userID, value, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = userID + "=" + value + ";" + expires + ";path=/";
}
//setCookie("userID", 1, 30);

function getCookies(userID) {
    const id = userID + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const arr = cDecoded.split(";");
    let res; 
    arr.forEach(val => {
        if (val.indexOf(id) === 0) res = val.substring(id.length);
    });
    return res;
}
console.log(getCookies("userID")); 

// delete cookie
//document.cookie = "userID=;expires=2024-07-11T01:45:13.000Z;path=/"