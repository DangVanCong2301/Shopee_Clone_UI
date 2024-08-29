const startingMinutes = 10;
let time = startingMinutes * 60;

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.querySelector(".momo-payment__body-expired-numb").innerText = `${minutes}:${seconds}`
    time--;
    if (seconds == 40) {
        // document.querySelector(".momo-payment__main-qr").classList.add("hide-on-destop");
        // document.querySelector(".momo-payment__body-expired").classList.add("hide-on-destop");
        // document.querySelector(".momo-payment__main-success").classList.remove("hide-on-destop");
        // redirectPurchasePage();
    }
}

function redirectPurchasePage() {
    let countDownValue = 5;
    document.querySelector(".momo-payment__main-success-back").innerHTML = 
        `
            Trở lại trang mua hàng trong ${countDownValue} giây <br>
            Xin vui lòng chờ trong giây lát...
        `;
    setInterval(() => {
        countDownValue--;
        document.querySelector(".momo-payment__main-success-back").innerHTML = 
        `
            Trở lại trang mua hàng trong ${countDownValue} giây <br>
            Xin vui lòng chờ trong giây lát...
        `;
    }, 1000);

    setTimeout(() => {
        window.location.assign("purchase.html");
    }, 5 * 1000);
    
}
