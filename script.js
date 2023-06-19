// Get elements
const itemList = document.getElementById('itemList');
const totalAmount = document.getElementById('totalAmount');

// Event delegation for + and - buttons
itemList.addEventListener('click', function (event) {
  const target = event.target;
  
  if (target.classList.contains('plus-btn')) {
    const input = target.parentNode.querySelector('.quantity-input');
    input.value = parseInt(input.value) + 1;
    updateTotalPrice();
  }
  
  if (target.classList.contains('minus-btn')) {
    const input = target.parentNode.querySelector('.quantity-input');
    const value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
      updateTotalPrice();
    }
  }
});

// Event delegation for delete button
itemList.addEventListener('click', function (event) {
  const target = event.target;
  
  if (target.classList.contains('delete-btn')) {
    const listItem = target.closest('.cart-item');
    listItem.remove();
    updateTotalPrice();
  }
});

// Event delegation for like button
itemList.addEventListener('click', function (event) {
  const target = event.target;
  
  if (target.classList.contains('like-btn')) {
    target.classList.toggle('active');
  }
});

// Update total price
const updateTotalPrice = () => {
  let totalPrice = 0;
  const items = document.querySelectorAll('.cart-item');
  
  items.forEach(function (item) {
    const price = parseInt(item.querySelector('p').textContent.replace('$', ''));
    const quantity = parseInt(item.querySelector('.quantity-input').value);
    totalPrice += price * quantity;
  });
  
  totalAmount.textContent = totalPrice;
}

// Initial update of total price
updateTotalPrice();
