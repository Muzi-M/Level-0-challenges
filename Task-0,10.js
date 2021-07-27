function commonChars(str1, str2) {
    let dict = {};
    
    for(let i=0; i < str1.length; i++) {
      dict[str1.charAt(i)] = 1;
    }
   
    let commonLettrs =[]; 
    for(let i=0; i < str2.length; i++) {
      if( dict[str2.charAt(i)] == 1) {
        commonLettrs.push(str2.charAt(i)); 
      }
    }
    let noRepeatLttrs = [];
    for (let i = 0; i < commonLettrs.length; i++){
      let a = commonLettrs[i];
      if (commonLettrs.indexOf(a) == i){
        noRepeatLttrs.push(a);
      }
    }
    dict = noRepeatLttrs.join(",");
    console.log('Common letters: ' + dict);
  }
  
  commonChars('string', 'strong');