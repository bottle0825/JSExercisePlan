
function Change(){
	var StrIn = document.getElementById('str').value;
	var StrOut = '';
	for(i=0;i<StrIn.length;i++){
		StrOut = StrIn.charAt(i)+StrOut;
	}
	var Show = document.getElementById('show');
	Show.innerHTML = StrOut;
}
