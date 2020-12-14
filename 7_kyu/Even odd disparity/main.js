const solve = a => {
    let even = 0;
    let odd = 0;
  
    for (let i = 0; i < a.length; i++) {
        if (typeof(a[i]) === "number") {
            if (a[i] % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }
    
    return even - odd;
};