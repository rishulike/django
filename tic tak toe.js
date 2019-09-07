var flag=true;

function func(obj)
{
	var a = obj.id;
	console.log(a);
	if(	document.getElementById(a).innerHTML=="")
	{	
		if (flag)
		{
			document.getElementById(a).innerHTML="X";
			flag=false;
		}
		else
		{
			document.getElementById(a).innerHTML="O";
			flag=true;
		}
	}
}