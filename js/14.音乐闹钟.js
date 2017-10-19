
var arrClick = [];//闹钟记录数组
//---时间显示器
var showTime = document.getElementById('show');
var nums = showTime.children;
var timer = null;//初始化计时器
//---音乐播放器
var music = document.getElementsByClassName('music')[0];
var aud = music.children[1];
var audshow = music.children[0];
var audbtn = music.children[2];
timer = setInterval(function(){
	var myDate = new Date();//获取当前时间
	var h = myDate.getHours();//当前小时数
	var m = myDate.getMinutes();//当前分钟数
	var s = myDate.getSeconds();//当前秒钟数
	nums[0].style.backgroundImage = 'url(../img/num/'+Math.floor(h/10)+'.JPG)';
	nums[1].style.backgroundImage = 'url(../img/num/'+(h%10)+'.JPG)';
	nums[3].style.backgroundImage = 'url(../img/num/'+Math.floor(m/10)+'.JPG)';
	nums[4].style.backgroundImage = 'url(../img/num/'+(m%10)+'.JPG)';
	nums[6].style.backgroundImage = 'url(../img/num/'+Math.floor(s/10)+'.JPG)';
	nums[7].style.backgroundImage = 'url(../img/num/'+(s%10)+'.JPG)';
			console.log(arrClick.length);
	//判断是否奏响闹钟
	for(var i=0;i<arrClick.length;i++){
		if(arrClick[i].hour==h && arrClick[i].minute==m && s==0){
			aud.play();
		}
	}
},1000);
console.log(aud);

//---模态框显示
var mubu = document.getElementsByClassName('mubu')[0];
var cc = document.getElementsByClassName('cc')[0];
var cm = document.getElementsByClassName('cm')[0];

//---音乐播放器控制
var musicName = aud.src;
var index = musicName.search('music/');
musicName = musicName.slice(index+6,musicName.length-1);//根据音乐的地址获取音乐名
audshow.innerHTML = musicName;//显示音乐名
audbtn.onclick = function(){//开启音乐选择界面
	mubu.style.display = 'block';
	cm.style.display = 'block';
	var musicList = document.getElementById('musiclist');
	//选择歌曲并关闭模态框
	cm.children[3].onclick = function(){
		aud.src = '../music/'+musicList.value;
		audshow.innerHTML = musicList.value;
		mubu.style.display = 'none';
		cm.style.display = 'none';
	};
	//关闭模态框
	cm.children[4].onclick = function(){
		mubu.style.display = 'none';
		cm.style.display = 'none';
	};
};




//闹钟功能
var closeClock = document.getElementById('closeClock');
var createClock = document.getElementById('createClock');
var changeClock = document.getElementById('changeClock');
var deletClock = document.getElementById('deletClock');
var listClock = document.getElementById('listClock');
//创建闹钟
createClock.onclick = function(){
	mubu.style.display = 'block';
	cc.style.display = 'block';
	var hourList = document.getElementById('hourslist');
	var minutelist = document.getElementById('minutelist');
	var chour = 0;
	var cminute = 0;
	//生成小时数选项
	for(var i = 1;i<24;i++){
		hourList.innerHTML += "<option value='"+i+"'>"+i+"</option>"
	}
	//生成分钟数选项
	for(var i = 1;i<60;i++){
		minutelist.innerHTML += "<option value='"+i+"'>"+i+"</option>"
	}
	//点击获取时间，并记录在显示面板
	cc.children[5].onclick = function(){
		chour = hourList.value;
		cminute = minutelist.value;
		arrClick.push({hour:chour,minute:cminute});
		var newClick = document.createElement('li');
		newClick.innerHTML = chour+':'+cminute;
		listClock.appendChild(newClick);
		cliL();
		checkClick();
		mubu.style.display = 'none';
		cc.style.display = 'none';
	};
	cc.children[6].onclick = function(){
		mubu.style.display = 'none';
		cc.style.display = 'none';
	};
};

