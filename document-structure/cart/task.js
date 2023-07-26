const buttons = document.querySelectorAll('.product__add');
const increase = document.querySelectorAll('.product__quantity-control_inc');
const decrease = document.querySelectorAll('.product__quantity-control_dec');

buttons.forEach(button => button.addEventListener('click', () => {
    let cart = document.querySelector('.cart__products');
    let product = button.closest('.product');
    let quantity = Number(product.querySelector('.product__quantity-value').textContent);
    let image = product.querySelector('img').getAttribute('src');
    let productId = product.dataset.id;
    let cartProduct = cart.querySelector(`[data-id="${productId}"]`);
    if (!cartProduct) {
        let cartProduct = `<div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${image}">
        <div class="cart__product-count">${quantity}</div>
    </div>`
        cart.insertAdjacentHTML('beforeend', cartProduct);
    } else {
        cartProduct.querySelector('.cart__product-count').textContent =
            Number(cartProduct.querySelector('.cart__product-count').textContent) + quantity;
    }

    product.querySelector('.product__quantity-value').textContent = 1
}))

increase.forEach(button => button.addEventListener('click', () => {
    let amount = button.previousElementSibling.textContent;
    button.previousElementSibling.textContent = Number(amount) + 1
}))

decrease.forEach(button => button.addEventListener('click', () => {
    let amount = button.nextElementSibling.textContent;
    if (Number(amount) > 1) {
        button.nextElementSibling.textContent = Number(amount) - 1
    }

}))
