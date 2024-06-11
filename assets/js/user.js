function showHiddenPass() {
    const input = document.querySelector(".auth__mobile-form-input-password"),
    iconEye = document.querySelector(".auth__mobile-form-password-show-icon");
    if (input.type == "password") {
        input.type = "text";
        iconEye.classList.add("uil-eye");
        iconEye.classList.remove("uil-eye-slash");
    } else {
        input.type = "password";
        iconEye.classList.add("uil-eye-slash");
        iconEye.classList.remove("uil-eye");
    }
}