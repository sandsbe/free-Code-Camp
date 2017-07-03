/*
a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
*/

function fearNotLetter(str) {
  // 1. Create comparison string & count array
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var counter = [];
  var answer;
  var k = 1;
  
  // 2. Find where string starts in alphabet
  for (var j = 0; j < alphabet.length; j++) {
    if (str[0] === alphabet[j]) {
        counter.push(j);
        break;
      }
  }
  // 3. Find where string ends in alphabet
  for (j = 0; j < alphabet.length; j++) {
    if (str[(str.length-1)] == alphabet[j]) {
      counter.push(j);
      break;
    }
  }
  // 4. Return undefined if string length equal to counter
  if ((str.length-1) === (counter[1]-counter[0])) {
    answer = undefined;
    return answer;
  }
  // 5. Find and return missing letter
  for (var i = counter[0]; i < counter[1]-counter[0]; i++) {
    if (str[k] === alphabet[i]) {
      k++;
    } else {
      answer = alphabet[i];
    }
  }
  return answer;
}

fearNotLetter("yz");
