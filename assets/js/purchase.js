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
        }
    });
}