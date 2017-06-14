function sumFibs(num) {
  
  var fib = [1,1];
  
  var counter = 0;
  
  for (var i = 0; i <= num;) {
    
    i = fib[fib.length-1] + fib[fib.length-2];
    
    fib.push(i);
  }
  
  for (var y = 0; y < fib.length-1; y++) {
    
    if( fib[y] % 2 !== 0) {
      
      counter = counter + fib[y];
    }
    
      
        
  }
  
  return counter ;
}

sumFibs(75024);
