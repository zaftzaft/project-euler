var Prime=require("../lib/prime.js");

for(var i=1,x=[2,3],n=10001;x.length<n;i++){
	var a=i*6-1,b=i*6+1;
	if(Prime.leastFactor(a)===a){
		x.push(a);
	}
	if(Prime.leastFactor(b)===b){
		x.push(b);
	}
}

console.log(x[n-1]);
