function downloadPdf() {
    const orderCode = document.querySelector(".order-code");
    console.log(orderCode);
    html2pdf().from(orderCode).save();
}