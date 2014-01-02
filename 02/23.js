var Prime = require("../lib/prime.js");

var abundant = [];
var sumOfTwo = {};
var limit = 28123;
var total = 0;

for(var i = 12;i < limit;i++){
  if(i < Prime.divisorsSum(i, true)){
    abundant.push(i);
  }
}

for(var i = 0, t = 0, l = abundant.length;t < l;i++){
  var n = abundant[i] + abundant[t];
  if(n > limit){
    t++;
    i = 0;
  }
  else{
    sumOfTwo[n] = 1;
  }
}

for(var i = 1;i < limit;i++){
  if(!sumOfTwo[i]){
    total += i;
  }
}
console.log(total);
