const User = require('../lib/user.js');

describe ("User", () => {
  it ("instantiates a new user", () => {
    const user = new User();
    expect(user).toBeInstanceOf(User);
  });
  it ("getName should be able to find the name of the user", () => {
    const user = new User('Chris');
    expect(user.getName()).toBe('Chris');
  });
  it ("getIntroduction should create a personalised message for the user", () => {
    const user = new User('Chris');
    expect(user.getIntroduction()).toBe('Hi, my name is Chris');
  });
}); 