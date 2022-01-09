

function timeConversion(s) {
    var c='pm';
    var hr=00;
    var f="Am";
    var d=12;
    var e;
    //console.log(s);

    var a=t.slice(0,1);
   
    var b=t.slice(8,10);

    var m=t.slice(2,4);

     var s=t.slice(5,8);
 
    min=Number(m);
    sec=Number(s);
    e=Number(a);

    if(e<12 && b==c)
    {
        d=e+d;
        console.log(d+":"+m+":"+s);
    }
    else if(s.includes("AM")&& e==12){
     
              console.log(e+":"+00+":"+00":"+f);

   }
    else
    console.log(s);
    
    

}
var t="7:05:45 pm";
timeConversion(t);