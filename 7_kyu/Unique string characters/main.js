const solve = (a, b) => a.split("").filter(el => !b.includes(el)).join("") +
                        b.split("").filter(el => !a.includes(el)).join("");