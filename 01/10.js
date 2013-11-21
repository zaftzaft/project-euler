var p=[2,3];

var f=function(n){
	for(var i=0,m=Math.sqrt(n),l=p.length;p[i]<=m;i++){
		if(n%p[i]===0){
			return false;
		}
	}
	p[l]=n;
	return true;
};

for(var n=1;6*n+1<2e6;n++){
	f(6*n-1);
	f(6*n+1);
}
console.log(p.reduce(function(a,b){
	return a+b;
},0));
