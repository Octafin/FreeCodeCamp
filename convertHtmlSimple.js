function convertHTML(str) {
  
    
 str = str.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  
  
  return str;
   
}

convertHTML("Dolce & Gabbana");
