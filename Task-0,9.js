function printVowels(str){
    var strArr = str.split(""); 
    var reg = /[aeiou]/ig;  
    var vowels = str.match(reg); 
    return 'Vowels: ' + vowels
}
printVowels('vowels');
