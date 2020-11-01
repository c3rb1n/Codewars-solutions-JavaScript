const findLongest = str => 
	str.split(" ").reduce((a, b) => a.length > b.length ? a : b).length;