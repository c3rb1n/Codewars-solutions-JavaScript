const checkExam = (array1, array2) => 0 > 
	array1.map((s, index) => array2[index] ? array2[index] == s ? 4 : -1 : 0)
		.reduce((a, b) => a + b) ? 0 : 
	array1.map((s, index) => array2[index] ? array2[index] == s ? 4 : -1 : 0)
        .reduce((a, b) => a + b);