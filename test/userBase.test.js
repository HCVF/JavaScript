const User = require('../lib/user.js');
const UserBase = require('../lib/userBase.js');

describe('UserBase', () => {
  const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];
  const userBase = new UserBase(users);

  it('can count the number of users', () => {
    expect(userBase.count()).toBe(3);
  });

  it('can return all names of users', () => {
    expect(userBase.getNames()).toEqual(['Uma', 'Josh', 'Ollie'])
  });

  it('can return all introductions of users', () => {
    expect(userBase.getIntroductions()).toEqual([
      'Hi, my name is Uma',
      'Hi, my name is Josh',
      'Hi, my name is Ollie'
    ])
  });
});