
function translatePigLatin(str) {
  // 1. Check to see if string starts with consonant, add way to end
  
  switch (str[0]) {
    case 'a':
    case 'A':
    case 'e':
    case "E":
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
      str += 'way';
      break;
    default:
   // 2. Find vowel, do pig latin
      var i = 1;
      var j = 0;
      var pig1;
      var pig2;
      while (j < 1) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
          pig1 = str.slice(0, i);
          pig2 = str.slice(i, str.length);
          str = pig2 + pig1 + 'ay';
          j++;
        } else {
          i++;
        }
      }
  }
  
  
  return str;
}

translatePigLatin("glove");
