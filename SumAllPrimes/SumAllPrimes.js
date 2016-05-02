function sumPrimes(num) {
  var result = [2];
  if (num < 2){
    return 0;
  }
  //loop starting at 3 since 2 is prime and nothing else below it
  for (var i = 3; i <= num; i += 2) {
    if (isPrime(i)) result.push(i);
  }
  return result.reduce(function(a, b) {
    return a + b;
  });
  //prime function
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (var i = 2; i <= num / 2; i++) {
      if (num % i === 0){
        return false;
      }
    }
    return true;
  }
}

sumPrimes(10);
