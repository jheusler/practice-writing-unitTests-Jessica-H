var cart = require('../cart');
var addItem = cart.addItem;
var removeItem = cart.removeItem;
var getTotalItems = cart.getTotalItems;

// addItem tests

// positive: adds item with valid quantity
test('addItem adds item with valid quantity', function() {
  var myCart = {};
  addItem(myCart, 'apple', 3);
  expect(myCart['apple']).toBe(3);
});

// negative: does not add item with zero quantity
test('addItem ignores item with zero quantity', function() {
  var myCart = {};
  addItem(myCart, 'banana', 0);
  expect('banana' in myCart).toBe(false);
});

// edge: does not add item with negative quantity
test('addItem ignores item with negative quantity', function() {
  var myCart = {};
  addItem(myCart, 'orange', -5);
  expect('orange' in myCart).toBe(false);
});

// removeItem tests

// positive: removes an existing item
test('removeItem removes an existing item', function() {
  var myCart = { apple: 2 };
  removeItem(myCart, 'apple');
  expect('apple' in myCart).toBe(false);
});

// negative: removing a non-existent item does not throw
test('removeItem handles non-existent item without error', function() {
  var myCart = {};
  expect(function() {
    removeItem(myCart, 'banana');
  }).not.toThrow();
});

// edge: cart is empty after removing the only item
test('removeItem leaves cart empty after removing the only item', function() {
  var myCart = { mango: 1 };
  removeItem(myCart, 'mango');
  expect(Object.keys(myCart).length).toBe(0);
});

// getTotalItems tests

// positive: returns correct total for multiple items
test('getTotalItems returns correct total for multiple items', function() {
  var myCart = { apple: 3, banana: 2 };
  var total = getTotalItems(myCart);
  expect(total).toBe(5);
});

// negative: returns zero for empty cart
test('getTotalItems returns 0 for empty cart', function() {
  var myCart = {};
  var total = getTotalItems(myCart);
  expect(total).toBe(0);
});

// edge: returns correct total for single item with large quantity
test('getTotalItems returns correct total for single item with large quantity', function() {
  var myCart = { rice: 100 };
  var total = getTotalItems(myCart);
  expect(total).toBe(100);
});
