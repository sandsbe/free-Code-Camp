
function sumFibs(num) {
  // 1. Determine how many numbers
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
  var counterA = 0;
  var counterB = 1;
  var counterC = 1;
  var fibArr = [];
  var subtotal = 0;
  
  while (counterC <= num) {
    counterC = counterA + counterB;
    fibArr.push(counterC);
    counterA = counterB;
    counterB = counterC;
  }
  
  // 2. Find the odd numbers
  for (var i = 0; i < fibArr.length-1; i++) {
    if (fibArr[i] % 2 !== 0) {
      subtotal += fibArr[i];
    }
  }
  
  return subtotal+1;
}

sumFibs(75025);
