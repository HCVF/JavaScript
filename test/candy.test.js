const Candy = require('../lib/candy.js')

describe('Candy', () => {
  const candy = new Candy('Mars', 4.99);

  it ("getName should return the name of a candy", () => {
    expect(candy.getName()).toBe('Mars');
  });
  
  it ('getPrice should return the price of a candy', () => {
    expect(candy.getPrice()).toBe(4.99)
  });
});