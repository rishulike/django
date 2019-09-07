var Arr = ["","","","","d","","","",""];
function interpret() {
	document.getElementById('0').innerHTML = "X";
	for(var i=0;i<9;i++){
		document.getElementById(i).innerHTML=Arr[i];
	}
}
interpret();
