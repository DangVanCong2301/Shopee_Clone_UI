const headerItem = document.querySelectorAll(".purchase__header-item");

for (let i = 0; i < headerItem.length; i++) {
    headerItem[i].addEventListener('click', () => {
        if (i == 0) {
            // Tất cả
            headerItem[i].classList.add("active");
            headerItem[2].classList.remove("active");
            headerItem[1].classList.remove("active");
            document.querySelector(".purchase__all").classList.remove("hide-on-destop");
            document.querySelector(".purchase__wait").classList.add("hide-on-destop");
            document.querySelector(".purchase__transport").classList.add("hide-on-destop");

            // Show/Hide in Mobile
            document.querySelector(".purchase__all").classList.remove("hide-on-mobile");
            document.querySelector(".purchase__wait").classList.add("hide-on-mobile");
            document.querySelector(".purchase__transport").classList.add("hide-on-mobile");
        } else if (i == 1) {
            // Chờ thanh toán
            headerItem[i].classList.add("active");
            headerItem[0].classList.remove("active");
            headerItem[2].classList.remove("active");
            document.querySelector(".purchase__all").classList.add("hide-on-destop");
            document.querySelector(".purchase__wait").classList.remove("hide-on-destop");
            document.querySelector(".purchase__transport").classList.add("hide-on-destop");

            // Show/Hide on Mobile
            document.querySelector(".purchase__all").classList.add("hide-on-mobile");
            document.querySelector(".purchase__wait").classList.remove("hide-on-mobile");
            document.querySelector(".purchase__transport").classList.add("hide-on-mobile");
        } else if (i == 2) {
            // Vận chuyển
            headerItem[i].classList.add("active");
            headerItem[0].classList.remove("active");
            headerItem[1].classList.remove("active");
            document.querySelector(".purchase__all").classList.add("hide-on-destop");
            document.querySelector(".purchase__wait").classList.add("hide-on-destop");
            document.querySelector(".purchase__transport").classList.remove("hide-on-destop");

            // Show/Hide in Mobile
            document.querySelector(".purchase__all").classList.add("hide-on-mobile");
            document.querySelector(".purchase__wait").classList.add("hide-on-mobile");
            document.querySelector(".purchase__transport").classList.remove("hide-on-mobile");
        } else if (i == 3) {
            // Chờ giao hàng
            headerItem[i].classList.add("active");
            headerItem[0].classList.remove("active");
            headerItem[1].classList.remove("active");
            headerItem[2].classList.remove("active");
            document.querySelector(".purchase__all").classList.add("hide-on-destop");
            document.querySelector(".purchase__wait").classList.add("hide-on-destop");
            document.querySelector(".purchase__transport").classList.add("hide-on-destop");
            document.querySelector(".purchase__wait-delivery").classList.remove("hide-on-destop");
        } else if (i == 4) {
            // Hoàn thành 
            headerItem[i].classList.add("active");
            headerItem[0].classList.remove("active");
            headerItem[1].classList.remove("active");
            headerItem[2].classList.remove("active");
            headerItem[3].classList.remove("active");
            document.querySelector(".purchase__all").classList.add("hide-on-destop");
            document.querySelector(".purchase__wait").classList.add("hide-on-destop");
            document.querySelector(".purchase__transport").classList.add("hide-on-destop");
            document.querySelector(".purchase__wait-delivery").classList.add("hide-on-destop");
            document.querySelector(".purchase__complete").classList.remove("hide-on-destop");
        }
    });
}

// Upload Image
function uploadImage() {
    let profilePic = document.querySelector(".reviewer-form__thumb-img-value");
    let inputFile = document.getElementById("input-file");
    console.log(inputFile.files[0].name);
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
    profilePic.classList.add("show");
    document.querySelector(".reviewer-form__thumb-img-add").classList.add("hide");
}

// Rate
const rate = document.getElementsByName("rate");
let rateCheck = "";
for (let i = 0; i < rate.length; i++) {
    if (rate.item(i).checked) {
        rateCheck = rate.item(i).value;
    }
    rate.item(i).onchange = () => {
        if (rate.item(i).value == 5) {
            document.querySelector(".reviewer-form__quality-text").classList.remove("hide-on-destop");
        } else {
            document.querySelector(".reviewer-form__quality-text").classList.add("hide-on-destop");
        }
    }
}

// Modal
function openModal() {
    document.querySelector(".modal").classList.add("open");
}

function closeModal() {
    document.querySelector(".modal").classList.remove("open");
}