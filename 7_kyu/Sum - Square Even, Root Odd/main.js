const sumSquareEvenRootOdd = ns => +ns
    .map(el => el % 2 === 0 ? el ** 2 : Math.sqrt(el))
    .reduce((a, b) => a + b).toFixed(2);