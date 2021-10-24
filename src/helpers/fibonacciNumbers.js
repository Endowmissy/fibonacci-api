const fibonacci = num => {
  //if input number is less than 4, return empty array
  if (num <= 4)
    return [];
  const fibArray = [];

  // if input number is strictly equals to 5, add 1 to array
  if (num === 5)
    fibArray.push(1);

  num += 3
  let oldValue = 0;
  let newValue = 1;

  // iterate through fibonacci numbers
  for (let i = 3; i <= num; i++) {
    const nextValue = oldValue + newValue;
    oldValue = newValue;
    newValue = nextValue;

    if (num - i <= 6)
      fibArray.push(newValue);
  }
  return fibArray;
}

module.exports = fibonacci;

