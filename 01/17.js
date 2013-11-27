var t=function(s){
	return s.split(" ").map(function(s){
		return s.length;
	});
};
var one=t(" one two three four five six seven eight nine");
var teen=t("ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen");
var ten=t("  twenty thirty forty fifty sixty seventy eighty ninety");
var hundred=one.map(function(n){
	return n+"hundred".length;
});

var f=function(n,k,a){
	if(n<=9){
		return one[n];
	}
	else if(10<=n&&n<=19){
		return teen[n-10];
	}
	else if(20<=n&&n<=99){
		k=n/10|0;
		return ten[k]+one[n-k*10];
	}
	else if(100<=n&&n<=999){
		k=n/100|0;
		a=f(n-k*100);
		return hundred[k]+(a?3+a:a);
	}
	else if(n===1000){
		return "onethousand".length;
	}
};

for(var i=1e3,m=0;i;i--){
	m+=f(i);
}
console.log(m);
