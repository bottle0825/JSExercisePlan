//---第一题
function show1(){
	var arr = [
	    {age: 19, name:'Jack'},
	    {age: 5, name:'Apple'},
	    {age: 12, name:'Lynn'},
	    {age: 25, name:'David'}
	];
	var sarr = [];
	var dos = '';
//	for(key in arr){
//		if(arr[key].age>18){
//			sarr.push(arr[key]);
//			dos+='{'
//			for(name in sarr[sarr.length-1]){
//				dos+=name+':'+sarr[sarr.length-1][name]+';'
//			}
//			dos+='}，</br>'
//		}
//	}
	//---使用filter过滤器过滤
	sarr = arr.filter(function(item,index,array){
		if(arr[index].age>18){
			dos+='{'
			for(name in arr[index]){
				dos+=name+':'+arr[index][name]+';'
			}
			dos+='}，</br>'
			return true;
		}
	});
	console.log(sarr);
	document.getElementById('show1').innerHTML = dos;
}
show1();

//---第二题
function show2(){
	var arrIn = document.getElementById('arrIn').value;
	var num = '';
	var arr = [];
	var j = 0;
	var flag = true;
	for(var i=0;i<arrIn.length;i++){
		if(arrIn.charAt(i)!=','){
			num+=arrIn.charAt(i);
		}else{
			arr[j] = parseInt(num);
			num = '';
			j++;
		}
	}
	arr[j] = parseInt(num);
	num = '';
	var index = [];
	console.log(arr);
	if(arr.every(function(){
		if(arr[arguments[1]]>0){
			return true;
		}else{
			index.push(arguments[1]+1);
			return false;
		}
	})){
		document.getElementById('show2').innerHTML = '输入的数组为:'+arr+';</br>它们都大于0！';
	}else{
		document.getElementById('show2').innerHTML = '输入的数组为:'+arr+';</br>它们不都大于0！'+'第'+index+'个数小于0';
	}
	console.log(index);
}

//---第三题
function show3(){
	var arrIn = document.getElementById('arrIn3').value;
	var n = parseInt(arrIn);
	var arr = [1,25,55,69,84,12,52];
	document.getElementById('show3').innerHTML = '原数组为:'+arr+';</br>';
	var num = arr.splice(n,1);
	arr.unshift(num);
	document.getElementById('show3').innerHTML += '改变后的数组为:'+arr+';</br>';
}

//---第四题
function show4(){
	var arrIn = document.getElementById('arrIn4').value;
	var num = '';
	var arr = [];
	var j = 0;
	var flag = true;
	for(var i=0;i<arrIn.length;i++){
		if(arrIn.charAt(i)!=','){
			num+=arrIn.charAt(i);
		}else{
			arr[j] = num;
			num = '';
			j++;
		}
	}
	arr[j] = num;
	num = '';
	var newarr = [];
	show(arr);
	function show(){
		for(var i=0;i<arguments.length;i++){
			newarr.push(arguments[i]);
		}
	}
	document.getElementById('show4').innerHTML = '输入的数组为:'+newarr+';</br>';
}

//---第五题
function show5(){
	var arr1 = [1,2,3,4,5];
	var arr2 = ['a',1,2,{a:3},3,4,1.2];
	function sum(arr){
		var num = 0;
		arr.forEach(function(){
			console.log(typeof(arr[arguments[1]]));
			if(typeof(arr[arguments[1]])=='number'){
				num += arr[arguments[1]];
			}
		});
		return num;
	}
	document.getElementById('show5').innerHTML += '数组为:'+arr1+';</br>';
	document.getElementById('show5').innerHTML += '和为:'+sum(arr1)+';</br>';
	document.getElementById('show5').innerHTML += '数组为:'+arr2+';</br>';
	document.getElementById('show5').innerHTML += '和为:'+sum(arr2)+';</br>';
}
show5();

//---第六题
function show6(){
	var arr1 = [1,2,2,3,4,4,4,4];
	var arr2 = [1,2,'M','e','r','r','y'];
	function uniq(arr){
		var newarr = [];
		for(var i=0;i<arr.length;i++){
			if(arr.indexOf(arr[i])==i){
				newarr.push(arr[i]);
			}
		}
		return newarr;
	}
	document.getElementById('show6').innerHTML += '数组为:'+arr1+';</br>';
	document.getElementById('show6').innerHTML += '去重后为:'+uniq(arr1)+';</br>';
	document.getElementById('show6').innerHTML += '数组为:'+arr2+';</br>';
	document.getElementById('show6').innerHTML += '去重后为:'+uniq(arr2)+';</br>';
}
show6();

//---第七题
function show7(){
	var arr = [
	    {age: 19, name:'Jack'},
	    {age: 5, name:'Apple'},
	    {age: 12, name:'Lynn'},
	    {age: 25, name:'David'}
	];
	var dos = '';
	arr.sort(function(a,b){return a.age-b.age;});
	for(key in arr){
		dos+='{'
		for(name in arr[key]){
			dos+=name+':'+arr[key][name]+';'
		}
		dos+='}，</br>'
	}
	document.getElementById('show7').innerHTML = dos;
}
show7();

//---第八题
function show8(){
	var arr1 = [1,2,3,4];
	function random(arr){
		var newarr = [];
		var l = arr.length;
		for(var i=0;i<l;i++){
			var r = Math.random()*arr.length;
			r = parseInt(r);
			newarr.push(arr.splice(r,1));
		}
		return newarr;
	}
	document.getElementById('show8').innerHTML += '随机后为:'+random(arr1)+';</br>';
}