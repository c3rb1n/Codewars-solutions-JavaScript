const hello = name => 
	`Hello, ${name ? name[0].toUpperCase() + name.toLowerCase().slice(1) : "World"}!`;