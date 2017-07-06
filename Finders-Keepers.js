
function findElement(arr, func) {
  // 1. Default num return is undefined.
  var num;
  
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      break;
    }
  }
  return num;
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });
