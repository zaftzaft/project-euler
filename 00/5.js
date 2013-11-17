var Arith=require("../lib/arith.js");

for(var a=1,i=2;i<=20;i++){
	a=Arith.lcm(a,i);
}
console.log(a);
