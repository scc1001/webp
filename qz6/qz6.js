setInterval(func1,1000);
function func1(){
  var Date1=new Date();
  var hh=Date1.getHours();
  var mm=Date1.getMinutes();
  var ss=Date1.getSeconds();
  document.getElementById("demo").innerHTML=hh+':'+mm+':'+ss;
}
