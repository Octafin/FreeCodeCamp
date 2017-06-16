function sumPrimes(num) {
  
    var sieve = [];
    var primes = [];
    var total = 0;
  
    for (var i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for ( var j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
  
    primes.forEach(function(element){
      
      return total += element;
      
    });
    
  return total;
}





sumPrimes(7);

