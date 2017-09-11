var imgs = document.getElementsByTagName('li');
document.body.style.backgroundImage = "url(../img/img1.jpg)";
for(var i=0;i<imgs.length;i++){
	imgs[i].index = i;
	imgs[i].style.backgroundImage = "url(../img/img" + (imgs[i].index +1) + ".jpg)";
	imgs[i].onclick = function(){
		document.body.style.backgroundImage = "url(../img/img" + (this.index +1) + ".jpg)";
	}
}
