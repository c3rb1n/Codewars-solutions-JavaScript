const highAndLow = numbers =>
	`${Math.max.apply(null, numbers.split(" ").map(n => +n))} ${Math.min.apply(null, numbers.split(" ").map(n => +n))}`;