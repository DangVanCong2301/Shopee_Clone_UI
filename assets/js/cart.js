function incre(event) {
    const parentElement = event.target.parentNode;
    var incre = parentElement.querySelector("#qnt").value;
    var input = parentElement.querySelector("#qnt");
    if (parseInt(incre) < 10) {
        input.value = parseInt(incre) + 1;
    } else {
        let html = "";
        html += `
        <div class="modal">
            <div class="modal__overlay">
        
            </div>
            <div class="modal__body">
        
                <!--Form message -->
                <div class="auth-form">
                    <div class="auth-form__container">
                        <p class="auth-form__msg">Số lượng mặt hàng trong kho không đủ yêu cầu!</p>
                        <div class="auth-form__controls">
                            <button onclick="exitModal()" class="btn">TRỞ LẠI</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        `;
        document.querySelector(".cart__message").innerHTML = html;
        document.querySelector(".modal").classList.add("open");
    }
}

function exitModal() {
    document.querySelector(".modal").classList.remove("open");
}

function reduce(event) {
    const parentElement = event.target.parentNode;
    var reduce = parentElement.querySelector("#qnt").value;
    var input = parentElement.querySelector("#qnt");
    if (parseInt(reduce) > 1) {
        input.value = parseInt(reduce) - 1;
    } else {
        let html = "";
        html += `
        <div class="modal">
            <div class="modal__overlay">
    
            </div>
            <div class="modal__body">
                <!--Form message -->
                <div class="auth-form">
                    <div class="auth-form__container">
                        <p class="auth-form__msg">Bạn muốn xoá mặt hàng này khỏi giỏ?</p>
                        <div class="auth-form__controls">
                            <button onclick="exitModal()" class="btn btn--primary">HUỶ</button>
                            <button class="btn">ĐỒNG Ý</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        document.querySelector(".cart__message").innerHTML = html;
        document.querySelector(".modal").classList.add("open");
    }
}

function loadImage() {
    setTimeout(() => {
        document.querySelector(".cart__like-product-item-progress").style.display = 'none';
    }, 1000);
}
loadImage();