function localScope() {
  //Write code below this line

  var myVariable = "I am here!";

  if (typeof myVariable != "undefined") {
    console.log("outside localScope", myVariable);
  } else {
    console.log("outside localScope UNDEFINED!!!");
  }

  //Write code above this line
}

localScope();

module.exports = localScope;
