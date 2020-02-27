var {runScript} = require("./process")

runScript({

	file1: "./data2.txt",
	delim1: "\n",
	file2: "./data1.txt",
	delim2: "\n",
	includes: false
	//true for similarity
	//false for difference

})