
const arr=[1, 2, 3, 4, 5];

function miniMaxSum(arr) {

    var b=arr.reduce((t,v) => {
        return t+v;
    });
   
   //console.log(b);

    var a=b-Math.max.apply(null,arr);
    var c=b-Math.min.apply(null,arr);
    console.log(a,c);
 


}

miniMaxSum(arr);