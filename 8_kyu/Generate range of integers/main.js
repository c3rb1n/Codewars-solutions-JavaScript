const generateRange = (min, max, step) => {
    let result = [];
    
    for (min; min <= max; min += step) {
        result.push(min);
    }
    
    return result;
};