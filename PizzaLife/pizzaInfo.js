function resize(a)
{	
	if(a == 1)
	{	
		document.getElementById('viewMenu').style.height =  "620px";
		document.getElementById('pizzaInfo').style.display = "none";
	}
	else
	{
		document.getElementById('viewMenu').style.height = "1250px";
		document.getElementById('pizzaInfo').style.display = "none";
		
		if(a==3)
		{
			document.getElementById('pizzaInfo').style.display = "block";
		}
	}
}