function saveUserPoral() {
    document.querySelector(".user-portal__btn-save-spinner").classList.remove("hide-on-destop");
    setTimeout(() => {
        setTimeout(() => {
            toast({ title: "Thông báo", msg: `Cập nhật thành công`, type: "success", duration: 5000 });
            document.querySelector(".user-portal__btn-save-spinner").classList.remove("hide-on-destop");
            document.querySelector(".portal__step-line-1").classList.add("active");
            document.querySelectorAll(".portal__step")[1].classList.add("active");
            document.querySelector(".portal__shop").classList.add("hide-on-destop");
            document.querySelector(".user-portal__success").classList.remove("hide-on-destop");
        }, 1000);
    }, 2000)
}