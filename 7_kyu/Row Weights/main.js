const rowWeights = array => [
    array.filter((el, index) => index % 2 === 0).reduce((a, b) => a + b, 0),
    array.filter((el, index) => index % 2 !== 0).reduce((a, b) => a + b, 0)
];