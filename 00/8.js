var fs=require("fs");
var path=require("path");

var d=fs.readFileSync(
	path.join(__dirname,"../files/8.txt"),"utf8"
)
.replace(/\n/g,"");

for(var i=0,m=0,l=d.length-4;i<l;i++){
	var a=d[i]*d[i+1]*d[i+2]*d[i+3]*d[i+4];
	m=m<a?a:m;
}
console.log(m);
