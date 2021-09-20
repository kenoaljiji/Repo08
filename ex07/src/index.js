var sum = 0;

function addThree() {
  //Only change code below this line
  sum = sum + 3;
  //Only change code above this line
  console.log("addThree: " + sum);
}

function addFive() {
  //Only change code below this line
  sum = sum + 5;
  //Only change code above this line
  console.log("addFive: " + sum);
}

//Only change code below this line
addThree();
addFive();

//Only change code above this line

module.exports = {
  addThree,
  addFive,
};
