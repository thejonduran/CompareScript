var fs = require("fs")

var params = {
	mainFile: "./data2.txt",
	mainFileDelimiter: "\n",
	secondaryFile: "./data1.txt",
	secondaryFileDelimiter: "\n",
	includes: false
}

//---------------------------------------------------------//

function getData(file) {
	return new Promise(function(resolve) {
		var data = fs.readFileSync(file, "utf8")
		var splitdata = data.split(params.mainFileDelimiter)
		resolve(splitdata)
	})
}

function compareData(file1, file2) {
	return new Promise(function(resolve) {
		var found = []
		for (var i = 0; i < file1.length; i++) {
			console.log("Checking: " + file1[i])
			if (file2.includes(file1[i]) === params.includes) {
				found.push(file1[i])
			}
		}
		resolve(found)
	})
}

function writeToFile(array) {
	return new Promise(function(resolve) {
		var file;
		for (var i = 0; i < array.length; i++) {
			file += array[i] + "\n"
		}
		fs.writeFileSync("./results.txt", file, "utf8")
		resolve(console.log(file))
	})
}

async function runScript(){
	var data1 = await getData(params.mainFile)
	var data2 = await getData(params.secondaryFile)
	var results = await compareData(data1,data2)
	await writeToFile(results)
	console.log(results)
}

runScript()