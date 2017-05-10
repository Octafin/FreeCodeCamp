function titleCase(str) {
  
  var low = str.toLowerCase();
  
  var arr = low.split(" ");
  
    
  for (var i = 0; i < arr.length; i++) {
    
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);  
   
  }

  return arr.join(" ");
}



titleCase("I'm a litTle tea pot");
