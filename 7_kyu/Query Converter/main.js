const solution = str => {
    let convertedStr = str.split("?")[1].split("&").map(el => el.split("="));
    let result = {};
  
    for (let i = 0; i < convertedStr.length; i++) {
        result[convertedStr[i][0]] = convertedStr[i][1];
    }
  
    return result;
};