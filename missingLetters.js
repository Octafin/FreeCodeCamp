
function fearNotLetter(str) {
  
  var newStr;
  
  
  
  for (var i = 0; i < str.length; i++) {
    
        
    newStr = str.charCodeAt(i);
    
    if (newStr !== str.charCodeAt(0) + i) {
      
        var result = String.fromCharCode(newStr - 1);
      
        return result;
           
    }
      
  }
  
}

fearNotLetter("abce");
