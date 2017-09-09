var time = document.getElementsByTagName('h3')[0];
//---显示时间
var timer = setInterval(function(){
	var myDate = new Date();
	time.innerHTML = '现在是'+myDate.toLocaleDateString()+',具体时间为'+myDate.toLocaleTimeString();
},1000);
console.log(Date);

//---实现秒表
var btn = document.getElementsByTagName("button");
var mb = document.getElementsByTagName('p');
var count = 0;
var scount = 0;
var mcount = 0;
var flag = false;
var timer = null;
var show = '';
//---开始计时
btn[1].onclick = function(){
	if(!flag){
		timer = setInterval(function(){
			clearInterval(this);
			btn[1].innerHTML = '暂停计时';
			mcount++;
			if(mcount==100){
				scount++;
				mcount=0;
			}
			if(scount==60){
				count++;
				scount=0;
			}
			mb[0].innerHTML = count+":"+scount+"."+mcount;
			flag = true;
		},10)
	}else{
		clearInterval(timer);
		btn[1].innerHTML = '开始计时';
		flag = false;
	}
	
}
btn[0].onclick = function(){
	clearInterval(timer);
	btn[1].innerHTML = '开始计时';
	flag = false;
	mb[0].innerHTML = '00:00.00';
	mb[1].innerHTML = '';
	count = 0;
	scount = 0;
	mcount = 0;
}
btn[2].onclick = function(){
	mb[1].innerHTML +=' '+count+":"+scount+"."+mcount;
}