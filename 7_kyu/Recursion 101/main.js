const solve = (a, b) => {
    let numA = a;
    let numB = b;
  
    if (numA === 0 || numB === 0) {
        return [numA, numB];
    } else if (numA >= 2 * numB) {
        numA -= 2 * numB;
        return solve(numA, numB);
    } else if (numB >= 2 * numA) {
        numB -= 2 * numA;
        return solve(numA, numB);
    } else {
        return [numA, numB];
    }
};