const strCount = (str, letter) => 
    str.length ? str.split("").filter(s => s === letter).length : 0;