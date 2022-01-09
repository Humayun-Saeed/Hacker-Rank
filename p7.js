const candles=[4, 2,4, 1, 4];
var max;
var min;
var a=0;

function birthdayCakeCandles(candles) {
    // Write your code here
    var c=Math.max.apply(null,candles);

var d=candles.filter((v)=>{
if(v==c)
return true;

});
console.log(d.length);

}
birthdayCakeCandles(candles);