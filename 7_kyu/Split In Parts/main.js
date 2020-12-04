const splitInParts = (s, partLength) => {
    let result = [];
  
    for (let i = 0; i < s.length / partLength; i++) {
        result.push(s.slice(i * partLength, (i + 1) * partLength))
    }
  
    return result.join(" ");
};