function commonChars(str1, str2) {
    var dict = {};
    
    for(var i=0; i < str1.length; i++) {
      dict[str1.charAt(i)] = 1;
    }
   
    var commonLettrs =[]; 
    for(var i=0; i < str2.length; i++) {
      if( dict[str2.charAt(i)] == 1) {
        commonLettrs.push(str2.charAt(i)); 
      }
    }
    
    dict = commonLettrs.join(",");
    console.log('Common letters: ' + dict);
  }
  
  commonChars('string', 'strong');
