function pairElement(str) {
  
  var arr = [];
  
  for (var i = 0; i < str.length; i++) {
    
    var newArr = str.split("");
    
        
    if (newArr[i] === "A") {
      arr.push(["A","T"]);
     }
    
    else if (newArr[i] === "T") {
      arr.push(["T","A"]);
     }
    
    else if (newArr[i] === "C") {
      arr.push(["C","G"]);
     }
    
    else if (newArr[i] === "G") {
      arr.push(["G","C"]);
     }
    
    
  }
  
  return arr;
}

pairElement("TTGAG");
