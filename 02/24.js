// 2014/01/03 x_x

var fact = function(n){
  for(var i = 1;n;n--){
    i *= n;
  }
  return i;
};

var seq = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var num = 1e6-1;
var str = "";

for(var x = 0, l = seq.length;x < l;x++){
  var len = seq.length;
  var f = fact(len);
  var g = fact(len - 1);
  var u = f / len;
  for(var k = u, i = 0;k <= f;k += u, i++){
    if(num <= k){
      str += seq.splice(i, 1);
      break;
    }
    else if(f < num){
      str += seq.splice(-1, 1);
      break;
    }
  }
  num -= g;
}
console.log(str);
