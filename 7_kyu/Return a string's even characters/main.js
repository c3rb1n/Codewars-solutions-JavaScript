const evenChars = string => string.length < 2 || string.length > 100 ? 
    "invalid string" :
    string.split("").filter((el, index) => index % 2 !== 0);