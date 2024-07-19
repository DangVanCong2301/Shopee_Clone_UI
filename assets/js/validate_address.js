// Validate Checkout Page
function showErrStyles(label, inputBox) {
    inputBox.classList.add("err");
    label.classList.add("err");
    label.classList.remove("hide");
}

function removeErrStyles(label, inputBox) {
    inputBox.classList.remove("err");
    label.classList.remove("err");
    label.classList.add("hide");
}

let isValidate = true;
function fullNameNewAddressValidate() {
    const fullNameNewAddressInput = document.querySelector(".address-form__new-input-fullname");
    const fullNameNewAddressLabel = document.querySelector(".address-form__new-label-fullname");
    let fullName = fullNameNewAddressInput.value;

    // Xoá khoảng cách
    fullName = fullName.replaceAll(" ", "");
    if (fullName === "") {
        showErrStyles(fullNameNewAddressLabel, fullNameNewAddressInput);
        isValidate = false;
    } else {
        removeErrStyles(fullNameNewAddressLabel, fullNameNewAddressInput);
        isValidate = true;
    }
    return isValidate;
}

function phoneNewAddressValidate() {
    const phoneNewAddressInput = document.querySelector(".address-form__new-input-phone");
    const phoneNewAddressLabel = document.querySelector(".address-form__new-label-phone");

    let phone = phoneNewAddressInput.value;
    phone = phone.replaceAll(" ", "");

    if (phone === "") {
        showErrStyles(phoneNewAddressLabel, phoneNewAddressInput);
        isValidate = false;
    } else {
        removeErrStyles(phoneNewAddressLabel, phoneNewAddressInput);
        isValidate = true;
    }
    return isValidate;
}

function chooseNewAddressValidate() {
    const chooseNewAddressInput = document.querySelector(".address-form__new-input-choose");
    const chooseNewAddressLabel = document.querySelector(".address-form__new-label-choose");

    let choose = chooseNewAddressInput.value;
    choose = choose.replaceAll(" ", "");

    if (choose === "") {
        showErrStyles(chooseNewAddressLabel, chooseNewAddressInput);
        isValidate = false;
    } else {
        removeErrStyles(chooseNewAddressLabel, chooseNewAddressInput);
        isValidate = true;
    }
    return isValidate;
}

function descNewAddressValidate() {
    const descNewAddressInput = document.querySelector(".address-form__new-textarea-desc");
    const descNewAddressLabel = document.querySelector(".address-form__new-label-desc");

    let desc = descNewAddressInput.value;
    desc = desc.replaceAll(" ", "");

    if (desc === "") {
        showErrStyles(descNewAddressLabel, descNewAddressInput);
        isValidate = false;
    } else {
        removeErrStyles(descNewAddressLabel, descNewAddressInput);
        isValidate = true;
    }
    return isValidate;
}

function addEvent() {
    const fullNameNewAddressInput = document.querySelector(".address-form__new-input-fullname");
    const phoneNewAddressInput = document.querySelector(".address-form__new-input-phone");
    const chooseNewAddressInput = document.querySelector(".address-form__new-input-choose");
    const descNewAddressInput = document.querySelector(".address-form__new-textarea-desc");
    const addressNewAddressBtn = document.querySelector(".address-form__new-btn");

    fullNameNewAddressInput.addEventListener('blur', () => {
        fullNameNewAddressValidate();
    });

    phoneNewAddressInput.addEventListener('blur', () => {
        phoneNewAddressValidate();
    });

    chooseNewAddressInput.addEventListener('blur', () => {
        chooseNewAddressValidate();
    });

    descNewAddressInput.addEventListener('blur', () => {
        descNewAddressValidate();
    });

    addressNewAddressBtn.addEventListener("click", () => {
        fullNameNewAddressValidate();
        phoneNewAddressValidate();
        chooseNewAddressValidate();
        descNewAddressValidate();
        if (fullNameNewAddressValidate() && phoneNewAddressValidate() && chooseNewAddressValidate() && descNewAddressValidate()) {
            addNewAddress();
        };
    });
}

function addNewAddress() {
    setCookie("userID", 1, 30);
    closeAddressModal();
    document.querySelector(".modal").classList.add('open');
    document.querySelector(".modal__body").innerHTML = 
    `
    <div class="spinner"></div>
    `;
    setTimeout(() => {
        document.querySelector(".modal").classList.remove('open');
        setTimeout(() => {
            toast({ title: "Thông báo", msg: `Thêm địa chỉ thành công`, type: "success", duration: 5000 });
            document.querySelector(".checkout__address-desc").classList.remove("hide");
        }, 1000)
    }, 2000);
}