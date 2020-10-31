const points = games => games.map(g => g.split(":")
	.reduce((a, b) => a > b ? 3 : a < b ? 0 : 1))
		.reduce((a, b) => a + b);