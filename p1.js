const arr=[1, 2, 3, 4, 10 ,11];
var sum=0;

function add(z){

     for(var i=0;i<arr.length; i++){
    
        //console.log(arr[i]);

        
       sum=sum+arr[i]  
  
     }
    return sum;
}
var a = add(arr);
console.log(a);