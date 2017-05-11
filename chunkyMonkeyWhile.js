function chunkArrayInGroups(arr, size) {
  // Break it up.
  var new_arr = [];
  
  var i = 0;
  
  while (i < arr.length ) {
    
  
  new_arr.push(arr.slice(i, i+=size));
  
  }
  
  return new_arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
