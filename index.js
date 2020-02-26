var fs = require("fs")

var params = {
	mainFile: "./data2.txt",
	mainFileDelimiter: "\n",
	secondaryFile: "./data1.txt",
	secondaryFileDelimiter: "\n",
	includes: true
}

//---------------------------------------------------------//

function getData(file) {
	var data = fs.readFileSync(file, "utf8")
	return data.split(params.mainFileDelimiter)
}

function compareData(file1, file2) {
	var found = []
	for (var i = 0; i < file1.length; i++) {
		console.log("Checking: " + file1[i])
		if (file2.includes(file1[i]) === params.includes) {
			found.push(file1[i])
		}
	}
	return found;
}

function writeToFile(array) {
	var file;
	for (var i = 0; i < array.length; i++) {
		file += array[i] + "\n"
	}
	fs.writeFileSync("./results.txt", file, "utf8")
}

writeToFile(compareData(getData(params.mainFile), getData(params.secondaryFile)))