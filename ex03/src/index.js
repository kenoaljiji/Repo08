var myGlobalVariable;
myGlobalVariable = 10;

var notGlobalVariable;

function function1() {
  //Write code below this line
  notGlobalVariable = 5;
  //Write code above this line
}

function function2() {
  //Write code below this line

  var result = "";
  if (typeof myGlobalVariable != "undefined") {
    result += " myGlobalVariable: " + myGlobalVariable;
  }

  if (typeof notGlobalVariable != "undefined") {
    result += " notGlobalVariable: " + notGlobalVariable;
  }

  //Write code above this line

  console.log(result);
}

function1();
function2();

module.exports = {
  function1,
  function2,
};
