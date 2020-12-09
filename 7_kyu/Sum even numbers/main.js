const sumEvenNumbers = input => input
    .filter(el => Number.isInteger(el) && el % 2 === 0)
    .reduce((a, b) => a + b);