class ShoppingBasket {
  constructor (){
    this.basket = [];
  }

  addItem(candy) {
    this.basket.push(candy);
  }

  getTotalPrice() {
    const prices = this.basket.map(candy => candy.getPrice());
    return prices.reduce(
      (sum, increment) => sum + increment);
  }
};

module.exports = ShoppingBasket