for(var a=1e3,x=0,c;--a;){
	for(var b=a+1;--b;){
		((c=a*b)+"").split("").reverse().join("")==c&&x<c&&(x=c);
	}
}
console.log(x);
