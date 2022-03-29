const add = require('../lib/add');

describe('add', () => {
  test('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });
  
  test('adds 0 and 5', () => {
    expect(add(0, 5)).toBe(5);
  });
});

