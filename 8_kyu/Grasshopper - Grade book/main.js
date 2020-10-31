const getGrade = (s1, s2, s3) => {
	const meanScore = (s1 + s2 + s3) / 3;

	return meanScore <= 100 && meanScore >= 90 ? "A" : 
		   meanScore >= 80 ? "B" : 
           meanScore >= 70 ? "C" :
           meanScore >= 60 ? "D" : "F";
};