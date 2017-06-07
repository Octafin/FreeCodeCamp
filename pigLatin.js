function translatePigLatin(str) {
  
  if (str.charAt(0).match(/[aeiou]/gi)){
    return str + "way";
  
  } else {
    
    
    var firstVowelIndex = str.indexOf(str.match(/[aeiou]/gi)[0]);
    
    var toEnd = str.slice(0, firstVowelIndex);
    
    var toAdd = str.substring(firstVowelIndex);
    
    return toAdd + toEnd + "ay";
         
    
  }
     
  
}

translatePigLatin("glove");
