var ball = document.getElementById('ball');
var show = document.getElementById('show');
var back = document.getElementById('back');
var arr = [];
var count= 0;
show.innerHTML = '';
var timer = null;
Drop(ball);

back.onclick = function(){
	timer = setInterval(function(){
		var seat = arr.pop();
		ball.style.left = seat.left +'px';
		ball.style.top = seat.top +'px';
		count--
		if(count==0){
			clearInterval(timer);
			arr = [];
			show.innerHTML = '';
		}
//					count--
//					ball.style.left = arr[count].left + 'px';
//					ball.style.top = arr[count].top + 'px';
//					if(count==0){
//						clearInterval(timer);
//						arr = [];
//						show.innerHTML = '';
//					}
	},30);
}

function Drop(head,body){
	if(arguments.length==1){
		body = head;
	}
	head.onmousedown = function(event){
		var Event = event||window.event;
		//---鼠标相对页面的位置
		var px = Event.pageX||scroll().left + Event.clientX;
		var py = Event.pageY||scroll().top + Event.clientY;
		//---鼠标相对盒子的位置
		var x = px - body.offsetLeft;
		var y = py - body.offsetTop;
		document.onmousemove = function(event){
			var Event = event||window.event;
			arr.push({'left':ball.offsetLeft,'top':ball.offsetTop});
			count++;
			show.innerHTML += 'left:'+ball.offsetLeft+';top:'+ball.offsetTop+';</br>';
			//---鼠标移动相对页面的位置
			var xx = Event.pageX||scroll().left + Event.clientX;
			var yy = Event.pageY||scroll().top + Event.clientY;
			xx = xx-x;
			yy = yy-y;
			body.style.left = xx + 'px';
			body.style.top = yy + 'px';
			//---禁止文本选用
			window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
		};
		document.onmouseup = function(){
		//---清除移动时间
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
}