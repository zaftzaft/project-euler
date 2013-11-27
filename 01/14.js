for(var i=1e6,m=0,b=0;i;i--){
	for(var n=i,c=2;1<(n=n&1?3*n+1:n/2);c++);
	m=m<c?(b=i,c):m;
}
console.log(b);
