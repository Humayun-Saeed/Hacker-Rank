/*function show(params) {
    console.log(params);
    
}


let x= new Promise(function (resolve,rejection) {
    let x=0;

    if(x==0)
    resolve("successful");
    else
    rejection("failed");
});

x.then(

    function (value){
show(value);
    },
    function (error) {
        show(error);
    }
);

let x=setTimeout(show,5000);

function show() {
    console.log("hello world");
}*/
//


var a=5;
var b=15;
var m;
var n;

const apple=[3,2];
const orange=[-2,2,1];

function dis(s,t,a,b,apple,orange){
    var l=0;var k=0;
for(var i=0;i<apple.length;i++){
    
m=a+apple[i];
n=b+orange[i];
//console.log(m);
//console.log(n);

if(m>=s && m<=t){
++l;

}
if(n>=s && n<=t){
++k;

}
}
console.log(l);
console.log(k);
}
dis(7,11,a,b,apple,orange);


