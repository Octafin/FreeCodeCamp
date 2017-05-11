// Global vars don't work here

function largestOfFour(arr) {
  
  var new_arr = [];
  
  for (var i = 0; i < arr.length; i++) {
    
   arr[i].sort(function(a, b){ return b - a;});
              
     }
  
  for (var j = 0; j < arr.length; j++) {
    
    new_arr.push(arr[j][0]);
    
  }
     
  
  return new_arr;
  
}

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
