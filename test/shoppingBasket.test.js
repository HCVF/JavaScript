const ShoppingBasket = require("../lib/shoppingBasket");

describe ('ShoppingBasket', () => {
  const basket = new ShoppingBasket();
  const candyDouble = { getName: () => 'Skittle', getPrice: () => 3.99 };
  it ("addItem should add an item to the basket", () => {
    basket.addItem(candyDouble);
    expect(basket.basket).toEqual([candyDouble]);
  });

  it ("getTotalPrice should return the price of all the items in the basket", () => {
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toBe(11.97);
  });
}); 