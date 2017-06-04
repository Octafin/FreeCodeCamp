function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  
  // Same, same; but different.
  
  newArr = newArr.filter(function(a){
    
    if ((arr1.includes(a) && arr2.includes(a)) === false){
          
    return (a);
    
    }
  });
  
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
