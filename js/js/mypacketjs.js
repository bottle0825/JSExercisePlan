



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

//---scroll的多兼容封装
function scroll(){
if(window.pageYOffset!==undefined||window.pageXOffset!==undefined){//---IE9+谷歌+火狐
		return {
			'top' : window.pageYOffset,
			'left' : window.pageXOffset
		};
	}else if(document.compatMode=='CSS1Compat'){//---IE678
		return {
			'top' : document.documentElement.scrollTop,
			'left' : document.documentElement.scrollLeft
		};
	}else{
		return {
			'top' : document.body.scrollTop,
			'left' : document.body.scrollLeft
		};
	}
}