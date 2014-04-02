function rd(d){
  for(var i = 10, n = 10, s = "", m = {};i--;){
    if((n / (d * i)) >= 1){
      if(m[n]){
        break;
      }
      m[n] = 1;
      if(i === 0){
        n *= 10;
      }
      else{
        n = n % (d * i) * 10;
      }
      s += i;
      i = 10;
    }
  }
  return s;
}

for(var i = 2, m = 0, x;i < 1000;i++){
  var s = rd(i).length;
  s > m && (m = s, x = i);
}
console.log(x);
