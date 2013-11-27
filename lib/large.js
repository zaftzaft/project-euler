(function(root){

	// pad(1) =>  0000001
	function pad(n,d){
		d=d||7;
		while(n.length<d){
			n="0"+n;
		}
		return n;
	}

	// zero(7) => 0000000
	function zero(n){
		return new Array(n+1).join("0");
	}

	// one("123") => ["3","2","1"]
	function one(n){
		return n.split("").reverse();
	}

	// divide("1234567")
	function divide(s,d){
		if(d===1){
			return one(s);
		}
		var a=[],i=0,l=s.length,d=d||7;
		for(;(a[i]=s.slice((i+1)*-d,l+i*-d)).length>d-1;i++);
		return a;
	}
	function unite(a){
		return a.concat().reverse().join("").replace(/^0*/,"");
	}

	// (divide, divide, digit) => divide
	function largeSum(n,m,d){
		d=d||7;
		for(var h=0,o=[],i=0,l=Math.max(n.length,m.length);i<l||h!=0;i++){
			var a=((parseInt(n[i],10)||0)+(parseInt(m[i],10)||0)+(+h)).toString(10);
			o[i]=a.length>d?(h=a.slice(0,1),a.slice(1)):(h=0,pad(a,d));
		}
		return o;
	}

	// (divide, Number, digit) => divide
	function largeMultiplySingle(n,m,d){
		d=d||7;
		if(m>9){throw new Error("m>9")}
		for(var h=0,o=[],i=0,l=n.length;i<l||h!=0;i++){
			var a=((parseInt(n[i],10)||0)*(parseInt(m,10))+(+h)).toString(10);
			o[i]=a.length>d?(h=a.slice(0,1),a.slice(1)):(h=0,pad(a,d));
		}
		return o;
	}

	// (divide, divide(,1), digit) => divide
	function largeMultiply(n,m,d){
		d=d||7;
		for(var t=divide("0"),i=0,l=m.length;i<l;i++){
			t=largeSum(
				divide(unite(largeMultiplySingle(n,m[i],d))+zero(i)),
				t,
				d
			);
		}
		return t;
	}

	var Large={
		sum:function(n,m,d){
			d=d||7;
			if(n.length<d&&m.length<d){
				return (+n)+(+m)+"";
			}
			return unite(largeSum(
				divide(n,d),
				divide(m,d),
				d
			));
		},
		mul:function(n,m,d){
			d=d||7;
			if(n.length<d&&m.length<d){
				return n*m+"";
			}
			return unite(largeMultiply(
				divide(n,d),
				divide(m,1),
				d
			));
		},
		pow:function(n,m){
			n=n+"";
			for(var t="1";m--;){
				t=Large.mul(t,n);
			}
			return t;
		},
		pad:pad,
		zero:zero,
		divide:divide,
		unite:unite,
		largeSum:largeSum,
		largeMultiply:largeMultiply
	};

	if(typeof exports!=='undefined'){
		if(typeof module!=='undefined'&&module.exports){
			exports=module.exports=Large;
		}
	}else{
		root.Large=Large;
	}
})(this);
