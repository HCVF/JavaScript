const fizzBuzz = require('../lib/fizzbuzz');

describe ('fizzBuzz', () => {
  test('it returns Fizz if given 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  test('it returns Buzz if given 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  test('it returns FizzBuzz if given 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  test('it returns 8 if given 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  });
});