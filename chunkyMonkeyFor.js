
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var new_arr = [];
  
  for (i = 0; i < arr.length; i) {
    
  
  new_arr.push(arr.slice(i, i+=size));
  
  }
  
  return new_arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
