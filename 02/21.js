var Prime = require("../lib/prime.js");

var d = [];
var r = 0;

for(var i = 1;i < 1e4;i++){
  d[i] = Prime.divisorsSum(i, true);
  if(d[i]<i && d[d[i]] === i){
    r += i + d[i];
  }
}
console.log(r);
