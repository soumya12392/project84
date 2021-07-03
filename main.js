// Create a reference for the canvas
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

var img_image;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {
	ctx.drawImage(img_imgTag, 0, 0, canvas.width, canvas.height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed Alphabet Key";
			console.log("Alphabet Key");
		}
		else{
		if((keyPressed >=48 && keyPressed<=57))
		//write a code to check the type of key pressed
		{
			numberkey();
			document.getElementById("d1").innerHTML="You pressed Number Key";
			console.log("Number Key");
		}
		else{
		if((keyPressed >=37 && keyPressed<=40))
		//write a code to check the type of key pressed
		{
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key";
			console.log("Arrow Key");
		}
		else{
		if((keyPressed ==17 || keyPressed==18 || keyPressed==27))
		//write a code to check the type of key pressed
		{
			specialkey();
			document.getElementById("d1").innerHTML="You pressed Special Key";
			console.log("Special Key");
		}	
		else{
			otherkey();
			document.getElementById("d1").innerHTML="You pressed Symbol or Other Key";
			console.log("Other Key");
		}
	}
}
}
	}
		


function aplhabetkey()
{
	//upload respective image with the message. 
	img_image="Alphabet_Key.png";
	add();
}
function numberkey()
{
	img_image="Number_Key.png";
	add();
}
function arrowkey()
{
	img_image="Arrow_Key.png";
	add();
}
function specialkey()
{
	img_image="Special_Key.png";
	add();
}
function otherkey()
{
	img_image="Other_Key.png";
	add();
}