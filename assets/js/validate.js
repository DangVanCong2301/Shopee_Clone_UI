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

function fullNameValidate() {
    const fullNameInput = document.querySelector(".address-form__new-input");
    const fullNameLabel = document.querySelector(".address-form__add-label-new");
    let fullName = fullNameInput.value;

    // Xoá khoảng cách
    fullName = fullName.replaceAll(" ", "");
    if (fullName === "") {
        showErrStyles(fullNameLabel, fullNameInput);
    } else {
        removeErrStyles(fullNameLabel, fullNameInput);
    }
}

function addEvent() {
    const fullNameInput = document.querySelector(".address-form__new-input");
    const addressNewBtn = document.querySelector(".address-form__add-new");

    fullNameInput.addEventListener('blur', () => {
        fullNameValidate();
    });

    addressNewBtn.addEventListener("click", () => {
        fullNameValidate();
    })
}
addEvent();