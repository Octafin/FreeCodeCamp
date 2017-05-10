function findLongestWord(str) {
  
  var arr = str.split(" ");
  
  var len = [];
  
  for (var i = 0; i < arr.length; i++){
    
    len.push(arr[i].length);
  }
  
  len.sort(function(a, b){return a - b;});
  
  //return len;
    
  return len[len.length - 1]; 
    
    
  
  //return len[i].length;
  //return arr;
  //return str.length;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
