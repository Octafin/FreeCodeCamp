
function palindrome(str) {
  // Good luck!
  
  //var digits = /\d/g;
  
  var spaces = /\s/g;
  
  var word = /\W/g;
  
  var under = /\_/g;
  
  var pal = str.replace(spaces, "").replace(word, "").toLowerCase().replace(under, "");
  
  var lap = pal.split("").reverse();
  
  var test = lap.join("");
  
  if (test === pal) {
    return true;
  }
  
  else {
    return false;
  }
  
  //return pal;
  
  
  
}



palindrome("1 eye for of 1 eye.");
