
function spinalCase(str) {
  // 1. Replace easy changes such as spaces and underscores with hyphens
  var newstr1 = str.toLowerCase();
  var newstr2 = newstr1.replace(/_/g, '-');
  var newstr3 = newstr2.replace(/ /g, '-');
  
  // 2. Find which words are capitalized in str that aren't preceded by a space, hyphen or underscore
  var capArr = [];
  for (var i = 1; i < str.length; i++) {
    if (str[i]===str[i].toUpperCase() && str[i] !== "-" && str[i] !== ' ' && str[i] !== '_') {
      if (newstr3[(i-1)]!== "-") {
        capArr.push(i);
      }
    }
  }
  
  // 3. If there are capitalized words in str that aren't preceded by a space, hyphen or underscore, loop through and add a space
  if (capArr.length > 0) {
    // 4. Because length of str will change when spaces are added, start from end of string
    for (var j = capArr.length; j > 0; j--) {
      newstr3 = newstr3.slice(0, (capArr[j-1])) + " " + newstr3.slice(capArr[j-1], (newstr3.length)); 
    }
  }

  // 5. Rereplace spaces with hyphens
  
  var newstr4 = newstr3.replace(/ /g, '-');
  
  
  return newstr4;
}

spinalCase('thisIsSpinalTap');
