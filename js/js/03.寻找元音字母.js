function Find(){
	var a=0,e=0,i=0,u=0,o=0;
	var StrIn = document.getElementById('str').value;
	for(j=0;j<StrIn.length;j++){
		switch(StrIn.charAt(j)){
			case 'a':
				a++;
				break;
			case 'e':
				e++;
				break;
			case 'i':
				i++;
				break;
			case 'u':
				u++;
				break;
			case 'o':
				o++;
				break;
			default:
				break;
		}
	}
	document.getElementById('show').innerHTML = '输入的内容中有'+a+"个a；"+e+"个e；"+i+"个i；"+u+"个u；"+o+"个o；";
}
