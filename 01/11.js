var fs=require("fs");
var path=require("path");

// p[ y ][ x ]
var p=fs.readFileSync(
	path.join(__dirname,"../files/11.txt"),"utf8"
)
.split("\n")
.slice(0,-1)
.map(function(a){
	return a.split(" ").map(function(b){
		return parseInt(b,10);
	});
});

for(var b=0,x=0,y=0;y<20;x++){
	b=Math.max(
		b,
		y<17?p[y][x]*p[y+1][x]*p[y+2][x]*p[y+3][x]:0,
		x<17?p[y][x]*p[y][x+1]*p[y][x+2]*p[y][x+3]:0,
		y<17&&x<17?p[y][x+3]*p[y+1][x+2]*p[y+2][x+1]*p[y+3][x]:0,
		y<17&&x<17?p[y][x]*p[y+1][x+1]*p[y+2][x+2]*p[y+3][x+3]:0
	);
	if(x===19){
		y++;
		x=0;
	}
}
console.log(b);
