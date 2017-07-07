// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

function updateInventory(arr1, arr2) {
// 1. Write for loops to see what inventory is missing and what needs updating
  // Outter loop should be the newInv to compare against and add to curInv
  // Use a counter
  var counter = 0;
  for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
      // Compare the inventory, not the quantity
      if (arr2[i][1] !== arr1[j][1]) {
        // if doesn't equal, count to compare to see if it should be added
        counter++;
      } else {
        // If it is already in inventory, update the quantity
        arr1[j][0] = arr1[j][0]+arr2[i][0];
      }
    }
    if (counter===arr1.length) {
      arr1.push(arr2[i]);
    }
    counter = 0;
  }
// 2. Sort arr1 using a compare function
  function compare (a, b) {
    if (a[1] <= b[1]) {
      return -1;
    } else {
      return 1;
    }
  }
  
  arr1.sort(compare);

  return arr1;
}



updateInventory(curInv, newInv);
