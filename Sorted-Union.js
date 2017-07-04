
function uniteUnique(arr) {
  // 1. Create master array & compare array
  var masterArr = [];
  var compareArr = [];
  var testArr = [];
  
  for (var i = 0; i < arguments.length; i++) {
    testArr.push(arguments[i]);
  }
  

  // 2. Push first array into master array
  for (i = 0; i < testArr[0].length; i++) {
    masterArr.push(testArr[0][i]);
  }
  
  // 3. Push other arrays into compare array
  for (i = 1; i < testArr.length; i++) {
    for (var j = 0; j < testArr[i].length; j++) {
      compareArr.push(testArr[i][j]);
    }
  }
  
  // 4. Add new units to master array if unique
  // 5. Use counter to check if number is unique.
  var counter = 0;
  
  for (var k = 0; k < compareArr.length; k++) {
    for (i = 0; i < masterArr.length; i++) {
      if (compareArr[k] !== masterArr[i]) {
          counter++;
        }
    }
    
    if (counter === masterArr.length) {
      masterArr.push(compareArr[k]);
      counter = 0;
    } else {
      counter = 0;
    }
  }
  return masterArr;
} 
  
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
