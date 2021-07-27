function printVowels(str){ 
    let strCase = str.toLowerCase();
    let reg = /[aeiou]/ig;  
    let vowels = strCase.match(reg);
    noRepeatVowels = []
    for (let i = 0; i < vowels.length; i++){
        let a = vowels[i];
        if (vowels.indexOf(a) == i ){
            noRepeatVowels.push(a)
        } 
    }console.log("Vowels: " + noRepeatVowels) 
}
printVowels('basicAlly');
