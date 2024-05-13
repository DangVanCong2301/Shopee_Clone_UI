const modal = document.querySelector(".modal");
const addressTitle = document.querySelectorAll(".address-form__add-detail-title");
console.log(addressTitle);
const cityList = document.querySelector(".address-form__add-detail-city");
const districtList = document.querySelector(".address-form__add-detail-district");
const streetList = document.querySelector(".address-form__add-detail-street");

const mainForm = document.querySelector(".address-form__container");
const updateAddressForm = document.querySelector(".address-form__update");
const addAddressForm = document.querySelector(".address-form__new");

function openAddressModal() {
    modal.classList.add('open')
}

function closeAddressModal() {
    modal.classList.remove('open')
}

for (let i = 0; i < addressTitle.length; i++) {
    addressTitle[i].addEventListener('click', () => {
        console.log(i);
        if (i == 0) {
            addCityList(i);
        } else if (i == 1) {
            addDistrictList(i);
        } else if (i == 2) {
            addStreetList(i);
        }
    });
}

function addCityList(i) {
    addressTitle[i].classList.add("address-form__add-detail-title--active");
    addressTitle[1].classList.remove("address-form__add-detail-title--active");
    addressTitle[2].classList.remove("address-form__add-detail-title--active");
    cityList.style.right = '0';
    districtList.style.right = '-100%';
    streetList.style.right = "-200%";
}

function addDistrictList(i) {
    addressTitle[i].classList.add("address-form__add-detail-title--active");
    addressTitle[0].classList.remove("address-form__add-detail-title--active");
    addressTitle[2].classList.remove("address-form__add-detail-title--active");
    cityList.style.right = '100%';
    streetList.style.right = '-200%';
    districtList.style.right = '0';
}

function addStreetList(i) {
    addressTitle[i].classList.add("address-form__add-detail-title--active");
    addressTitle[0].classList.remove("address-form__add-detail-title--active");
    addressTitle[1].classList.remove("address-form__add-detail-title--active");
    cityList.style.right = '100%';
    districtList.style.right = '-100%';
    streetList.style.right = '0';
}

function toggleDetail() {
    document.querySelector(".address-form__add-detail").classList.toggle("address-form__add-detail--active");
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