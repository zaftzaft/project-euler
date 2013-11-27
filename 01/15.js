/*
 * Pascal's triangle
 *     1
 *    1 1
 *   1 2 1
 *  1 3 3 1
 * 1 4 6 4 1 C(4,2)=>6
 */

var fact=function(n){
	return n===0?1:n*fact(n-1);
};

var C=function(n,m){
	return fact(n)/(fact(n-m)*fact(m));
};

console.log(C(40,20));
