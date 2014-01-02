var fs = require("fs");
var path = require("path");

var data = fs.readFileSync(
  path.join(__dirname, "../files/22.txt"), "utf8"
);

var score = 0;
JSON.parse("[" + data + "]").sort().forEach(function(name, index){
  score += name.split("").reduce(function(n, s){
    return n + (s.charCodeAt(0) - 64);
  }, 0) * (index + 1);
});
console.log(score);
