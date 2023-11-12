const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const countText = document.getElementById('count-text');
const cartBadgeCount = document.getElementById('cart-badge');
const addToCartButton = document.getElementById('add-to-cart');
const cartDetails = document.getElementsByClassName('cart-details');
const cartButton = document.getElementById('btn-cart');

let count = 0;

updateCartBadgeVisibility();

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
  cartBadgeCount.innerText = count;
  updateCartBadgeVisibility();
});

function updateCartBadgeVisibility() {
  if (count < 1) {
    cartBadgeCount.style.display = 'none';
  } else {
    cartBadgeCount.style.display = 'flex';
  }
}

cartButton.addEventListener('click', () => {
  
});
