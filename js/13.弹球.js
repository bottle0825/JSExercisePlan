
var btn = document.getElementsByTagName('button')[0];
var ball = document.getElementById('ball');
var bot = document.getElementById('dot');
var lis = document.getElementsByTagName('li');
var Rank = document.getElementById('Rank');
var target = lis[9].offsetLeft;
var k = 9;//bot模块编号
var ballx = 440;//球的横向坐标
var bally = 10;//球的纵向坐标
var speedx = 0;//球的横向速度
var speedy = 0;//球的纵向速度
var flag = 0;//碰撞次数
var ranks = 1;//游戏等级
var rank = 1;//速度等级
var f = 20;//升级速度
var timer = null;

//---鼠标控制板块移动
for(let i=0;i<15;i++){
	lis[i].onmouseover = function(){
		target = this.offsetLeft;
		k = i;
		console.log(target);
		animate(bot,target);
	}
}

//---键盘控制板块移动
document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode==37){//左方向键点击事件
		if(k==0){
			k=k;
		}else{
			k--;
		}
		target = lis[k].offsetLeft;
		animate(bot,target);
	}
	if(e && e.keyCode==39){//右方向键点击事件
		if(k==14){
			k=k;
		}else{
			k++;
		}
		target = lis[k].offsetLeft;
		animate(bot,target);
	}
}

//---开始游戏
btn.onclick = function(){
	ballx = 440;//球的横向坐标
	bally = 10;//球的纵向坐标
	speedx = 0;//球的横向速度
	speedy = 0;//球的纵向速度
	createBall();
	Run();
}


//---随机生成球的发射角度
function createBall(){
	var r = 0;//随机角度
	var f = 0;//随机镜像角度
	r = (0.15*Math.PI)+(Math.random()*0.15*(Math.PI));
	f = Math.floor(Math.random()*2);
	if(f==1){
		r=Math.PI-r;
	}
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
		ballx += speedx*rank;
		bally += speedy*rank;
		Check();
	},1);
}

//---碰撞判断
function Check(){
	//---横向碰撞
	if(ballx<0||ballx>880){
		console.log('**************************************');
		flag++;
		speedx=-speedx;
	}
	//---纵向碰撞
	if(bally>360){
		console.log('**************************************');
		speedy=-speedy;
		flag++;
	}
	//---撞板反弹
	if(bally<10&&(ballx>bot.offsetLeft&&ballx<(bot.offsetLeft+200))){
		console.log('**************************************');
		speedy=-speedy;
		flag++;
	}
	if(bally<-10){
		clearInterval(timer);
		alert('游戏失败');
		ballx = 440;//球的横向坐标
		bally = 10;//球的纵向坐标
		speedx = 0;//球的横向速度
		speedy = 0;//球的纵向速度
		flag = 0;//碰撞次数
		ranks = 1;//游戏等级
		rank = 1;//速度等级
		Rank.innerHTML = ranks;
	}
	if(flag==f){
		flag=0;
		f+=10;
		rank= rank+rank*0.3;
		ranks++;
		Rank.innerHTML = ranks;
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
	},10);
}