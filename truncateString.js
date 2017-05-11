
function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  if (num <= 3) {
    
    return str.slice(0, num) + "...";
  }
  
  else if (str.length > num) {
    
       
    return str.slice(0, (num-3)) + "..."; 
  }
  
  else {
    return str;
  }
  
  //return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
