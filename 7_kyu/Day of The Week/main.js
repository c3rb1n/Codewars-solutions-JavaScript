const getDayOfTheWeek = date => {
  	let day = new Date(date).getDay();
  
  	return day === 0 ? "Sunday" :
  		   day === 1 ? "Monday" :
  		   day === 2 ? "Tuesday" :
  		   day === 3 ? "Wednesday" :
  		   day === 4 ? "Thursday" :
  		   day === 5 ? "Friday" : "Saturday";
};