var Prime=require("../lib/prime.js");

for(var n=1,k;Prime.divisors(k=(n*n+n)/2)<500;n++);
console.log(k);
