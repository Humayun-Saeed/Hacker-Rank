const a=[1,3,2,6,1,2];
var k=3;
var c=0;
for(var x of a){
//console.log(x);
for(var i of a){
//console.log(i);
if(x<i  &&( (x+i)%k==0)){
console.log(x);
c++;
}
}

}
