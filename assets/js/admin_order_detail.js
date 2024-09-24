const startingMinutes = 30;
let time = startingMinutes * 60;

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.querySelector(".admin-order__times-value").innerText = `${minutes}:${seconds}`
    time--;
    if (seconds == 40) {
        
    }
}

function confirmOrder() {
    document.querySelector(".checkout__payment-order-btn-spinner").classList.remove("hide-on-destop");
    setTimeout(() => {
        toast({ title: "Thông báo", msg: `Cập nhật thành công`, type: "success", duration: 5000 });
        setTimeout(() => {
            document.querySelector(".checkout__payment-order-btn-spinner").classList.add("hide-on-destop");
            document.querySelector(".checkout__payment-order-btn-container").innerHTML = "Chờ lấy hàng";
        }, 1000);
    }, 2000)
}