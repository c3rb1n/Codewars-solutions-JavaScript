const solve = s => {
    let lowerCaseCharacters = 0;
    let upperCaseCharacters = 0;
  
    for (let i = 0; i < s.length; i++) {
        if (s[i] < s[i].toLowerCase())  {
            upperCaseCharacters++;
        } else {
            lowerCaseCharacters++;
        }
    }
  
    return upperCaseCharacters > lowerCaseCharacters ? s.toUpperCase() : s.toLowerCase();
};