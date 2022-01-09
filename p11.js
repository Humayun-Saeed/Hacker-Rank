
const ar=[10 ,5, 20, 20 ,4 ,5 ,2 ,25, 1];
var max=0;
function breaking(ar){

for(let x=0;x<ar.length ;x++){

   console.log(ar[x]);

   max=ar[0];
   if(ar[x]>max)
       max=ar[x];
   

}
console.log(max);

}
breaking(ar);


