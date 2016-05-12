
function rule()
{
    document.getElementById("light").style.display="block";
    document.getElementById("fade").style.display="block"
}

$(function () {
	$('.draw_btn').on('click',drawAnimation);
});

var prize=[0,1,2,4,7,6,5,3];
var num=0;
var n=100;	
var a=0;
function drawAnimation()
{	
	var s=$('.img');
	s.removeClass('item_chose');
	s.eq(prize[num]).addClass('item_chose');
	num++;
	if(num>7){
		num=0;
		a++;
	}
	if(a>=2){
		var ivalue=Math.random();
		ivalue*=100;
		ivalue=Math.floor(ivalue);
		n=n+ivalue;
	}
	if(n>=1000){
		return 0;
	}
	var t=setTimeout(function(){drawAnimation();},n);
}
