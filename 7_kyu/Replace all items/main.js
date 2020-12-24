const replaceAll = (seq, find, replace) => 
    Array.isArray(seq) ? seq.map(el => el === find ? replace : el) : 
    seq.split(find).join(replace);