function printVowels(str){ 
    var reg = /[aeiou]/ig;  
    var vowels = str.match(reg); 
    return 'Vowels: ' + vowels
}
printVowels('vowels');
