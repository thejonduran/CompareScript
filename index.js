var fs = require("fs")

var params = {
	mainFile:"./data2.txt",
	mainFileDelimiter:"\n",
	secondaryFile:"./data1.txt",
	secondaryFileDelimiter:"\n",
	includes:false
}

//---------------------------------------------------------//

var data1 = (function(){
  var data = fs.readFileSync(params.mainFile,"utf8")
  return data.split(params.mainFileDelimiter)
})()

var data2 = (function(){
  var data = fs.readFileSync(params.secondaryFile,"utf8")
  var splitdata = data.split(params.secondaryFileDelimiter)
  //var formatdata = []
  //for (var i = 0; i < splitdata.length; i++){
  //  formatdata.push(splitdata[i].slice(8,-3))
  //}
  return splitdata
})()

var found = []

for(var i = 0; i < data1.length; i++){
  console.log("Checking: " + data1[i])
  if(data2.includes(data1[i]) === params.includes){
		found.push(data1[i])
	}
}

var foundFile;

for (var j = 0; j < found.length; j++){
	foundFile += found[j] + "\n"
}

fs.writeFileSync("./results.txt",foundFile,"utf8")

console.log(foundFile)