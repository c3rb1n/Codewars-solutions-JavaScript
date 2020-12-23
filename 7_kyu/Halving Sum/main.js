const halvingSum = n => {
    let result = 0;
  
    for (let i = n; i >= 1; i /= 2) {
        result += Math.floor(i);
    }
  
    return result;
};