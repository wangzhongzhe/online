function change()
{	
    var dom=document.getElementById("picture") 
    dom.p[1].style.border="1px solid yellow";
}
function start()
{
    clearInterval(timer);
    timer=setInterval('change()',50);    //50（毫秒）为变换间隔，越小变换的越快
}
function rule()
{
    document.getElementById("light").style.display="block";
    document.getElementById("fade").style.display="block"
}
