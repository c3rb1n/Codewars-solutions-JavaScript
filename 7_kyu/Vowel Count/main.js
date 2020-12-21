const getCount = str => str.split("").filter(el => el === "a" ||
                                                   el === "e" ||
                                                   el === "i" ||
                                                   el === "o" ||
                                                   el === "u").length;