const getMilitaryTime = input => {
	const ampm = input[input.length - 2] + input[input.length - 1];
	let hours = +input.split(":")[0];
	
  	hours = ampm === "AM" ? 
  			  hours >= 12 ? hours - 12 : hours : 
  			  hours >= 12 ? hours : hours + 12;
  			  
  	hours = hours < 10 ? `0${hours}` : hours;

  	return hours + input.slice(2, 8);
};