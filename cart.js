function addItem(cart, item, quantity) {
  if (quantity <= 0) {
    return;
  }
  cart[item] = quantity;
}

function removeItem(cart, item) {
  delete cart[item];
}

function getTotalItems(cart) {
  var total = 0;
  var keys = Object.keys(cart);
  for (var i = 0; i < keys.length; i++) {
    total = total + cart[keys[i]];
  }
  return total;
}

module.exports = { addItem, removeItem, getTotalItems };
