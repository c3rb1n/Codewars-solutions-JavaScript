const geometricSequenceElements = (a, r, n) => {
    let result = "";
    let num = a;
  
    for (let i = 0; i < n; i++) {
        if (i === n - 1) {
            result += num;
        } else {
            result += `${num}, `;
            num *= r;
        }
    }
  
    return result;
};