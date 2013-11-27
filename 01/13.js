var fs=require("fs");
var path=require("path");
var Large=require("../lib/large.js");

console.log(Large.unite(fs.readFileSync(
	path.join(__dirname,"../files/13.txt"),"utf8"
)
.split("\n")
.slice(0,-1)
.reduce(function(a,b){
	return Large.largeSum(a,Large.divide(b));
},["0"])).slice(0,10));
