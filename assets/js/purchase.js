const headerItem = document.querySelectorAll(".purchase__header-item");

for (let i = 0; i < headerItem.length; i++) {
    headerItem[i].addEventListener('click', () => {
        if (i == 1) {
            headerItem[i].classList.add("purchase__header-item--active");
            document.querySelector(".purchase__all").style.display = 'none';
            document.querySelector(".purchase__wait-settlement").style.display = 'flex';
        } else if (i == 2) {
            headerItem[i].classList.add("purchase__header-item--active");
            document.querySelector(".purchase__all").style.display = 'none';
            document.querySelector(".purchase__transport").style.display = 'flex';
        }
    });
}