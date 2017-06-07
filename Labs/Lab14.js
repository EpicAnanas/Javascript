function scantext()
{
	var commentaar = document.getElementById("commentaar").value;
	var scheldwoorden = 0;
	
	var array = new Array();
	array = commentaar.split(" ");
	
	for(var i = 0; i < array.length; i++)
	{
		if(array[i] == "seks")
		{
			array[i] = "*****";
			scheldwoorden++;
			document.writeln(array[i] + " ");
		}
		else if(array[i] == "terrorisme")
		{
			array[i] = "*****";
			scheldwoorden++;
			document.writeln(array[i] + " ");
		}
		else if(array[i] == "fraude")
		{
			array[i] = "*****";
			scheldwoorden++;
			document.writeln(array[i] + " ");
		}
		else
		{
			document.writeln(array[i] + " ");
		}
	}
	document.writeln("<br> Het aantal scheldwoorden is " + scheldwoorden + ".");
}