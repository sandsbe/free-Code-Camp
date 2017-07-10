
function pairwise(arr, arg) {
  var indices = [];
  var tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    tempArr.push(arr[i]);
  }

  //Sum, compare & push indices, but only if index unique
  for (i = 0; i < arr.length; i++) {
    for (var j = 0; j < tempArr.length; j++) {      
      if (arr[i]+tempArr[j] === arg && i !== j && indices.indexOf(j) === -1 && indices.indexOf(i) === -1) {
        indices.push(j);
        indices.push(i);
      }
    }
  }
  
  // Sum the array with reduce
  var sumIndices = indices.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  
  return sumIndices;
}

pairwise([0, 0, 0, 0, 1, 1], 1);
