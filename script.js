const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const countText = document.getElementById('count-text');

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
