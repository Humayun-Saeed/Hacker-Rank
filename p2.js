


const a=[1,2,3,4];

const b=[1,3,4,2];

function compareTriplets(c, d) {
    

var bob=0;
var alice=0;



    for(var i=0;i<c.length && i <d.length;i++){
  if(d[i]>c[i])
bob++
 else if(c[i]>d[i])
   alice++
}
return [alice,bob];
}
var x=compareTriplets(a,b);
console.log(x);
