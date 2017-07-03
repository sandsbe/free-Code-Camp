
function myReplace(str, before, after) {
  // 1. Turn string into an array using split
  var arr = str.split(' ');
  var newAfter;
  var nextAfter;
  
  // 2. Check case of words
  if (before[0] === before[0].toUpperCase()) {
    if (after[0] !== after[0].toUpperCase()) {
      // if before is Uppercase & after is not, make after Uppercase
      newAfter = after[0].toUpperCase();
      nextAfter = after.slice(1, after.length);
      after = newAfter + nextAfter;
    }
  } else {
    if (after[0] === after[0].toUpperCase()) {
      // if before is Lowercase & after is not, make after Lowercase
      newAfter = after[0].toLowerCase();
      nextAfter = after.slice(1, after.length);
      after = newAfter + nextAfter;
    }
  }
  
  // 3. For loop through array to search and replace word
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == before) {
      
      arr[i] = after;
    }
  }
  
  // 3. Turn array into string using join
  
  str = arr.join(' ');
  
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
