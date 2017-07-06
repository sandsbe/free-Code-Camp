
function telephoneCheck(str) {
  // 1. Remove dashes, parentheses, and spaces
  var newString = str.replace(/-|[()]|\s/g,'');
  
  // 2. Check that all digits are numbers
  var numCheck = Number(newString);
  if (typeof numCheck === 'number') {
    } else {
      return false;
    }
  
  // 3. Check length and country code
  if (newString.length === 10 || (newString.length === 11 && str[0] === '1')) {
  } else {
    return false;
  }
  
  // 4. Address parentheses issues
  var counter = 0;
  for (var i = 0; i < 7; i ++) {
    if (str[i] === '(' || str[i] === ')') {
      counter++;
    }
  }
  if (counter === 1) {
      return false;
  }
  return true;
}


telephoneCheck("(555)-555 5555");
