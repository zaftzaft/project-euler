var pounds = [1, 2, 5, 10, 20, 50, 100, 200];
var amount = 200;

function sum(pnd){
  for(var total = 0, i = 0, l = pounds.length;i < l;i++){
    total += (pnd[i] || 0) * pounds[i];
  }
  return total;
}

function f(pnd, i){
  pnd[i] = (amount - sum(pnd)) / pounds[i] | 0;
  if(sum(pnd) === 200){
    console.log(pnd);
    //f([], i - 1);
  }
  else{
    f(pnd, i - 1);
  }
}

f([], pounds.length);
