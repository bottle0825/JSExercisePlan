
var btn = document.getElementsByTagName('button')[0];
var ball = document.getElementById('ball');
var bot = document.getElementById('dot');
var lis = document.getElementsByTagName('li');
var target = lis[5].offsetLeft;
var ballx = 440;
var bally = 10;
var speedx = 0;
var speedy = 0;
var timer = null;
for(var i=0;i<8;i++){
	lis[i].onmouseover = function(){
		target = this.offsetLeft;
		console.log(target);
		animate(bot,target);
	}
}

//---开始游戏
btn.onclick = function(){
	createBall();
	Run();
}


//---随机生成球的发射角度
function createBall(){
	var r = 0;
	r = Math.random()*Math.PI;
	speedx = Math.cos(r);	
	speedy = Math.sin(r);
//	console.log((speedx*speedx)+(speedy*speedy));
//	console.log(speedx);
//	console.log(speedy);
}

//---定时器控制球运动
function Run(){
	clearInterval(timer);
	timer = setInterval(function(){
		ball.style.left = ballx+'px';
		ball.style.bottom = bally+'px';
		ballx += speedx;
		bally += speedy;
		Check();
		console.log(ballx);
	},3);
}

//---碰撞判断
function Check(){
	//---横向碰撞
	if(ballx==0||ballx==880){
		speedx=-speedx;
	}
	//---纵向碰撞
	if(bally==400){
		speedy=-speedy;
	}
}

//---offset的缓存动画
function animate(ele,target){
	clearInterval(ele.timer);
	//---确定每步走多少
	var step= (target-ele.offsetLeft)/10;
	//---因为目标值有可能大于或者小于box.offsetLeft，所以step有正有负。
	step == step>0?Math.ceil(step):Math.floor(step);
	//---每个box只能对应一个定时器，避免与其他定时器产生冲突
	ele.timer = setInterval(function(){
		//---缓存公式
		var val = target-ele.offsetLeft;
		ele.style.left = ele.offsetLeft+step+'px';
		//---停下来---如果差值小于每步步长，就停止
		if(Math.abs(val)<Math.abs(step)){
			//---直接回到目标值
			ele.style.left = target+'px';
			clearInterval(ele.timer);
		}
	},30);
}