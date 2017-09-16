Restart();
document.onkeydown=function(event){
var e = event || window.event || arguments.callee.caller.arguments[0];
  	if(e && e.keyCode==37){ //按左键 
    //要做的事情
	    if(!Fallure()){
	    	alert('游戏失败');
	    	Restart();
	    }
    	var x,y;
	    for(i=0;i<16;i++){
	    	if(nums[i].con!=0){
	    		y=parseInt((i)/4);
	    		x=i%4;
	    		while(x!=0){
	    			x--;
	    			Mix(nums[y*4+x+1],nums[y*4+x])
	    		}
	    	}
	    }
	    Move();
    }
	if(e && e.keyCode==38){ //按上键 
     //要做的事情
	    if(!Fallure()){
	    	alert('游戏失败');
	    	Restart();
	    }
     	var x,y;
	    for(i=0;i<16;i++){
	    	if(nums[i].con!=0){
	    		y=parseInt((i)/4);
	    		x=i%4;
	    		while(y!=0){
	    			y--;
	    			Mix(nums[y*4+x+4],nums[y*4+x]);
	    		}
	    	}
	    }
	    Move();
    }
         
	if(e && e.keyCode==39){ //按右键
     //要做的事情
	    if(!Fallure()){
	    	alert('游戏失败');
	    	Restart();
	    }
     	var x,y;
	    for(i=15;i>=0;i--){
	    	if(nums[i].con!=0){
	    		y=parseInt((i)/4);
	    		x=i%4;
	    		while(x!=3){
	    			x++;
	    			Mix(nums[y*4+x-1],nums[y*4+x]);
	    		}
	    	}
	    }
	    Move();
    }
    
	if(e && e.keyCode==40){ //按下键
     //要做的事情
	    if(!Fallure()){
	    	alert('游戏失败');
	    	Restart();
	    }
     	var x,y;
	    for(i=15;i>=0;i--){
	    	if(nums[i].con!=0){
	    		y=parseInt((i)/4);
	    		x=i%4;
	    		while(y!=3){
	    			y++;
	    			Mix(nums[y*4+x-4],nums[y*4+x]);
	    		}
	    	}
	    }
	    Move();
    }
   
}; 
//刷新
function Restart(){
	nums = [];
	flag = true;
	score = 0;
	lv = 2;
	for(i=0;i<4;i++){
		for(j=0;j<4;j++){
			nums[i*4+j] = new Object();
			nums[i*4+j].dom = document.getElementById('p'+(i+1)+''+(j+1));
			nums[i*4+j].con = 0;
			nums[i*4+j].dom.innerHTML = '';
		}
	}
	Move();
}

//随机函数
function Ran(){
	var r = Math.random()*16;
	r = parseInt(r,10);
	return r;
}
//移动函数
function Move(){
	//随机生成一个2
	var address = Ran();
	if(flag){
		while(nums[address].con!=0){
			address = Ran();
		}
		nums[address].con = 2;
		nums[address].dom.innerHTML = 2;
		flag = false;
		score+=2;
		document.getElementById('score').innerHTML = score;
		document.getElementById('lv').innerHTML = lv;
		if(lv==2048){
			alert('牛逼啊，你玩到2048了');
		}
	}
}
//相同数值模块相遇合并
function Mix(num1,num2){
	if(num1.con==num2.con){
		num2.con=num2.con+num1.con;
		num2.dom.innerHTML = num2.con;
		num1.con=0;
		num1.dom.innerHTML = '';
		flag = true;
		score+=num2.con;
		if(lv<num2.con){
			lv=num2.con;
		}
	}
	if(num2.con==0){
		num2.con=num2.con+num1.con;
		num2.dom.innerHTML = num2.con;
		num1.con=0;
		num1.dom.innerHTML = '';
		flag = true;
	}
}

//判断游戏失败
function Fallure(){
	var x,y;
	for(i=0;i<16;i++){
		y=parseInt(i/4);
		x=i%4;
		if(y==0&&x==0){
			if(nums[i].con==0||nums[i].con==nums[i+1].con||nums[i].con==nums[i+4].con){
	    		return true;
	   	 	}
		}
		if(y==3&&x==3){
			if(nums[i].con==0||nums[i].con==nums[i-1].con||nums[i].con==nums[i-4].con){
	    		return true;
	   	 	}
		}
		if(y==0&&x==3){
			if(nums[i].con==0||nums[i].con==nums[i-1].con||nums[i].con==nums[i+4].con){
	    		return true;
	   	 	}
		}
		if(y==3&&x==0){
			if(nums[i].con==0||nums[i].con==nums[i+1].con||nums[i].con==nums[i-4].con){
	    		return true;
	   	 	}
		}
		if(y!=0&&y!=3&&x==0){
			if(nums[i].con==0||nums[i].con==nums[i+1].con||nums[i].con==nums[i+4].con||nums[i].con==nums[i-4].con){
	    		return true;
	   	 	}
		}
		if(y!=0&&y!=3&&x==3){
			if(nums[i].con==0||nums[i].con==nums[i-1].con||nums[i].con==nums[i+4].con||nums[i].con==nums[i-4].con){
	    		return true;
	   	 	}
		}
    	if(y==0&&x!=0&&x!=3){
			if(nums[i].con==0||nums[i].con==nums[i+1].con||nums[i].con==nums[i-1].con||nums[i].con==nums[i+4].con){
	    		return true;
	   	 	}
		}
    	if(y==3&&x!=0&&x!=3){
			if(nums[i].con==0||nums[i].con==nums[i+1].con||nums[i].con==nums[i-1].con||nums[i].con==nums[i-4].con){
	    		return true;
	   	 	}
		}
    	if(y!=0&&y!=3&&x!=0&&x!=3){
			if(nums[i].con==0||nums[i].con==nums[i+1].con||nums[i].con==nums[i-1].con||nums[i].con==nums[i+4].con||nums[i].con==nums[i-4].con){
	    		return true;
	   	 	}
		}
    	
    }
	return false;
}
