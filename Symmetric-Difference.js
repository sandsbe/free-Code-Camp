
function sym(args) {
  // 1. Create array from arguments
  var arr = Array.from(arguments);
    
  function symDiff (arr1, arr2) {
    var result = [];
    
    arr1.forEach(function(item) {
            if (arr2.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

    arr2.forEach(function(item) {
            if (arr1.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
  }
  
  return arr.reduce(symDiff);
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
