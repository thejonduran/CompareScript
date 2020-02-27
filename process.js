const fs = require("fs")

const getData = (file, delim) => {
		console.log("Importing File: " + file)
		var data = fs.readFileSync(file, "utf8")
		var splitdata = data.split(delim)
		return splitdata
}

const compareData = (data1, data2, includes) => {
	console.log("Comparing Data...")
	var match = []
	for (var i = 0; i < data1.length; i++) {
		if (data2.includes(data1[i]) === includes) {
			match.push(data1[i])
		}
	}
	return match
}

const writeToFile = (array) => {
	console.log("Writing to File...")
	var file;
	for (var i = 0; i < array.length; i++) {
		file += array[i] + "\n"
	}
	fs.writeFileSync("./results.txt", file, "utf8")
	console.log("Done.")
}

exports.runScript = (params) => {
	var data1 = getData(params.file1, params.delim1)
	var data2 = getData(params.file2, params.delim2)
	var results = compareData(data1, data2, params.includes)
	writeToFile(results)
}
