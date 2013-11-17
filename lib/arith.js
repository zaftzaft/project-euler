(function(root){
	// Arithmetic
	var Arith={};

	// G.C.D
	Arith.gcd=function(m,n,t){
		m<n&&(t=n,n=m,m=t);
		while(n=m%(m=n));
		return m;
	};

	// L.C.M
	Arith.lcm=function(m,n){
		return m*n/Arith.gcd(m,n);
	};

	if(typeof exports!=='undefined'){
		if(typeof module!=='undefined'&&module.exports){
			exports=module.exports=Arith;
		}
	}else{
		root.Arith=Arith;
	}
})(this);
