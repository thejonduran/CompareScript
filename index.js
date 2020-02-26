var fs = require("fs")

var params = {
	mainFile: "./data2.txt",
	mainFileDelimiter: "\n",
	secondaryFile: "./data1.txt",
	secondaryFileDelimiter: "\n",
	includes: false
}

async function runScript(params){
	var data1 = await getData(params.mainFile)
	console.log("Got Data1...")
	var data2 = await getData(params.secondaryFile)
	console.log("Got Data2...")
	var results = await compareData(data1,data2)
	console.log("Compared Data...")
	await writeToFile(results)
	console.log("Wrote File...")
	console.log(results)
	console.log("Done.")
}

async function getData(file) {
		var data = fs.readFileSync(file, "utf8")
		var splitdata = data.split(params.mainFileDelimiter)
		return splitdata
}

async function compareData(file1, file2) {
		var found = []
		for (var i = 0; i < file1.length; i++) {
			//console.log("Checking: " + file1[i])
			if (file2.includes(file1[i]) === params.includes) {
				found.push(file1[i])
			}
		}
		return found
}

async function writeToFile(array) {
		var file;
		for (var i = 0; i < array.length; i++) {
			file += array[i] + "\n"
		}
		fs.writeFileSync("./results.txt", file, "utf8")
}