const solve = s => 
    s.split("").filter(el => el.toUpperCase() === el).length > s.length / 2 ? 
    s.toUpperCase() : s.toLowerCase();