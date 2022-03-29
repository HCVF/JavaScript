const generateMessage = (name) => {
  return (`Hi ${name}! 50% off our best candies for you today!`);
}

const generateMessages = (names) => {
  return names.map(generateMessage);
}

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

console.log(generateMessages(names));