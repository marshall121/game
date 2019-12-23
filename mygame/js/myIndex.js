$(".navbar-toggle").click(function(){
	$(".navbar-nav").css("visibility","visible");
})

 var timer=null;

$(document).ready(function(){
	
	
	$(".food-container1").animate({"top":"-30px"},1000);
	$(".food-container2").animate({"top":"-30px"},1200);
	$(".food-container3").animate({"top":"-30px"},1300);
	$(".food-container4").animate({"top":"-30px"},1400);
	$(".food-container5").animate({"top":"-30px"},1500);
	
})

$(document).ready(function(){

	$(".title").fadeIn(1000);
	$(".intro-btn").fadeOut(5);
	$(".intro-btn").fadeIn(995);
	$(".intro-text").fadeIn(1000);
	$(".E-titile").fadeOut(5);
	$(".E-titile").fadeIn(995);
})

$(document).ready(function(){
	$(function(){
	    var obj={
             		el:$(".change-num1"),
             		max:1500,
             		start:0
             	}
        var obj1={
             		el:$(".change-num2"),
             		max:780,
             		start:0
             	}
        var obj2={
        	
        	el:$(".change-num3"),
        	max:165,
        	start:0
        }
        /*num1(obj);
        num2(obj1);
        num3(obj2);*/
        numObj(obj,10,5)
        numObj(obj1,7.8,8)
        numObj(obj2,1.65,8)
	})
	
	
	function numObj(obj,steep,time){
		
		var item=obj.el;
		var num=obj.max;
		var start=obj.start;
		obj.time=setInterval(function(){
		     start+=steep;
		     if(start>num){
		     	start=num;
		     	clearInterval(obj.time);
		     }
		     item.text(Math.round(start));
		   },time)
		
		
	}
	/*function num1(obj){
		var item=obj.el;
		var num=obj.max;
		var start=obj.start;
		time1=setInterval(function(){
		     start+=10;
		     if(start>num){
		     	start=num;
		     	clearInterval(time1);
		     }
		     item.text(start);
		   },5)
        }
	function num2(obj1){
	    var item=obj1.el;
	    var num=obj1.max;
		var start=obj1.start;
		time2=setInterval(function(){
			start+=7.8;
			if(start>num){
				start=num;
				clearInterval(time2);
			}
			item.text(Math.round(start));
		},8)
	}

      function num3(obj2){
      	var item=obj2.el;
	    var num=obj2.max;
		var start=obj2.start;
		time3=setInterval(function(){
			start+=1.65;
			if(start>num){
				start=num;
				clearInterval(time3);
			}
			item.text(Math.round(start));
		},8)
      }*/
})



$(".news-container").mouseenter(function(){
	$(".img-hover").animate({"opacity":"1"},1000);
})
$(".news-container").mouseleave(function(){
	$(".img-hover").animate({"opacity":"0"},300);
})
$(".news-container1").mouseenter(function(){
	$(".img-hover1").animate({"opacity":"1"},1000);
})
$(".news-container1").mouseleave(function(){
	$(".img-hover1").animate({"opacity":"0"},300);
})
$(".news-container2").mouseenter(function(){
	$(".img-hover2").animate({"opacity":"1"},1000);
})
$(".news-container2").mouseleave(function(){
	$(".img-hover2").animate({"opacity":"0"},300);
})
$(".news-container3").mouseenter(function(){
	$(".img-hover3").animate({"opacity":"1"},1000);
})
$(".news-container3").mouseleave(function(){
	$(".img-hover3").animate({"opacity":"0"},300);
})

$(document).ready(function(){
	new WOW().init();
	
})
