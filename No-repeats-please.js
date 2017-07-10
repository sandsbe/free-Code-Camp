
function permAlone(str) {
  var strLen = str.length;
  var arr = str.split("");
  var c = [];
  var counter = 0;
  
  // Function to swap array's variables' content.
  function swap(first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }

  for (var i = 0; i < strLen; i ++){
      c[i] = 0;
  }
  
  //Check the 1st string for repeated consecutive characters.
  if (!/(.)\1+/g.test(str)) counter += 1;
  
  // Generate arrays of permutations using the Heap's non-recursive algorithm.
  // https://en.wikipedia.org/wiki/Heap%27s_algorithm <- almost verbatum to algo
  // Need to read http://speakingjs.com/es5/ch19.html
  i = 0;
  while (i < strLen){
      if (c[i] < i){
        if (i % 2 === 0) swap(0, i);
          else swap(c[i], i);
  //Check repeated consecutive characters and increment the counter for unique strings.
        if (!/(.)\1+/g.test(arr.join(""))) counter += 1;
        c[i] += 1;
        i = 0;
      } else {
            c[i] = 0;
            i += 1;
        }
  }
  return counter;

}

permAlone('aab');
