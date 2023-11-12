const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const countText = document.getElementById('count-text');
const cartBadgeCount = document.getElementById('cart-badge');
const addToCartButton = document.getElementById('add-to-cart');

let count = 0;

btnPlus.addEventListener('click', () => {
  if (count < 10) {
    count += 1;
    countText.innerText = count;
  }
});

btnMinus.addEventListener('click', () => {
  if (count > 0) {
    count -= 1;
    countText.innerText = count;
  }
});

addToCartButton.addEventListener('click', () => {
  cartBadgeCount.innerText = count
});


