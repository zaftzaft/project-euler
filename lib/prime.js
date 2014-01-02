(function(root){
  // Init
  var Prime = {};

  // f(1)=>[1] f(2)=>[2]
  Prime.factorization = function(n){
    var r = [];
    if(n < 1){
      return NaN;
    }
    while((n /= (r[r.length] = Prime.leastFactor(n))) !== 1);
    return r;
  };

  // l(0)=>0 l(1)=>1 l(2)=>2 l(4)=>2
  Prime.leastFactor = function(n){
    if(!isFinite(n)){
      return NaN;
    }
    if(n === 0){
      return 0;
    }
    if(n % 1 || n * n < 2){
      return n;
    }
    if(n % 2 === 0){
      return 2;
    }
    for(var i = 3,l = Math.sqrt(n)|0;i <= l;i++){
      if(n % i === 0){
        return i;
      }
    }
    return n;
  };

  // Number of divisors
  // d(28) => 6
  Prime.divisors = function(n){
    var a = Prime.factorization(n),r = 1;
    for(i = 0,l = a.length,o = a[0],t = 1;i <= l;i++){
      if(o !== a[i]){
        r *= t;
        o = a[i];
        t = 2;
      }
      else{
        t++;
      }
    }
    return r;
  };
  Prime.divisorsSum = function(m, proper){
    if(m === 1){
      return 1;
    }
    var a = Prime.factorization(m);
    var r = 1,i = 0,l = a.length,o = a[0],t = 1,n = 1;
    for(;i <= l;i++){
      if(o !== a[i]){
        r *= t;
        o = a[i];
        t = 1;
        n = 1;
      }
      t += Math.pow(o, n++);
    }
    return proper ? r - m : r;
  };

  if(typeof exports !== 'undefined'){
    if(typeof module !== 'undefined' && module.exports){
      exports = module.exports = Prime;
    }
  }else{
    root.Prime = Prime;
  }
})(this);
