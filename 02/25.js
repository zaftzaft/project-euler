var Large = require("../lib/large.js");

function high(a, b, i){
  a = Large.divide(a+"");
  b = Large.divide(b+"");
  for(;;i++){
    b = Large.largeSum(a, a = b);
    if(Large.unite(a).length > 999){
      console.log(i);
      break;
    }
  }
}

for(var a = 1, b = 1, i = 3;;i++){
  b = a + (a = b);
  if(b > 1e15){
    high(a, b, i);
    break;
  }
}
