var show = document.getElementById('show');
var left = document.getElementById('left');
var right = document.getElementById('right');
var ul = show.children[0];
var lis = ul.children;
var numli = 0;//---初始标签的位置
var num = -800;//---初始图片的位置
var numche = 0;//---初始计时点
var timer = null;
var timerche = null;


//---定时器控制图片轮播间隔和时间
timerche = setInterval(autoPlay,4000);

//---实现滚动与停止
function autoPlay(){
	clearInterval(timer);
	timer = setInterval(function(){
		num-=10;
		numche++;
		ul.style.left = num+'px';
		if(num== -4800){
			num = -800;
		}
		if(numche == 80){
			numche = 0;
			clearInterval(timer);
		}
	},20);
	Check();
}

//---焦点方法
for(let i=0;i<5;i++){
	lis[i].onmouseover = function(){
		clearInterval(timerche);
		var numche = -(i+1)*800;//---焦点的位置
		timer = setInterval(function(){
			num-=10;
			numche++;
			ul.style.left = num+'px';
			if(num== -4800){
				num = -800;
			}
			if(numche == 80){
				numche = 0;
				clearInterval(timer);
			}
		},20);
	}
}

function Check(){
	if((-num)%800 == 0){
		numli = ((-num)/800)-1;
		for(var i=0;i<5;i++){
			lis[i].className = '';
		}
		lis[numli].className = 'sel';
		console.log(lis[numli]);
	}
}

show.onmouseover = function(){
	clearInterval(timerche);
}
show.onmouseout = function(){
	timerche = setInterval(autoPlay,4000);
}

//---点击上一张
left.onclick =  function(){
	clearInterval(timer);
	timer = setInterval(function(){
		num+=10;
		numche++;
		ul.style.left = num+'px';
		if(num == -800){
			num = -4800;
		}
		if(numche == 80){
			numche = 0;
			clearInterval(timer);
		}
	},20);
	Check();
}

//---点击下一张
right.onclick =  function(){
	autoPlay();
}

