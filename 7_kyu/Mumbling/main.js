const accum = s => 
    s.toUpperCase().split("")
        .map((l, index) => l + l.repeat(index).toLowerCase()).join("-");