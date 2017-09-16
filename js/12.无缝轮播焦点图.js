var show = document.getElementById('show');
var ul = show.children[0];
var num = 0;
var nums = 0;
var timer = null;
var timers = null;

timer = setInterval(autoPlay,20);

function autoPlay(){
	num-=10;
	if(num == -4000){
		num=0;
		timers = setInterval(function(){
			if(nums<5){
				nums++;
				console.log(nums);
			}
		},1000);
		if(nums>5){
			clearInterval(timers);
			nums=0;
			timer = setInterval(autoPlay,20);
		}
	}else if(num == 0||num == -800||num == -1600||num == -2400||num == -3200){
		clearInterval(timer);
		timers = setInterval(function(){
			if(nums<5){
				nums++;
				console.log(nums);
			}
		},1000);
		if(nums>5){
			clearInterval(timers);
			nums=0;
			timer = setInterval(autoPlay,20);
		}
	}
	ul.style.left = num+'px';
}

show.onmouseover = function(){
	clearInterval(timer);
}
show.onmouseout = function(){
	timer = setInterval(autoPlay,20);
}