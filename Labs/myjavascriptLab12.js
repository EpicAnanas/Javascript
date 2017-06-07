var vraag = new Array();
var correctantwoord = new Array();
var score = 0;

vraag[1] = " 8 x 4 = ? ";
vraag[2] = " 8 / 4 = ? ";
vraag[3] = " 16 x 4 = ? ";
vraag[3] = " 16 x 4 = ? ";
vraag[3] = " 16 x 4 = ? ";
vraag[3] = " 16 x 4 = ? ";
vraag[3] = " 16 x 4 = ? ";
vraag[3] = " 16 x 4 = ? ";
vraag[3] = " 16 x 4 = ? ";
vraag[3] = " 16 x 4 = ? ";

correctantwoord[1] = "32";
correctantwoord[2] = "2";
correctantwoord[3] = "64";
correctantwoord[3] = "64";
correctantwoord[3] = "64";
correctantwoord[3] = "64";
correctantwoord[3] = "64";
correctantwoord[3] = "64";
correctantwoord[3] = "64";
correctantwoord[3] = "64";

function toets(index)
{
	antwoord = prompt(vraag[index]);
	if(antwoord == correctantwoord[index])
	{	
		score++;
		return("Correct! ");
	}
	else
	{
		return("Fout!!");
	}
}