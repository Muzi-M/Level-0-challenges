function printVowels(str){ 
    var reg = /[aeiou]/ig;  
    var vowels = str.match(reg); 
    console.log('Vowels: ' + vowels)
}
printVowels('vowels');
