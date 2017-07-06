
function smallestCommons(arr) {
  // 1. Get range of numbers to work from & ID larger numbers
  
  var arrRange = [];
  var range = Math.abs(arr[0]-arr[1]);
  var largerNum;
  
  for (var i = 0; i <= range; i++) {
    if (arr[0] <= arr[1]) {
      arrRange.push(arr[0]+i);
    } else {
      arrRange.push(arr[1]+i);
    }
  }
  
  if (arr[0] < arr[1]) {
    largerNum = arr[1];
  } else {
    largerNum = arr[0];
  }
  
  // 2. Start with largest number
  // Continue multiplying until it is a multiple of all numbers
  
  var j = arrRange[range-2];
  var counter = 0;
  i = 0;
  
  while (i < arrRange.length-1) {
    if (largerNum*j % arrRange[i] === 0) {
      i++;
    } else {
      j++;
      i = 0;
    }
  }
  
  return largerNum*j;
}



smallestCommons([5, 1]);
