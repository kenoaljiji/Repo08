function randomRangeNumber(minNumber, maxNumber) {
  //Only change code below this line

  //Only change code above this line

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

console.log(randomRangeNumber(3, 10));

module.exports = randomRangeNumber;
