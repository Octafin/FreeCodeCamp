function myReplace(str, before, after) {
  
  var newStr;
    
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
    newStr = str.replace(before, after);
  } else {
    
    newStr = str.replace(before, after);
    
  }
  
  
  return newStr;
  
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
