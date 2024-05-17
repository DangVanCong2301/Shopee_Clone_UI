// Load Progress
console.log('a');
const progressImage = document.querySelectorAll(".cart__like-product-item-progress");
const checkProduct = document.querySelectorAll(".cart__checkout-input");
const progressImageCart = document.querySelectorAll(".cart__body-product-img-progress");
const progressCartName = document.querySelectorAll(".cart__body-product-name-progress");

const loadingProductImage = document.querySelectorAll(".home-product-item__img-loading");
const loadingProductName = document.querySelectorAll(".home-product-item__name-loading");
const loadingProductPriceOld = document.querySelectorAll(".home-product-item__price-old-loading");
const loadingProductPriceCurrent = document.querySelectorAll(".home-product-item__price-current-loading");
const loadingProductLike = document.querySelectorAll(".home-product-item__like-loading");
const loadingProductRate = document.querySelectorAll(".home-product-item__rating-loading");
const loadingProductSold = document.querySelectorAll(".home-product-item__sold-loading");
const loadingProductBrand = document.querySelectorAll(".home-product-item__brand-loading");
const loadingProductOrigin = document.querySelectorAll(".home-product-item__origin-name-loading");


function loadingProgress() {
    setTimeout(() => {
        for (let i = 0; i < progressImage.length; i++) {
            const progressImageItem = progressImage[i];
            progressImageItem.style.display = 'none';
        }
        for (let i = 0; i < progressImageCart.length; i++) {
            progressImageCart[i].style.display = 'none';
        }
        for (let i = 0; i < progressCartName.length; i++) {
            progressCartName[i].style.display = 'none';
        }
        for (let i = 0; i < loadingProductImage.length; i++) {
            loadingProductImage[i].style.display = 'none';
        }
        for (let i = 0; i < loadingProductName.length; i++) {
            loadingProductName[i].style.display = 'none';
        }
        for (let i = 0; i < loadingProductPriceOld.length; i++) {
            loadingProductPriceOld[i].style.display = 'none';
        }
        for (let i = 0; i < loadingProductPriceCurrent.length; i++) {
            loadingProductPriceCurrent[i].style.display = 'none';
        } 
        for (let i = 0; i < loadingProductLike.length; i++) {
            loadingProductLike[i].style.display = 'none';
        }
        for (let i = 0; i < loadingProductRate.length; i++) {
            loadingProductRate[i].style.display = 'none';
        }
        for (let i = 0; i < loadingProductSold.length; i++) {
            loadingProductSold[i].style.display = 'none';
        }
        for (let i = 0; i < loadingProductBrand.length; i++) {
            loadingProductBrand[i].style.display = 'none';
        }
        for (let i = 0; i < loadingProductOrigin.length; i++) {
            loadingProductOrigin[i].style.display = 'none';
        }
    }, 1000);
}
loadingProgress();