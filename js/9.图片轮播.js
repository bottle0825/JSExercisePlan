window.onload = function(){
	var imgs = ['../img/img1.jpg','../img/img2.jpg','../img/img3.jpg','../img/img4.jpg','../img/img5.jpg'];
	var lis = document.getElementsByTagName('li');
	var show = document.getElementById('show');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var count = 0;
	for(let i=0;i<imgs.length;i++){
		lis[i].onmouseover = function(){
			return function(){
				for(var j=0;j<imgs.length;j++){
					lis[j].className = '';
				}
				lis[i].className = 'sel';
				show.style.backgroundImage = 'url('+imgs[i]+')';
				count=i+1;
			}
		}();
	}
	left.onclick = function(){
		if(count>0){
			count--;
		}else{
			count=4;
		}
		for(var j=0;j<imgs.length;j++){
			lis[j].className = '';
		}
		lis[count].className = 'sel';
		show.style.backgroundImage = 'url('+imgs[count]+')';
	}
	right.onclick = function(){
		if(count<4){
			count++;
		}else{
			count=0;
		}
		for(var j=0;j<imgs.length;j++){
			lis[j].className = '';
		}
		lis[count].className = 'sel';
		show.style.backgroundImage = 'url('+imgs[count]+')';
	}
	
	var timer = setInterval(function(){
		for(var j=0;j<imgs.length;j++){
			lis[j].className = '';
		}
		lis[count].className = 'sel';
		show.style.backgroundImage = 'url('+imgs[count]+')';
		count++;
		count %= imgs.length;
	},4000);
}
