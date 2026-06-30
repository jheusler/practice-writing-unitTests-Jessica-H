const cart = require('../cart');

describe('addItem', function() {
  test('should add an item with a valid quantity', function() {
    var myCart = {};
    cart.addItem(myCart, 'apple', 3);
    expect(myCart['apple']).toBe(3);
  });

  test('should not add an item with a negative quantity', function() {
    var myCart = {};
    cart.addItem(myCart, 'banana', -1);
    expect('banana' in myCart).toBe(false);
  });

  test('should not add an item with a quantity of zero', function() {
    var myCart = {};
    cart.addItem(myCart, 'orange', 0);
    expect('orange' in myCart).toBe(false);
  });
});

describe('removeItem', function() {
  test('should remove an existing item from the cart', function() {
    var myCart = { apple: 2 };
    cart.removeItem(myCart, 'apple');
    expect('apple' in myCart).toBe(false);
  });

  test('should not throw when removing an item not in the cart', function() {
    var myCart = {};
    expect(function() {
      cart.removeItem(myCart, 'banana');
    }).not.toThrow();
  });

  test('should leave the cart empty after removing the last item', function() {
    var myCart = { mango: 1 };
    cart.removeItem(myCart, 'mango');
    expect(Object.keys(myCart).length).toBe(0);
  });
});

describe('getTotalItems', function() {
  test('should return the correct total for multiple items', function() {
    var myCart = { apple: 3, banana: 2 };
    expect(cart.getTotalItems(myCart)).toBe(5);
  });

  test('should return zero for an empty cart', function() {
    var myCart = {};
    expect(cart.getTotalItems(myCart)).toBe(0);
  });

  test('should return the correct total with large quantities', function() {
    var myCart = { rice: 100 };
    expect(cart.getTotalItems(myCart)).toBe(100);
  });
});
