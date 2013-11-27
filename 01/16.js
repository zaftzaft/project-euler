var Large=require("../lib/large.js");

console.log(Large.pow(2,1e3).split("").reduce(function(a,b){
	return +a+(+b);
},0));
