
function spinalCase(str) {
    
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/ |_/g, "-");
  
  return str;
}

spinalCase('thisIsSpinalTap');
