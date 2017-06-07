var mediaArray = new Array(
	"image/unicorn.jpg", 
	"image/paashaas.jpg", 
	"image/pig.jpg", 
	"image/rechtebanaan.jpg", 
	"image/sinterklaas.jpg", 
	"image/badeend.jpg");

var max = mediaArray.length;
var randomIndex = 0;

function showMedia()
{
	randomIndex = Math.floor((Math.random() * max));
	document.getElementById("mediaimage").src = mediaArray[randomIndex];
	setTimeout("showMedia()", 1000);
}