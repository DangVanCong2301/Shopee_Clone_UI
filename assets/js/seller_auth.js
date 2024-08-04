function openConfirmModal() {
    openModal();
    document.querySelector(".modal__body").innerHTML = 
    `
        <div class="modal__confirm">
            <div class="modal__confirm-text">Chúng tôi sẽ gửi mã xác minh qua Zalo đến (+84) 0347 797 502</div>
            <div class="modal__confirm-btns">
                <div class="modal__confirm-btn-destroy" onclick="closeModal()">Huỷ</div>
                <div class="modal__confirm-btn-method">Các phương pháp khác</div>
                <div class="modal__confirm-btn-send">Gửi đến Zalo</div>
            </div>
        </div>
    `;
}

function openModal() {
    document.querySelector(".modal").classList.add('open');
}

function closeModal() {
    document.querySelector(".modal").classList.remove('open');
}