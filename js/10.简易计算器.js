var num1 = '0';
var num2 = '0';
var ans = 0;
var flag = 0;
var flags = 0;
var fh = '';
var arr = ['ac','che','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','='];
var lis = document.getElementsByTagName('li');
var show = document.getElementById('show');
for(let i=0;i<lis.length;i++){
	lis[i].onclick = function(){
		if(i==3||i==7||i==11||i==15){
			if(flag>0){
				Run();
			}
			console.log(flag);
			flag++;
			num2 = num1;
			num1 = '0';
			fh = arr[i];
			console.log(arr[i]);
		}else if(i==18){
			Run();
			flag=0;
		}else{
			Getnum(i);
		}
	}
}


//---去末尾0（然并卵，js不适合浮点运算）
function Remove0(str){
	var r = str.length;
	console.log(str);
	var nstr = str + '';
	if(nstr.indexOf('.') != (-1)){
		console.log(str);
		str.toFixed(r+3);
		nstr = str + '';
//		console.log('浮点数')
		for(var i=nstr.length-1;i>0;i--){
			if(nstr.charAt(i)=='0'){
				console.log(str);
//				console.log(str);
				nstr = nstr.substr(0,str.length-1);
			}else{
				console.log(str);
				return nstr;
			}
		}
	}else{
		return str;
	}
}

//---获取num
function Getnum(i){
	if(flags == 1){
		num1 = '0';
		num2 = '0';
		flags = 0;
		flag =0;
		fh = '';
	}
	if(i==0){
		num1='0';//按ac时候初始化计算器
		num2='0';
		flag=0;
		fh='';
		show.innerHTML = '0';
	}else{
		if(num1=='0'&&i!=17){
			num1='';//---当第一位为0的时候忽视掉
		}else if(num1=='0'&&i==2){
			num1='0';//---当为0的时候点击求百分比防止出现NaN。
		}
		if((i>3&&i<=6)||(i>7&&i<=10)||(i>11&&i<=14)||(i>15&&i<=17)){
			//---点击数字键时候显示并获取数字
			num1+=arr[i];
			show.innerHTML = num1;
		}else if(i==1){
			//---点击取相反数
			if(num1[0]=='-'){
				num1 = num1.slice(1);
				show.innerHTML = num1;
			}else{
				num1 = '-'+num1;
				show.innerHTML = num1;
			}
		}else if(i==2){
			//---求百分值
			num1 = (parseFloat(num1)/100);//---清除由js浮点数计算导致的误差
			num1 = Remove0(num1);
			show.innerHTML = num1;
		}
	}
	console.log(num1);
}

//---计算
function Run(){
	var n1 = parseFloat(num1);
	var n2 = parseFloat(num2);
	console.log(n1+','+n2);
	switch(fh){
		case '/':
			ans = n2/n1;
			ans = Remove0(ans);
			show.innerHTML = ans;
			num1 = ans+'';
			break;
		case '*':
			ans = n2*n1;
			ans = Remove0(ans);
			show.innerHTML = ans;
			num1 = ans+'';
			break;
		case '+':
			ans = n2+n1;
			ans = Remove0(ans);
			show.innerHTML = ans;
			num1 = ans+'';
			break;
		case '-':
			ans = n2-n1;
			ans = Remove0(ans);
			show.innerHTML = ans;
			num1 = ans+'';
			break;
		default:
			break;
	}
}
