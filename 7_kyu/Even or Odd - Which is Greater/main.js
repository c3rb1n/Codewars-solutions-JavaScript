const evenOrOdd = str => {
    let numArray = str.split("");
    let even = 0;
    let odd = 0;
  
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0) {
            even += +numArray[i];
        } else {
            odd += +numArray[i]
        }
    }
  
    return even === odd ? "Even and Odd are the same" : 
           even > odd ? "Even is greater than Odd" : "Odd is greater than Even";
};