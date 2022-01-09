


function leap(y){
var pday=256;
var x,z;
var ind;

sum=0;
const ar1=[31,28,31,30,31,30,31,31];
for(var i=0;i<ar1.length;i++){
  sum=sum+ar1[i];
}
var c=ar1.forEach(function (value,i){
ind=i;
ind++;

});



//console.log(sum);
  if(y%4==0){
    z=sum+1;
s=pday-z;
return (s+":"+ind+":"+y);
  }
  else {
    x=pday-sum;
    return(x+":"+ind+":"+y);
  }

}
var h=leap(1800);
console.log(h);