//选中时钟列表
var lifc = null;
function checkClick(){
	var liClick = listClock.children;
	lifc = null;
	for(let i=0;i<liClick.length;i++){
		for(var j=0;j<liClick.length;j++){
			liClick[j].style.backgroundColor = '#333';
			liClick[j].style.color = '#F89001';
		}
		liClick[i].onclick = function(){
			for(var j=0;j<liClick.length;j++){
				lifc = null;
				liClick[j].style.backgroundColor = '#333';
				liClick[j].style.color = '#F89001';
			}
			lifc = i;
			this.style.backgroundColor = '#ddd';
			this.style.color = '#333';
		};
	}
}
//修改闹钟功能
changeClock.onclick = function(){
	if(lifc!==null){
		mubu.style.display = 'block';
		cc.style.display = 'block';
		var liClick = listClock.children;
		var hourList = document.getElementById('hourslist');
		var minutelist = document.getElementById('minutelist');
		var chour = 0;
		var cminute = 0;
		//生成小时数选项
		for(var i = 1;i<25;i++){
			hourList.innerHTML += "<option value='"+i+"'>"+i+"</option>"
		}
		//生成分钟数选项
		for(var i = 1;i<61;i++){
			minutelist.innerHTML += "<option value='"+i+"'>"+i+"</option>"
		}
		//点击获取时间，并记录在显示面板
		cc.children[5].onclick = function(){
			chour = hourList.value;
			cminute = minutelist.value;
			arrClick[lifc] = {hour:chour,minute:cminute};
			liClick[lifc].innerHTML =  chour+':'+cminute;
			liClick[lifc].style.backgroundColor = '#333';
			liClick[lifc].style.color = '#F89001';
			lifc = null;
			console.log(arrClick);
			mubu.style.display = 'none';
			cc.style.display = 'none';
		};
		cc.children[6].onclick = function(){
			mubu.style.display = 'none';
			cc.style.display = 'none';
		};
	}else{
		alert('请选择要修改的闹钟');
	}
}
//删除闹钟功能
deletClock.onclick = function(){
	if(lifc!==null){
		var liClick = listClock.children;
		liClick[lifc].remove();
		arrClick.splice(lifc,1);
		lifc = null;
	}else{
		alert('请选择要删除的闹钟');
	}
}
//关闭闹钟功能
closeClock.onclick = function(){
	aud.pause();
}

//拖动模态框
var targetx = 0;
var targety = 0;
var leaderx = 0;
var leadery = 0;
var timerDrop = null;
//cc.children[0].onmousedown = Drop(event);
//cm.children[0].onmousedown = Drop(event);
console.log(cc);
console.log(cc.children[0].parentNode);
Drop(cc);
Drop(cm);

//封装拖动函数
function Drop(obj){
	obj.onmousedown = function(event){
		Event = event||window.event;
		var px = Event.pageX;
		var py = Event.pageY;
		var x = px-obj.offsetLeft;
		var y = py-obj.offsetTop;
		document.onmousemove = function(event){
			Event = event||window.event;
			targetx = Event.pageX - x;
			targety = Event.pageY - y;
			obj.style.left = targetx + 'px';
			obj.style.top = targety + 'px';
		};
		window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
		document.onmouseup = function(){
			document.onmouseup = null;
			document.onmousemove = null;
		};
	}
}

//设定闹钟列表
var bar = document.getElementById('bar');
var cbox = document.getElementById('cbox');
var scro = document.getElementById('scro');
function cliL(){
	var barh = scro.offsetHeight*(cbox.offsetHeight+40)/listClock.offsetHeight;
	if(barh<240){
		bar.style.height = barh + 'px';
	}
	bar.onmousedown = function(event){
		var Event = event||window.event;
		
		var py = Event.pageY||scroll().top+Event.clientY;
		var y = py-bar.offsetTop;
		document.onmousemove = function(event){
			var Event = event||window.event;
			var pyy = Event.pageY||scroll().top+Event.clientY;
			pyy = pyy-y;
			if(pyy<0){
				pyy=0;
			}else if(pyy>scro.offsetHeight-bar.offsetHeight){
				pyy=scro.offsetHeight-bar.offsetHeight;
			}
			bar.style.top = pyy + 'px';
			
			var compare = pyy*(listClock.offsetHeight-cbox.offsetHeight+40)/(scro.offsetHeight-bar.offsetHeight);
			listClock.style.marginTop = -compare+'px';
			//禁止文本选中
			window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
		}
		document.onmouseup = function(){
			document.onmousedown = null;
			document.onmousemove = null;
		}
		
	};
}
