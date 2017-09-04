//第一题
var num1 = [97,56,67,56,77,78,67,76,89,98];
var num = num1.sort(function(a,b){return a-b;});
var sum = 0;
for(var i=0;i<num1.length;i++){
	sum = num1[i] + sum;
}
document.getElementById('show1').innerHTML = '这组数中最大值为：'+num[9]+'；最小值为：'+num[0]+'；和为：'+sum;

//第二题
var arr = [1,3,5,7,8,1,56,34,2]
function Check(){
	var num = document.getElementById('getnum').value;
	num = parseInt(num);
	console.log(arr.indexOf(num));
	if(arr.indexOf(num)>=0){
		alert('已查找到该数值，在数组的第'+(parseInt(arr.indexOf(num))+1)+'个位置。');
	}else{
		arr.push(num);
		alert('该数值不存在！并且已收录');
	}
	document.getElementById('show2').innerHTML = arr;
}

//第三题
var num2 = [];
for(var i=1;i<=10;i++){
	if(i%2==0){
		num2[i/2] = i;
	}
}
document.getElementById('show3').innerHTML = '生成的数组为：'+num2;

//第四题
var arr2 = ["吕超","赵云","典韦","关羽","马超","张飞"];
document.getElementById('show4').innerHTML = arr2.join('&');
//document.getElementById('show4').innerHTML = arr2[0];
//for(var i=1;i<arr2.length;i++){
//	document.getElementById('show4').innerHTML+="&"+arr2[i];
//}

//冒泡排序
for(var j=num1.length-2;j>=0;j--){
	for(var i=0;i<j;i++){
		if(num1[i]>num1[i+1]){
			var temp = num1[i];
			num1[i] = num1[i+1];
			num1[i+1] = temp;
		}
	}
}
document.getElementById('show5').innerHTML = num1;
