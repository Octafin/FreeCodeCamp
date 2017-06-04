var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 20, 10, 9, 5, 4, 1];
var romans = ["M", "CM", "D", "CD" ,"C", "XC", "L", "XL", "XX", "X", "IX", "V", "IV", "I"];



function convertToRoman(num) { 
  
  var makeRoman = "";
  
  for ( var i = 0; i < numbers.length; i++) {
    while ( numbers[i] <= num){
      makeRoman += romans[i];
      num -= numbers[i]; 
    }
  }
  
  
  
 return makeRoman;
}

convertToRoman(36);
