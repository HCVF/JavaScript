const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

// const checkPrefix = (prefix) => {
//   return candy.name.indexOf(prefix) === 0 ? true : false
// }

// const checkPrice = (price) => {
//   return candy.price < price;
// }

const searchCandies = (prefix, price, candies) => {
  let filteredByPrefix = candies.filter(candy => candy.name.indexOf(prefix) === 0);
  let filteredByPrice = filteredByPrefix.filter(candy => candy.price < price);
  return filteredByPrice.map(candy => candy.name);
}

console.log(searchCandies('A', 10, candies));

module.exports = searchCandies;