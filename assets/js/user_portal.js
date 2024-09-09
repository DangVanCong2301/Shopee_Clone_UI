// Validate User Portal Page
function showErrStyles(msg, inputBox) {
    inputBox.classList.add("err");
    msg.classList.add("err");
    msg.classList.remove("hide-on-destop");
}

function removeErrStyles(msg, inputBox) {
    inputBox.classList.remove("err");
    msg.classList.remove("err");
    msg.classList.add("hide-on-destop");
}

let isValidate = true;
function fullNameUserPortalValidate() {
    const fullNameUserPortalBox = document.querySelector(".user-portal__box-fullname");
    const fullNameUserPortalInput = document.querySelector(".user-portal__input-fullname");
    const fullNameUserPortalMsg = document.querySelector(".user-portal__msg-err-fullname");
    let fullName = fullNameUserPortalInput.value;

    // Xoá khoảng cách
    fullName = fullName.replaceAll(" ", "");
    if (fullName == "") {
        showErrStyles(fullNameUserPortalMsg, fullNameUserPortalBox);
        isValidate = false;
    } else {
        removeErrStyles(fullNameUserPortalMsg, fullNameUserPortalBox);
        isValidate = true;
    }
    return isValidate;
}

function genderUserPortalValidate() {
    const genderUserPortalCheck = document.getElementsByName("gender");
    const genderUserPortalMsg = document.querySelector(".user-portal__msg-err-gender");
    let checkValue = "";
    for (let i = 0; i < genderUserPortalCheck.length; i++) {
        if (genderUserPortalCheck.item(i).checked) {
            checkValue = genderUserPortalCheck.item(i).value;
        }
    }
    if (checkValue == "") {
        genderUserPortalMsg.classList.remove("hide-on-destop");
        isValidate = false;
    } else {
        genderUserPortalMsg.classList.add("hide-on-destop")
        isValidate = true;
    }
    return isValidate;
}

function birthUserPortalValidate() {
    const birthUserPortalInput = document.querySelector(".user-portal__input-birth");
    const birthUserPortalMsg = document.querySelector(".user-portal__msg-err-birth");

    let birth = birthUserPortalInput.value;
    if (birth == "") {
        showErrStyles(birthUserPortalMsg, birthUserPortalInput);
        isValidate = false;
    } else {
        removeErrStyles(birthUserPortalMsg, birthUserPortalInput);
        isValidate = true;
    }
    return isValidate;
}

function addEvent() {
    const fullNameUserPortInput = document.querySelector(".user-portal__input-fullname");

    fullNameUserPortInput.addEventListener('blur', () => {
        fullNameUserPortalValidate();
    });

    document.querySelector(".user-portal__btn-save-portal").addEventListener('click', () => {
        saveUserPoral();
    });
}

addEvent();

function saveUserPoral() {
    fullNameUserPortalValidate();
    genderUserPortalValidate();
    birthUserPortalValidate();
    if (fullNameUserPortalValidate() && genderUserPortalValidate() && birthUserPortalValidate()) {
        document.querySelector(".user-portal__btn-save-spinner").classList.remove("hide-on-destop");
        setTimeout(() => {
            toast({ title: "Thông báo", msg: `Cập nhật thành công`, type: "success", duration: 5000 });
            setTimeout(() => {
                document.querySelector(".user-portal__btn-save-spinner").classList.remove("hide-on-destop");
                document.querySelector(".portal__step-line-1").classList.add("active");
                document.querySelectorAll(".portal__step")[1].classList.add("active");
                document.querySelector(".portal__shop").classList.add("hide-on-destop");
                document.querySelector(".user-portal__success").classList.remove("hide-on-destop");
            }, 1000);
        }, 2000)
    }
}