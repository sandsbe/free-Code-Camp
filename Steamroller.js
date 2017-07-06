
function steamrollArray(arr) {
  // Create answer array to push elements
  var ansArr = [];
  
  // 1st level search
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // 2nd level 
      for (var j = 0; j < arr[i].length; j++) {
        if (Array.isArray(arr[i][j])) {
          // 3rd level
          for (var k = 0; k < arr[i][j].length; k++) {
            if (Array.isArray(arr[i][j][k])) {
              // 4th level
              for (var l = 0; l < arr[i][j][k].length; l++) {
                if (Array.isArray(arr[i][j][k][l])) {
                  
                } else {
                  ansArr.push(arr[i][j][k][l]);
                }
              }
            } else {
              ansArr.push(arr[i][j][k]);
            }
          }
        } else {
          ansArr.push(arr[i][j]);
        }
      }
    } else {
      ansArr.push(arr[i]);
    }
  }
  
  return ansArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
