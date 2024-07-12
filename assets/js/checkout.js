const modal = document.querySelector(".modal");
const addressNewChooseTitle = document.querySelectorAll(".address-form__new-choose-title");
const addressNewChooseCityList = document.querySelector(".address-form__new-choose-city");
const addressNewChooseDistrictList = document.querySelector(".address-form__new-choose-district");
const addressNewChooseStreetList = document.querySelector(".address-form__new-choose-street");

const mainForm = document.querySelector(".address-form__container");
const updateAddressForm = document.querySelector(".address-form__update");
const addAddressForm = document.querySelector(".address-form__new");

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
        sDistrictName: "Hoàng Mai",
        sCityName: "Hà Nội"
    },
    {
        PK_iDistrictID: 2,
        FK_iCityID: 1,
        sDistrictName: "Thanh Xuân",
        sCityName: "Hà Nội"
    },
    {
        PK_iDistrictID: 3,
        FK_iCityID: 1,
        sDistrictName: "Hai Bà Trưng",
        sCityName: "Hà Nội"
    },
    {
        PK_iDistrictID: 4,
        FK_iCityID: 2,
        sDistrictName: "Hải Hậu",
        sCityName: "Nam Định"
    }
]

let streets = [
    {
        PK_iStreetID: 1,
        FK_iDistrictID: 1,
        sStreetName: "Định Công",
        sDistrictName: "Hoàng Mai",
        sCityName: "Hà Nội"
    },
    {
        PK_iStreetID: 2,
        FK_iDistrictID: 1,
        sStreetName: "Trần Nguyên Đán",
        sDistrictName: "Hoàng Mai",
        sCityName: "Hà Nội"
    },
    {
        PK_iStreetID: 3,
        FK_iDistrictID: 3,
        sStreetName: "Lê Thanh Nghị",
        sDistrictName: "Hai Bà Trưng",
        sCityName: "Hà Nội"
    }
]

function getAPICheckout() {
    if (getCookies("userID") == "") {
        modal.classList.add('open');
        openNewAddressForm();
    }

    setDataAddressNewChoose();
}
getAPICheckout();

function setDataAddressNewChoose() {
    let htmlCities = "";
    for (let i = 0 ; i < cities.length; i++) {
        htmlCities += " <li class='address-form__add-detail-city-item' onclick='chooseCityNew(" + cities[i].PK_iCityID + ")'>";
        htmlCities += "" + cities[i].sCityName + "";
        htmlCities += " </li>";
    }
    document.querySelector(".address-form__new-choose-city-list").innerHTML = htmlCities;
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
                    <li class="address-form__add-detail-district-item" onclick="chooseDistrictNew(${districts[i].PK_iDistrictID})">
                        ${districts[i].sDistrictName}
                    </li>
                `;
        }
    }
    document.querySelector(".address-form__new-choose-district-list").innerHTML = htmlDistricts;
    document.querySelector(".address-form__new-label-choose").style.display = 'none';
    document.querySelector(".address-form__new-input-choose").value = city.sCityName;
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
                <li class="address-form__add-detail-street-item" onclick="chooseStreetNew(${streets[i].PK_iStreetID})">
                    ${streets[i].sStreetName}
                </li>
            `;
        }
    }
    document.querySelector(".address-form__new-choose-street-list").innerHTML = htmlStreets;
    document.querySelector(".address-form__new-input-choose").value = district.sCityName + ", " + district.sDistrictName;
    changeTitleAddressNewChoose();
}

function chooseStreetNew(PK_iStreetID) {
    var street = streets.find((obj) => {
        return obj.PK_iStreetID === PK_iStreetID;
    });
    document.querySelector(".address-form__new-input-choose").value = street.sCityName + ", " + street.sDistrictName + ", " + street.sStreetName;
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

function addAddressNewChooseCityList() {
    addressNewChooseTitle[0].classList.add("active");
    addressNewChooseTitle[1].classList.remove("active");
    addressNewChooseTitle[2].classList.remove("active");
    addressNewChooseCityList.style.right = '0';
    addressNewChooseDistrictList.style.right = '-100%';
    addressNewChooseStreetList.style.right = "-200%";
}

function addAddressNewChooseDistrictList() {
    addressNewChooseTitle[1].classList.add("active");
    addressNewChooseTitle[0].classList.remove("active");
    addressNewChooseTitle[2].classList.remove("active");
    addressNewChooseCityList.style.right = '100%';
    addressNewChooseStreetList.style.right = '-200%';
    addressNewChooseDistrictList.style.right = '0';
}

function addAddressNewChooseStreetList() {
    addressNewChooseTitle[2].classList.add("active");
    addressNewChooseTitle[0].classList.remove("active");
    addressNewChooseTitle[1].classList.remove("active");
    addressNewChooseCityList.style.right = '100%';
    addressNewChooseDistrictList.style.right = '-100%';
    addressNewChooseStreetList.style.right = '0';
}

function showAddressNewChoose() {
    document.querySelector(".address-form__new-choose").classList.toggle("show");
}

function openUpdate() {
    mainForm.style.right = "100%";
    updateAddressForm.style.right = "0";
}

function backMainForm() {
    mainForm.style.right = '0';
    updateAddressForm.style.right = "100%";
    addAddressForm.style.right = "100%";
}

function openNewAddressForm() {
    mainForm.style.right = '100%';
    updateAddressForm.style.right = '100%';
    addAddressForm.style.right = '0';
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