var count = 0;
var tbody = document.getElementsByTagName('tbody')[0];
function add(){
	var movie = [];
		movie[0] = document.getElementById('name').value;
		movie[1] = document.getElementById('director').value;
		movie[2] = document.getElementById('actor').value;
		movie[3] = document.getElementById('time').value;
		movie[4] = document.getElementById('types').value;
	console.log(movie.length);
	count++;
	
	var addtr = document.createElement('tr');
	tbody.appendChild(addtr);
	var addth = document.createElement('th');
	addtr.appendChild(addth);
	addth.innerHTML = count;
	for(i=0;i<movie.length;i++){
		var addtd = document.createElement('td');
		addtr.appendChild(addtd);
		addtd.innerHTML = movie[i];
	}
	var addact = document.createElement('td');
	addtr.appendChild(addact);
	var addbtn1 = document.createElement('button');
	addbtn1.innerHTML = '修改';
	addbtn1.className = 'btn btn-info';
	addbtn1.flag = true;
	addbtn1.onclick = function(){
		console.log(this.flag);
		if(this.flag){
			for(i=1;i<5;i++){
//				var addinp = document.createElement('input');
//				addinp.type = 'text';
//				addinp.value = this.parentNode.parentNode.childNodes[i].innerHTML;
//				this.parentNode.parentNode.childNodes[i].appendChild(addinp);
//				console.log(this.parentNode.parentNode.childNodes[i]);
//				this.parentNode.parentNode.childNodes[i].innerHTML='';
				this.parentNode.parentNode.childNodes[i].innerHTML = '<input type="text" value = "'+this.parentNode.parentNode.childNodes[i].innerHTML+'" />'
			}
			this.flag = false;
			this.parentNode.parentNode.childNodes[5].innerHTML = '<select><option value="0">请选择电影类型</option><option value="喜剧">喜剧</option><option value="动作">动作</option><option value="科幻">科幻</option></select>'
		}else{
			for(i=1;i<5;i++){
				//---每次循环input标签减少一个
				this.parentNode.parentNode.childNodes[i].innerHTML = this.parentNode.parentNode.getElementsByTagName('input')[0].value;
			}
			this.flag = true;
			this.parentNode.parentNode.childNodes[5].innerHTML = this.parentNode.parentNode.getElementsByTagName('select')[0].value;
		}
		
	}
	addact.appendChild(addbtn1);
	var addbtn2 = document.createElement('button');
	addbtn2.innerHTML = '删除';
	addbtn2.className = 'btn btn-danger';
	addbtn2.onclick = function(){
		console.log(this);
		this.parentNode.parentNode.remove();
//		this.parentNode.parentNode.parentNode.removeChild();
	}
	addact.appendChild(addbtn2);
}

//function del(i){
//	console.log(this);
//	tbody.childNodes[i-1];
////	console.log(tbody.childNodes[i-1]);
//	count-1;
//}	
