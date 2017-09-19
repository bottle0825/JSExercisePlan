
//---时间显示器
var showTime = document.getElementById('show');
var nums = showTime.children;
var timer = null;//初始化计时器
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
},1000);


//---音乐播放器
var music = document.getElementsByClassName('music')[0];
var aud = music.children[1];
var audshow = music.children[0];
var musicName = aud.src;
var index = musicName.search('music/');
musicName = musicName.slice(index+6,musicName.length-1);
audshow.innerHTML = musicName;
