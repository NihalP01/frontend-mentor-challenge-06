const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const countText = document.getElementById('count-text');
const cartBadgeCount = document.getElementById('cart-badge');
const addToCartButton = document.getElementById('add-to-cart');
const cartDetails = document.getElementById('cart-details');
const cartButton = document.getElementById('btn-cart');
const emptyCartMsg = document.getElementById('empty-cart-msg');
const cartItems = document.getElementById('cart-items');

let count = 0;

updateCartBadgeVisibility();
toggleEmptyCartMsg();

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
  toggleEmptyCartMsg();
});

function updateCartBadgeVisibility() {
  if (count < 1) {
    cartBadgeCount.style.display = 'none';
  } else {
    cartBadgeCount.style.display = 'flex';
  }
}

cartButton.addEventListener('click', () => {
  const currentDisplayStatus = window
    .getComputedStyle(cartDetails)
    .getPropertyValue('display');
  if (currentDisplayStatus === 'none') {
    cartDetails.style.display = 'flex';
  } else {
    cartDetails.style.display = 'none';
  }
});

function toggleEmptyCartMsg() {
  if (count < 1) {
    emptyCartMsg.style.display = 'flex';
    cartItems.style.display = 'none';
    
  } else {
    emptyCartMsg.style.display = 'none';
    cartItems.style.display = 'flex';
  }
}
