function sumAll(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  
  var i = min + 1;
  var counter = 0;
  
  while (i < max) {
    arr.push(i);
    i ++;
  }
  
  for ( z = 0; z < arr.length; z++) {
    counter += arr[z];
  }
  
  return counter;
}

sumAll([1, 4]);
