const oddOrEven = array => !array.length ? "even" : 
      array.reduce((a, b) => a + b) % 2 === 0 ? "even" : "odd";