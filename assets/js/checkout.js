const modal = document.querySelector(".modal");
const addressTitle = document.querySelectorAll(".address-form__add-detail-title");
console.log(addressTitle);
const cityList = document.querySelector(".address-form__add-detail-city");
const districtList = document.querySelector(".address-form__add-detail-district");
const streetList = document.querySelector(".address-form__add-detail-street");

for (let i = 0; i < addressTitle.length; i++) {
    addressTitle[i].addEventListener('click', () => {
        console.log(i);
        if (i == 0) {
            addressTitle[i].classList.add("address-form__add-detail-title--active");
            cityList.style.right = '0';
            districtList.style.right = '-100%';
            //districtList.style.paddingLeft = '12px';
        } else if (i == 1) {
            addressTitle[i].classList.add("address-form__add-detail-title--active");
            cityList.style.right = '100%';
            districtList.style.right = '0';
            districtList.style.paddingLeft = '12px';
        } else if (i == 2) {
            
        }
    });
}

function openAddressModal() {
    modal.classList.add('open')
}

function closeAddressModal() {
    modal.classList.remove('open')
}