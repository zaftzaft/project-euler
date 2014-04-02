var fs = require("fs");
var path = require("path");

var a = fs.readFileSync(
  path.join(__dirname, "../files/67.txt"), "utf8"
).split("\n").slice(0, -1).map(function(s){
  return s.split(" ").map(function(n){
    return +n;
  });
});

for(var i = a.length - 2;i >= 0;i--){
  for(var j = 0, l = a[i].length;j < l;j++){
    a[i][j] += Math.max(a[i+1][j], a[i+1][j+1]);
  }
}

console.log(a[0][0]);

