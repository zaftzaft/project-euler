var Large = require("../lib/large.js");

for(var n = 100, t = Large.divide(n+"");--n;){
  t = Large.largeMultiply(t, Large.divide(n+"", 1));
}

console.log(Large.unite(t).split("").reduce(function(n, m){
  return n + (+m);
}, 0));
