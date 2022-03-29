const addToBatch = (array, number) => {
  if (array.length < 5) {
    let result = array.concat(number);
    return result;
  } else {
    return array;
  }
}

console.log(addToBatch([1, 1, 1, 1, 1], 1));