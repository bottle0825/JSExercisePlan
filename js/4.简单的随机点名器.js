var names = ['宋洁钰','吴有文','杨艳','陈璐','杨彩晗','倪一','潘倩倩','卢丹','韩文','倪君','袁奔','龚琪','龚洁','袁科薇','丁悦',
'党方超','洪政','黄继安','陈渊博','王冬','曹栋','范成磊','陈昊','魏新波','葛翰林','黄达','钱唐','孙袁文'];
var flag = -1;
function Choose(){
	flag = 0-flag;
	var show = document.getElementById('show');
	var nameshow = document.getElementById('name');
	if(flag==1){
		i = setInterval(function(){
			ran = Math.random()*names.length;
			ran = parseInt(ran,10);
			show.innerHTML = names[ran];
		},100);
	}else{
		clearInterval(i);//清除定时器
		console.log(names.length)
		nameshow.innerHTML = nameshow.innerHTML + ' '+names[ran];
		show.innerHTML = names.splice(ran,1);//删除选中项，并打印在屏幕上。
	}
}
