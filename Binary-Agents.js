
function binaryAgent(str) {
  // 1. Put string into array
  var arr = [];
  var arr2 = [];
  arr = str.split(' ');
  str = '';
  // 2. Loop through CharCode
  // parseInt is important, not sure what's going on
  // also need two arrays for some reason
  for (var i = 0; i < arr.length; i++) {
    arr2.push(String.fromCharCode(parseInt(arr[i], 2)));
  }
  
  str = arr2.join('');
  
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
