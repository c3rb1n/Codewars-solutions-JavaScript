const reverseWords = str => 
    str.split(" ").map(w => w.split("").reverse().join("")).join(" ");