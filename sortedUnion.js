function uniteUnique() {
  
   var newArr = [];
  
    for (var i = 0; i < arguments.length; i++) {
      for (var y = 0; y < arguments[i].length; y++) {
        if (newArr.indexOf(arguments[i][y]) === -1) {
          
          newArr.push(arguments[i][y]);
        } else {
          
          continue;
          
        }
    
    
    
    }
  }
  
  return newArr;
 
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
