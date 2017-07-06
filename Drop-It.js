
function dropElements(arr, func) {
 // 1. While loop through array
  var i = 0;
  while (func(arr[i]) === false) {
    arr.shift();
  }
  
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
