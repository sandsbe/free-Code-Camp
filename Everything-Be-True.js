
function truthCheck(collection, pre) {
  // 1. For loop through first argument
  for (var i = 0; i < collection.length; i++) {
    // 2. Check for if it has object property and if it is truthy
    if (collection[i].hasOwnProperty(pre) && collection[i][pre]) {      
    } else {
      return false;
    }
  }
  
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
