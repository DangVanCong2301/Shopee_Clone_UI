const modal = document.querySelector(".modal");

const addressUpdateChooseTitle = document.querySelectorAll(".address-form__update-choose-detail-title");
const addressUpdateChooseCityList = document.querySelector(".address-form__update-choose-detail-city");
const addressUpdateChooseDistrictList = document.querySelector(".address-form__update-choose-detail-district");
const addressUpdateChooseStreetList = document.querySelector(".address-form__update-choose-detail-street");

const addressNewChooseTitle = document.querySelectorAll(".address-form__new-choose-detail-title");
const addressNewChooseCityList = document.querySelector(".address-form__new-choose-detail-city");
const addressNewChooseDistrictList = document.querySelector(".address-form__new-choose-detail-district");
const addressNewChooseStreetList = document.querySelector(".address-form__new-choose-detail-street");

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

    setDataAddressUpdateChoose();

    setDataAddressNewChoose();
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
    modal.classList.add('open')
}

function closeAddressModal() {
    modal.classList.remove('open')
}

function addAddressUpdateChooseCityList() {
    addressUpdateChooseTitle[0].classList.add("active");
    addressUpdateChooseTitle[1].classList.remove("active");
    addressUpdateChooseTitle[2].classList.remove("active");
    addressUpdateChooseCityList.classList.remove("hide");
    addressUpdateChooseDistrictList.classList.add("hide");
    addressUpdateChooseStreetList.classList.add("hide");
}

function addAddressNewChooseCityList() {
    addressNewChooseTitle[0].classList.add("active");
    addressNewChooseTitle[1].classList.remove("active");
    addressNewChooseTitle[2].classList.remove("active");
    addressNewChooseCityList.classList.remove("hide");
    addressNewChooseDistrictList.classList.add("hide");
    addressNewChooseStreetList.classList.add("hide");
}

function addAddressUpdateChooseDistrictList() {
    addressUpdateChooseTitle[1].classList.add("active");
    addressUpdateChooseTitle[0].classList.remove("active");
    addressUpdateChooseTitle[2].classList.remove("active");
    addressUpdateChooseCityList.classList.add("hide");
    addressUpdateChooseDistrictList.classList.remove("hide");
    addressUpdateChooseStreetList.classList.add("hide")
}

function addAddressNewChooseDistrictList() {
    addressNewChooseTitle[1].classList.add("active");
    addressNewChooseTitle[0].classList.remove("active");
    addressNewChooseTitle[2].classList.remove("active");
    addressNewChooseCityList.classList.add("hide");
    addressNewChooseDistrictList.classList.remove("hide");
    addressNewChooseStreetList.classList.add("hide")
}

function addAddressUpdateChooseStreetList() {
    addressUpdateChooseTitle[2].classList.add("active");
    addressUpdateChooseTitle[0].classList.remove("active");
    addressUpdateChooseTitle[1].classList.remove("active");
    addressUpdateChooseCityList.classList.add("hide");
    addressUpdateChooseDistrictList.classList.add("hide");
    addressUpdateChooseStreetList.classList.remove("hide");
}

function addAddressNewChooseStreetList() {
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
    mainForm.classList.add("hide");
    updateAddressForm.classList.remove("hide");
    newAddressForm.classList.add("hide");
}

function backMainForm() {
    mainForm.classList.remove("hide");
    updateAddressForm.classList.add("hide");
    newAddressForm.classList.add("hide");
}

function openNewAddressForm() {
    mainForm.classList.add("hide");
    updateAddressForm.classList.add("hide");
    newAddressForm.classList.remove("hide");
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