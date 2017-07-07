//jshint esversion:6

function checkCashRegister(price, cash, cid) {
// 1. Declare and initialize all necessary variables
  // We want to work with integers, change will be in decimals, need to convert 
  // May or may not need to round change conversion
  var change = Math.round((cash - price) * 100);
  // Use value to count money
  var value = 0;
  // Create array to return change in coin and bills
  var actualChange = [];
  // Create array of currency in integers
  var currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  // Write function that converts value of cid into integers
  // Use forEach method and arrow function
  // forEach executes a provided function once for each array element.
  cid.forEach(val => val[1] = Math.round(val[1] * 100));
  
  // Write a function to check if there is sufficient change in drawer
  function enoughFund(cid) {
  // Use filter method to create a new array with elements that pass test implemented by the provided function
  // test is 
    var sum = cid.filter((val, i) => change >= currency[i]);
    return sum.reduce((a, b) => {
      return a + b[1];
    }, 0);
  }
  
// 2. Control flow
  if (enoughFund(cid) < change)
    return "Insufficient Funds";
  else if (enoughFund(cid) === change)
    return "Closed";
  else {
    for (var i = cid.length - 1; i > -1; i--) {
      value = 0;
      while (cid[i][1] > 0 && change >= currency[i]) {
        //update everything as long as condition is true
        change -= currency[i];
        cid[i][1] -= currency[i];
        //value keeps track of the amount of each currency unit as change
        value += currency[i];
      }
      if (value)
        actualChange.push([cid[i][0], value]);
    }
  }
  //divide each array by 100 to display a proper money format
  actualChange.forEach(val => val[1] = (val[1] / 100));
  return actualChange;
  
}


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
