var a=1,b=1,c=0;
while((b=a+(a=b))<4e6)c+=b&1?0:b;
console.log(c);
