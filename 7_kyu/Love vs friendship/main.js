const wordsToMarks = string => 
    string.split("").reduce((a, b) => a += b.charCodeAt() - 96, 0);