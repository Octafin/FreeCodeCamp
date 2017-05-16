
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  // Push num into array
  arr.push(num);
  
  // Sort array ascending
  arr.sort(function(a, b) {
    return a-b;
  });
  
  // Obtain index of an array value
  var result = arr.indexOf(num);
  
  // Return index of array value  
  return result;
  
}

getIndexToIns([3, 10, 5], 50);
