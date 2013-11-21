for(var a=1,b=2,c=997;a*a+b*b!==c*c;(b=c<b?(a++)+1:b+1),c=1e3-b-a);
console.log(a*b*c);
