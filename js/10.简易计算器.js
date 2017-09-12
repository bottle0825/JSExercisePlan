var num1 = '0';
var num2 = '0';
var arr = ['ac','che','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','='];
var lis = document.getElementsByTagName('li');
var show = document.getElementById('show');
for(let i=0;i<lis.length;i++){
	lis[i].onclick = function(){
		console.log(num1.length)
		if(i==0){
			num1='0';
			num2='0';
			show.innerHTML = '0';
		}else if(num1.length<=7){
			if(num1=='0'&&i!=17){
				num1='';
			}
			if((i>3&&i<=6)||(i>7&&i<=10)||(i>11&&i<=14)||(i>15&&i<=17)){
				num1+=arr[i];
				show.innerHTML = num1;
			}
		}
	}
}
