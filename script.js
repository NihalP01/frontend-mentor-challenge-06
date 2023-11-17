const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const countText = document.getElementById('count-text');
const cartBadgeCount = document.getElementById('cart-badge');
const addToCartButton = document.getElementById('add-to-cart');
const removeFromCartButton = document.getElementById('btn-delete');
const checkoutButton = document.getElementById('btn-checkout');
const cartDetails = document.getElementById('cart-details');
const cartButton = document.getElementById('btn-cart');
const emptyCartMsg = document.getElementById('empty-cart-msg');
const cartItems = document.getElementById('cart-items');
const priceDetails = document.getElementById('price-details');
const itemCount = document.getElementById('item-count');
const totalPrice = document.getElementById('total-price');

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
    itemCount.innerText = count;
    totalPrice.innerText = '$' + count * 125 + '.00';
  } else {
    cartDetails.style.display = 'none';
  }
});

function toggleEmptyCartMsg() {
  if (count < 1) {
    emptyCartMsg.style.display = 'flex';
    cartItems.style.display = 'none';
    checkoutButton.style.display = 'none';
  } else {
    emptyCartMsg.style.display = 'none';
    cartItems.style.display = 'flex';
    priceDetails.style.padding = '1rem 0 1rem 0';
    checkoutButton.style.display = 'flex';
  }
}

removeFromCartButton.addEventListener('click', () => {
  count = 0;
  countText.innerText = count;
  toggleEmptyCartMsg();
  updateCartBadgeVisibility();
});

const lightbox = document.querySelector('.product-lightbox');
const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.querySelector('.product-lightbox img');

// Function to open the lightbox
function openLightbox(thumbnail) {
  const src = thumbnail.getAttribute('src');
  mainImage.setAttribute('src', src);
  lightbox.classList.add('active');
}

// Function to close the lightbox
function closeLightbox() {
  lightbox.classList.remove('active');
}

// Add click event listeners to thumbnails
for (const thumbnail of thumbnails) {
  thumbnail.addEventListener('click', () => openLightbox(thumbnail));
}

// Add click event listener to lightbox overlay to close it
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});
