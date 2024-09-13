var time=new Date().getHours();
console.log(time);

var the_time=new Date().getHours()+":"+new Date().getMinutes();
document.getElementById("time").innerHTML=the_time

if (time<12){
document.getElementById("greeting").innerHTML="Good Morning";
}

else if (time>12 && time<16)
{
    document.getElementById("greeting").innerHTML="Good afternoon";
}

else if (time>16 && time<20)
{
    document.getElementById("greeting").innerHTML="Good evening";
}

else{
    document.getElementById("greeting").innerHTML="why r u on ur pc this late? go to bed."
}

var a = new Date().getFullYear();
console.log(a);

var b = new Date().getMonth()+1;
console.log(b);

var c = new Date().getDate();
console.log(c);

var d = new Date().getDay();
console.log(d);

var e = new Date().getSeconds();
console.log(e);

var f = new Date().getMilliseconds();
console.log(f);

var g = new Date().getTime();
console.log(g);

