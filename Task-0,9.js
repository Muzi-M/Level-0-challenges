function printVowels(str){ 
    var reg = /[aeiou]/ig;  
    var vowels = str.match(reg);
    noRepeatVowels = []
    for (var i = 0; i < vowels.length; i++){
        var a = vowels[i];
        if (vowels.indexOf(a) == i ){
            noRepeatVowels.push(a)
        } 
    }console.log("Vowels: " + noRepeatVowels) 
}
printVowels('basically');

