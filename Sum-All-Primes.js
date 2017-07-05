
function sumPrimes(num) {
  // 1. Build array of prime numbers
  var primes = [2];
  var counter = 0;
  var sumtotal = 0;
  
  for (var i = 3; i <= num; i++) {
    for (var j = 0; j < primes.length; j++) {
      if (i % primes[j] !== 0) {
        counter++;
      } else {
        break;
      }
    }
    if (counter == primes.length) {
      primes.push(i);
    }
    counter = 0;
  }
  
  // 2. Sum prime numbers
  for (var k = 0; k < primes.length; k++) {
    sumtotal += primes[k];
  }
  
  return sumtotal;
}

sumPrimes(977);
